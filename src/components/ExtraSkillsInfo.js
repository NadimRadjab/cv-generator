import React, { Component } from 'react'


class ExtraSkillsInfo extends Component {

    render() {
        return (
            <div>
                <p>{this.props.computer}</p>
                <p>{this.props.language}: {this.props.level}</p>
                <p>{this.props.driving}</p>
            </div>
        )
    }
}
export default ExtraSkillsInfo;