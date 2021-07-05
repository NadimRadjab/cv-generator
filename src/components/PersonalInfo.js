import React, { Component } from 'react'

class PersonalInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.street}</h3>
                <h3>{this.props.place}</h3>
                <p>{this.props.telephone}</p>
                <p>{this.props.email}</p>
                <p>{this.props.birthDate}</p>
                <p>{this.props.nationality}</p>
                <p>{this.props.status}</p>
            </div>
        )
    }
}



export default PersonalInfo;