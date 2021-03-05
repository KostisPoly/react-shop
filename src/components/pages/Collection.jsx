import React, { Component } from "react";
import dumpData from './dumpData';
import CollectionItem from '../collection/collection-item'
import './collection.scss'


class Collection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: dumpData
        };
    }
    

    render() {
        const { routeName } = this.props.match.params;
        const { collections } = this.state;
        let items = {};
        collections.forEach(collection => {
            if(collection.routeName === routeName){
                items = collection.items;
            }
        })
        
        return(
            
            <div className="collection-page">
                <h2 className="title">{routeName}</h2>
                <div className="items">
                {
                    items.map(item =>
                        {return <CollectionItem key={item.id} item={item}/>}
                    )
                }
                </div>
                
            </div>
    
        )
        
    }
}

export default Collection;