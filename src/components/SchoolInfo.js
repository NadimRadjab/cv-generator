import React, { Component } from 'react'

class SchoolInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h2>{this.props.degree}</h2>
                <p>{this.props.school}</p>
                <p>{this.props.city}</p>
                <p>{this.props.dateFrom}</p>
                <p>{this.props.dateTo}</p>
            </div>
        )
    }
}










export default SchoolInfo;