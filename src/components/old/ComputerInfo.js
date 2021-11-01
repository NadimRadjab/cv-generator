import React, { Component } from 'react'
import '../styles/cvCreator.css'

class ComputerInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div >
                <p className='computerP' id='computer'>{this.props.computer}</p>

            </div>
        )
    }
}
export default ComputerInfo;