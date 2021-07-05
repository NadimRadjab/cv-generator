import React, { Component } from 'react'
import './cvCreator.css'
import ExperienceForm from './ExperienceForm';
import PersonalForm from './PersonalForm';
import PersonalInfo from './PersonalInfo';



class CvCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            experience: [],
            address: '',
            telephone: '',
            email: '',
            fullName: '',
            birthDate: '',
            nationality: '',
            status: '',
            pic: ''
        }
        this.addExperience = this.addExperience.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.updateData = this.updateData.bind(this);
    }
    removeItem() {
        let newList = this.state.experience
        newList.pop()
        this.setState({
            experience: newList
        })

    }
    updateData = (target, value) => {
        this.setState({ [target]: value });
    };
    addExperience() {
        this.setState(st => ({
            experience: [...st.experience, 'exp']
        }))
        console.log(this.state.experience)
    }
    render() {
        let newFrom = this.state.experience.map(form => (
            <ExperienceForm add={this.addExperience} removeItem={this.removeItem} />
        ))
        return (
            <div>
                <div className='Container'>
                    <PersonalForm updateData={
                        this.updateData

                    } />

                    <div>
                        <PersonalInfo
                            name={this.state.fullName}
                            address={this.state.address}
                            telephone={this.state.telephone}
                            email={this.state.email}
                        />
                    </div>
                    <ExperienceForm add={this.addExperience} removeItem={this.removeItem} />
                    {newFrom}
                    <button onClick={this.addExperience}>Add</button>

                </div>


            </div>
        )
    }
}
export default CvCreator;