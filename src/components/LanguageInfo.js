import React, { Component } from 'react'
import '../styles/LanguageInfo.css'

class LanguageInfo extends Component {

    render() {
        return (
            <div className='languages-info'>
                <p id='languageP'>{this.props.language}: </p>
                <p id='levels'>{this.props.level}</p>

            </div>
        )
    }
}
export default LanguageInfo;