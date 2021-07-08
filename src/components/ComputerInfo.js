import React, { Component } from 'react'
import '../styles/cvCreator.css'

class ComputerInfo extends Component {

    render() {

        return (
            <div className='computer-info'>
                <p className='computerP' id='computer'>{this.props.computer}</p>

            </div>
        )
    }
}
export default ComputerInfo;