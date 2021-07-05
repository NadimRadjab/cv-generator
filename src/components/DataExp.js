import React, { Component } from 'react'
import Experience from './Experience';
import ExperienceForm from './ExperienceForm';


class DataExp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: '',
            company: '',
            city: '',
            dateFrom: '',
            dateTo: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange() {
        this.props.updateData()
    }
    updateData = (target, value) => {
        this.setState({ [target]: value });

    };
    render() {

        return (
            <div>


                <Experience
                    updateData={this.updateData}
                    position={this.props.state}
                    company={this.state.company}
                    city={this.state.city}
                    dateFrom={this.state.dateFrom}
                    dateTo={this.state.dateTo}
                />
            </div>

        )
    }
}
export default DataExp;