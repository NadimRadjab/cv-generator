import React, { Component } from 'react'



class ExtraSkillsFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            computerSkills: '',
            driving: '',
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
                        onChange={this.handleChange} />


                    <input type='text' name='driving'
                        id='driving'
                        value={this.state.driving}
                        placeholder='Driving Licence'
                        onChange={this.handleChange} />


                </form>


            </div >
        } else {
            result = <div>

            </div>
        }
        return result


    }


}
export default ExtraSkillsFrom;
