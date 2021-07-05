import React, { Component } from 'react'

class PersonalInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.address}</h3>
                <p>{this.props.telephone}</p>
                <p>{this.props.email}</p>
            </div>
        )
    }
}



export default PersonalInfo;