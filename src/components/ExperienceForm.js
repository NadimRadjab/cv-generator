import React, { Component } from 'react'
import Experience from './Experience';


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
            result = <div>
                <form >
                    <input type='text' name='position'
                        id='position'
                        value={this.state.position}
                        placeholder='Position'
                        onChange={this.handleChange} />

                    <input type='text' name='company'
                        id='company'
                        value={this.state.company}
                        placeholder='Company'
                        onChange={this.handleChange}
                    />

                    <input type='text' name='city'
                        id='city'
                        value={this.state.city}
                        placeholder='City'
                        onChange={this.handleChange} />

                    <input type='text' name='dateFrom'
                        id='dateFrom'
                        value={this.state.dateFrom}
                        placeholder='DateFrom'
                        onChange={this.handleChange} />


                    <input type='text' name='dateTo'
                        id='dateTo'
                        value={this.state.dateTo}
                        placeholder='DateTo'
                        onChange={this.handleChange} />
                </form>
                <button onClick={this.handleClick}>Delete</button>
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