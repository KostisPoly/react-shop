import React, { Component } from "react";
import { firestore } from '../../firebase/firebase'
import CollectionItem from '../collection/collection-item'
import './collection.scss'


class Collection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            routeName: props.match.params.routeName,
            collection: []
        };
    }
    
    componentDidMount() {
        const collectionRef = firestore.collection('collections');
        const query = collectionRef.where('routeName', '==', this.state.routeName);
        
        query.get()
        .then( snapShot => {
            snapShot.forEach(doc => {
                const data = doc.data()
                const items = data.items;
                this.setState({collection: items})
            })
        })
    }

    render() {
        
        return(
            
            <div className="collection-page">
                <h2 className="title">{this.state.routeName}</h2>
                <div className="items">
                {
                    this.state.collection.map(item =>
                        {return <CollectionItem key={item.id} item={item}/>}
                    )
                }
                </div>
                
            </div>
    
        )
        
    }
}

export default Collection;