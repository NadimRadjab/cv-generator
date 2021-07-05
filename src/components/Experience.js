import React, { Component } from 'react'

class Experience extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h2>{this.props.position}</h2>
                <p>{this.props.company}</p>
                <p>{this.props.city}</p>
                <p>{this.props.dateFrom}</p>
                <p>{this.props.dateTo}</p>
            </div>
        )
    }
}










export default Experience;