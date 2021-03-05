import React, { Component } from "react";
import dumpData from './dumpData';
import CollectionPreview from '../collection/collectionPreview'

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: dumpData
        };
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
