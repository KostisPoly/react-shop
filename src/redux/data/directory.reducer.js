const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: '/assets/hats/pexels-pixabay-35185.jpg',
            id: 1
        },
        {
            title: 'shoes',
            imageUrl: '/assets/shoes/nikes-red.png',
            id: 2
        },
        {
            title: 'womens fashion',
            imageUrl: '/assets/womens/floral-skirt.png',
            id: 3
        },
        {
            title: 'mens fashion',
            imageUrl: '/assets/mens/pexels-the-lazy-artist-gallery-1342609.jpg',
            id: 4
        },
        {
            title: 'accessories',
            imageUrl: '/assets/accessories/pexels-lumn-322207.jpg',
            id: 5
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;