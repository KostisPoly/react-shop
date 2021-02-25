import React, { Component } from 'react'
import './directory.scss'
import MenuItem from './menu-item'
// import * as images from '../../../public/assets'
// console.log(images);
export default class Directory extends Component {
    constructor(props){
        super(props);

        this.state = {
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
        
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map( ({ title, imageUrl, id }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl}/>
                ))}
            </div>
        )
    }
}
