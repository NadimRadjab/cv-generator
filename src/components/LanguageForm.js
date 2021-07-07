import React, { Component } from 'react'



class LanguageFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: '',
            level: '',
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


                    <input type='text' name='language'
                        id='language'
                        value={this.state.language}
                        placeholder='Language'
                        onChange={this.handleChange} />

                    <select value={this.state.level}
                        name='level'
                        id='level'
                        onChange={this.handleChange}>
                        <option value='Beginner' >Beginner</option>
                        <option value='Intermediate' >Intermediate</option>
                        <option value='Upper-intermediate'>Upper-intermediate </option>
                        <option value='Proficient/Fluent'>Proficient/Fluent</option>
                        <option value='Native'>Native</option>
                    </select>


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
export default LanguageFrom;
