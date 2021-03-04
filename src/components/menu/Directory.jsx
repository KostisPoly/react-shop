import React from 'react'
import './directory.scss'
import MenuItem from './menu-item'

import { connect } from 'react-redux'
import { selectSections } from '../../redux/selectors/directory.selector'
import { createStructuredSelector} from "reselect";

const  Directory = ({ sections }) => {
    
    return (
        <div className="directory-menu">
            {sections.map( ({ title, imageUrl, id }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl}/>
            ))}
        </div>
    )
    
}

const mapStateToProps = createStructuredSelector ({
    sections: selectSections
})

export default connect(mapStateToProps)(Directory)