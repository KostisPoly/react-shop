import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchFirestoreAsync } from '../../redux/actions/shop'
import CollectionPreview from '../collection/collectionPreview'

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: [],
            isFetching: false
        };
    }

    componentDidMount() {
        const  { fetchFirestoreAsync } = this.props;
        fetchFirestoreAsync('shop');
    }

    render() {
        const { collections, isFetching } = this.props;

        return (
            <div className="shop-page">
                {
                    isFetching ? 'LOADING......' : collections.map(({ id, title, routeName, items }) => {
                        return <CollectionPreview key={id} title={title} routeName={routeName} items={items}/>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    collections: state.shop.collections,
    isFetching: state.shop.isFetching
})

const mapDispatchToProps = dispatch => ({
    fetchFirestoreAsync: (pagename) => dispatch(fetchFirestoreAsync(pagename))
})


export default connect(mapStateToProps, mapDispatchToProps)(Shop);