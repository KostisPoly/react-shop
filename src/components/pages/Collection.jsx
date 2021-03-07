import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchFirestoreAsync } from '../../redux/actions/shop'
import CollectionItem from '../collection/collection-item'
import './collection.scss'


class Collection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            routeName: props.match.params.routeName,
            collection: [],
            isFetching: false
        };
    }
    
    componentDidMount() {
        const  { fetchFirestoreAsync } = this.props;
        fetchFirestoreAsync(this.state.routeName);
    }

    render() {
        const { collection, isFetching } = this.props;

        return(
            
            <div className="collection-page">
                <h2 className="title">{this.state.routeName}</h2>
                <div className="items">
                {
                    isFetching ? 'LOADING......' : collection.map(item =>
                        {return <CollectionItem key={item.id} item={item}/>}
                    )
                }
                </div>
                
            </div>
    
        )
        
    }
}

const mapStateToProps = state => ({
    collection: state.shop.collection,
    isFetching: state.shop.isFetching
})

const mapDispatchToProps = dispatch => ({
    fetchFirestoreAsync: (pagename) => dispatch(fetchFirestoreAsync(pagename))
})


export default connect(mapStateToProps, mapDispatchToProps)(Collection);