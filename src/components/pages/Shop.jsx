import React, { Component } from "react";

import { firestore } from  '../../firebase/firebase'
import CollectionPreview from '../collection/collectionPreview'

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: []
        };
    }
    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.get()
        .then(snapShot => {
            snapShot.forEach(doc => {
                const data = doc.data();
                Object.assign(data, {id: doc.id})
                this.setState({
                    collections: [...this.state.collections, data]
                })
            })
        })
    }

    render() {
        const { collections } = this.state;

        return (
            <div className="shop-page">
                {
                    collections.map(({ id, title, routeName, items }) => {
                        return <CollectionPreview key={id} title={title} routeName={routeName} items={items}/>
                    })
                }
            </div>
        );
    }
}

export default Shop;
