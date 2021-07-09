import React, { Component } from 'react'
import '../styles/cvCreator.css'


class ComputerForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            computerSkills: '',
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
                    <input type='text' name='computerSkills'
                        id='computerSkills'
                        value={this.state.computerSkills}
                        placeholder='Computer Skills'
                        maxLength="25"

                        onChange={this.handleChange} />

                </form>

                <button onClick={this.handleClick}>Delete</button>
            </div >
        } else {
            result = <div>

            </div>
        }
        return result


    }


}
export default ComputerForm;
