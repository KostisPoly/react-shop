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
                    imageUrl: '/assets/pexels-mateusz-4350765.jpg',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: '/assets/pexels-hassan-ouajbir-887898.jpg',
                    id: 2
                },
                {
                    title: 'womens fashion',
                    imageUrl: '/assets/pexels-juan-mendez-1536619.jpg',
                    id: 3
                },
                {
                    title: 'mens fashion',
                    imageUrl: '/assets/pexels-the-lazy-artist-gallery-1342609.jpg',
                    id: 4
                },
                {
                    title: 'accessories',
                    imageUrl: '/assets/pexels-lumn-322207.jpg',
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
