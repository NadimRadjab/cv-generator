import React, { Component } from 'react'



class LanguageForm extends Component {
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
                        <option >Hello</option>
                        <option >Volvo</option>
                        <option>Fiat</option>
                    </select>
                    {/* <input type='text' name='level'
                        id='level'
                        value={this.state.level}
                        placeholder='Level'
                        onChange={this.handleChange}
                    /> */}

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
export default LanguageForm;
