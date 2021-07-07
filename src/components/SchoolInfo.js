import React, { Component } from 'react'
import '../styles/SchoolInfo.css'

class SchoolInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='SchoolInfo-itmes'>
                <p id='degreeTag'>{this.props.degree}</p>
                <p id='schoolTag'>{this.props.school} {this.props.city}</p>

                <p id='dateTagSchool'>{this.props.dateFrom} - {this.props.dateTo}</p>

            </div>
        )
    }
}










export default SchoolInfo;