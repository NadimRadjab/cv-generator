import React, { Component } from 'react'
import '../styles/ProfessionalExp.css'


class ExperienceForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: '',
            company: '',
            city: '',
            dateFrom: '',
            dateTo: '',
            isDelete: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleForm = this.toggleForm.bind(this)
    }
    toggleForm() {
        this.setState({
            isDelete: !this.state.isDelete
        });

    }
    handleClick(e) {
        this.setState({ isDelete: false });
        this.props.removeItem(this.props.id)
    }
    handleChange(e) {
        let id = this.props.id
        this.setState({
            [e.target.name]: e.target.value
        });
        this.props.updateData(e.target.name, e.target.value, id);
    }
    render() {
        let result;
        if (this.state.isDelete) {
            result = <div className='ExperienceForm'>
                <form className='row g-2' >
                    <div className='col-sm-5'>
                        <label className="col-sm-3  col-form-label" htmlFor='position'>Position</label>
                        <input className="form-control" type='text' name='position'
                            id='position'
                            value={this.state.position}
                            placeholder='Position'
                            onChange={this.handleChange} />
                        <label className="col-sm-3  col-form-label" htmlFor='company'>Company</label>
                        <input className="form-control" type='text' name='company'
                            id='company'
                            value={this.state.company}
                            placeholder='Company'
                            onChange={this.handleChange}
                        />
                        <label className="col-sm-3  col-form-label" htmlFor='city'>City</label>
                        <input className="form-control" type='text' name='city'
                            id='city'
                            value={this.state.city}
                            placeholder='City'
                            onChange={this.handleChange} />
                    </div>


                    <div className='col-sm-5'>
                        <label className="col-sm-4  col-form-label" htmlFor='dateFrom'>Date From</label>
                        <input className="form-control" type='text' name='dateFrom'
                            id='dateFrom'
                            value={this.state.dateFrom}
                            placeholder='DateFrom'
                            onChange={this.handleChange} />

                        <label className="col-sm-3 col-form-label" htmlFor='dateTo'>Date To</label>
                        <input className="form-control" type='text' name='dateTo'
                            id='dateTo'
                            value={this.state.dateTo}
                            placeholder='DateTo'
                            onChange={this.handleChange} />
                    </div>

                </form>
                <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>
                <div>

                </div>
            </div >
        } else {
            result = <div>

            </div>
        }
        return result


    }


}
export default ExperienceForm;