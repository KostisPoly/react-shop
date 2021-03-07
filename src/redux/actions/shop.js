import { firestore } from '../../firebase/firebase'

export const fetchShopDataStart = () => ({
    type: 'FETCH_SHOP_DATA_START'
})

export const fetchShopDataSuccess = collections => ({
    type: 'FETCH_SHOP_DATA_SUCCESS',
    payload: collections
})
export const fetchCollectionSuccess = items => ({
    type: 'FETCH_COLLECTION_DATA_SUCCESS',
    payload: items
})
export const fetchShopDataFail = error => ({
    type: 'FETCH_SHOP_DATA_FAIL',
    payload: error
})

//The actual thunk returning dispatch of shop actions while load from firestore
export const fetchFirestoreAsync = pagename => {
    console.log(pagename);
    if(pagename === 'shop'){
        return dispatch => {

            const collectionRef = firestore.collection('collections');
            dispatch(fetchShopDataStart());
            
            collectionRef.get()
            .then(snapShot => {
                let collections = [];
                
                snapShot.forEach(doc => {
                    
                    let data = doc.data();
                    collections.push({id: doc.id, ...data})
                })
    
                dispatch(fetchShopDataSuccess(collections));
            }).catch(error => dispatch(fetchShopDataFail(error)));
        }
    }else{
        return dispatch => {
            const collectionRef = firestore.collection('collections');
            dispatch(fetchShopDataStart());
            const query = collectionRef.where('routeName', '==', pagename).get();
        
            query
            .then( snapShot => {
                let items = [];
                snapShot.forEach(doc => {
                    let data = doc.data();
                    items = data.items;
                })
                dispatch(fetchCollectionSuccess(items));
            }).catch(error => dispatch(fetchShopDataFail(error)));
        }
    }
    
}