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
            result = <div className='LanForm'>
                <form className='row g-4'>
                    <div className='col-sm-5'>
                        <label className="col-sm-2  col-form-label" htmlFor='language'>Language</label>
                        <input className="form-control" type='text' name='language'
                            id='language'
                            maxLength="15"
                            value={this.state.language}
                            placeholder='Language'
                            onChange={this.handleChange} />
                    </div >

                    <div className='col-sm-5'>
                        <label className="col-sm-2  col-form-label" htmlFor='level'>Level</label>
                        <select className="form-select" value={this.state.level}
                            name='level'
                            id='level'
                            onChange={this.handleChange}>
                            <option value='Beginner' >Beginner</option>
                            <option value='Intermediate' >Intermediate</option>
                            <option value='Advanced'>Advanced </option>
                            <option value='Proficient/Fluent'>Proficient/Fluent</option>
                            <option value='Native'>Native</option>
                        </select>

                    </div >
                </form>
                <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>

            </div >
        } else {
            result = <div>

            </div>
        }
        return result


    }


}
export default LanguageFrom;
