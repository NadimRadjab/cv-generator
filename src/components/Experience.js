import React, { Component } from 'react'
import '../styles/ExperienceInfo.css'

class Experience extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>

                <div className='ExperienceInfo-itmes'>
                    <p id='positionTag'>{this.props.position}</p>
                    <p id='companyTag'>{this.props.company}, {this.props.city}</p>
                    <p id='dateFromTag'>{this.props.dateFrom} - {this.props.dateTo}</p>

                </div>
            </div>
        )
    }
}










export default Experience;