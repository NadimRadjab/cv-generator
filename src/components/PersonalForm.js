import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo';
import '../styles/PersonalForm.css'


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
            picture: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleChange(e) {
        this.props.updateData(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleFile(e) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener('load', () => {
            this.setState({
                picture: reader.result
            })
            this.props.updateFile(e.target.name, reader.result)
        })

    }
    render() {

        return (
            <div className='PersonalForm'>
                <h2>Personal Information</h2>
                <form className='row g-2'>

                    <label className="col-sm-1 col-form-label" htmlFor='fullName'>Name</label>
                    <input className="form-control" type='text' name='fullName'
                        id='fullName'
                        value={this.state.fullName}
                        placeholder='Name'
                        onChange={this.handleChange} />

                    <label className="col-sm-1 col-form-label" htmlFor='street'>Street</label>
                    <input className="form-control" type='text' name='street'
                        id='street'
                        value={this.state.street}
                        placeholder='Street'
                        onChange={this.handleChange} />

                    <label className="col-sm-1 col-form-label" htmlFor='place'>Place</label>
                    <input className="form-control" type='text' name='place'
                        id='place'
                        value={this.state.place}
                        placeholder='Place'
                        onChange={this.handleChange} />

                    <label className="col-sm-1 col-form-label" htmlFor='telephone'>Telephone</label>
                    <input className="form-control" type='number' name='telephone'
                        id='telephone'
                        value={this.state.telephone}
                        placeholder='Telephone'
                        onChange={this.handleChange} />

                    <label className="col-sm-1 col-form-label" htmlFor='email'>Email</label>
                    <input className="form-control" type='email' name='email'
                        id='email'
                        value={this.state.email}
                        placeholder='Email'
                        onChange={this.handleChange} />

                    <label className="col-sm-1 col-form-label" htmlFor='birthDate'>Birth Date</label>
                    <input className="form-control" type='text' name='birthDate'
                        id='birthDate'
                        value={this.state.birthDate}
                        placeholder='BirthDate'
                        onChange={this.handleChange} />

                    <label className="col-sm-1 col-form-label" htmlFor='nationality'>Nationality</label>
                    <input className="form-control" type='text' name='nationality'
                        id='nationality'
                        value={this.state.nationality}
                        placeholder='Nationality'
                        onChange={this.handleChange} />

                    <label className="col-sm-1 col-form-label" htmlFor='status'>Status</label>
                    <input className="form-control" type='text' name='status'
                        id='status'
                        value={this.state.status}
                        placeholder='Status'
                        onChange={this.handleChange} />

                    <label htmlFor='picture' id='picLabel'>Add a Photo</label>
                    <input type='file' name='picture'
                        id='picture'

                        placeholder='Picture'
                        accept='image/*'
                        onChange={this.handleFile} />




                </form>


            </div>
        )
    }
}
export default PersonalForm;