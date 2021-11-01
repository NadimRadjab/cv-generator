import React, { Component } from 'react'
import '../styles/PersonalInfo.css'

class PersonalInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="PersonalInfo">
                <div className='PersonalInfo-title-container'>
                    <h2>{this.props.name}</h2>
                    <div className='PersonalInfo-title'>

                        <p id='streetInfo'>{this.props.street}</p>
                        <li id='placeInfo'>{this.props.place}</li>
                        <p id='mobilInfo'>Mobil: {this.props.telephone}</p>
                        <li id='emailInfo'>E-Mail: {this.props.email}</li>
                    </div>
                </div>
                <div className='PersonalInfo-info'>
                    <div className='profilePic'>
                        <h3>{this.props.titleT}</h3>
                        <img src={this.props.picture}
                            alt='cv picture' />
                    </div>

                    <div className='PersonalInfo-itmes'>

                        <p id='nameTag' >{this.props.nameT}: </p>
                        <p id='birthTag'>{this.props.birthDateT}: </p>
                        <p id='nationalityTag'>{this.props.nationalityT}:</p>
                        <p id='statusTag'>{this.props.statusT}:</p>
                        <p id='name'>{this.props.name}</p>
                        <p id='birthdateInfo'>{this.props.birthDate}</p>
                        <p id='nationalityInfo'>{this.props.nationality}</p>
                        <p id='statusInfo'> {this.props.status}</p>
                    </div>
                </div>



            </div>
        )
    }
}



export default PersonalInfo;