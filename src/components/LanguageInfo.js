import React, { Component } from 'react'


class LanguageInfo extends Component {

    render() {
        return (
            <div>
                <p>{this.props.language}</p>
                <p>{this.props.level}</p>
            </div>
        )
    }
}
export default LanguageInfo;