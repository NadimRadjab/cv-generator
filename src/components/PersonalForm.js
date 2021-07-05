import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo';
import './PersonalForm.css'


class PersonalForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            street: '',
            place: '',
            telephone: '',
            email: '',
            fullName: '',
            birthDate: '',
            nationality: '',
            status: '',
            pic: ''

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.updateData(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {

        return (
            <div className='List-form'>
                <h2>Personal Information</h2>
                <form>
                    <input type='text' name='fullName'
                        id='fullName'
                        value={this.state.fullName}
                        placeholder='Name'
                        onChange={this.handleChange} />

                    <input type='text' name='street'
                        id='street'
                        value={this.state.street}
                        placeholder='Street'
                        onChange={this.handleChange} />

                    <input type='text' name='place'
                        id='place'
                        value={this.state.place}
                        placeholder='Place'
                        onChange={this.handleChange} />


                    <input type='number' name='telephone'
                        id='telephone'
                        value={this.state.telephone}
                        placeholder='Telephone'
                        onChange={this.handleChange} />

                    <input type='email' name='email'
                        id='email'
                        value={this.state.email}
                        placeholder='Email'
                        onChange={this.handleChange} />


                    <input type='text' name='birthDate'
                        id='birthDate'
                        value={this.state.birthDate}
                        placeholder='BirthDate'
                        onChange={this.handleChange} />

                    <input type='text' name='nationality'
                        id='nationality'
                        value={this.state.nationality}
                        placeholder='Nationality'
                        onChange={this.handleChange} />

                    <input type='text' name='status'
                        id='status'
                        value={this.state.status}
                        placeholder='Status'
                        onChange={this.handleChange} />
                </form>


            </div>
        )
    }
}
export default PersonalForm;