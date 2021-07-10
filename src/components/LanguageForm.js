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
                        <label className="col-sm-2  col-form-label" htmlFor='language'>{this.props.languageT}</label>
                        <input className="form-control" type='text' name='language'
                            id='language'
                            maxLength="15"
                            value={this.state.language}
                            placeholder={this.props.languageT}
                            onChange={this.handleChange} />
                    </div >

                    <div className='col-sm-5'>
                        <label className="col-sm-2  col-form-label" htmlFor='level'>{this.props.levelT}</label>
                        <select className="form-select" value={this.state.level}
                            name='level'
                            id='level'
                            onChange={this.handleChange}>
                            <option value='Beginner' >{this.props.beginnerT}</option>
                            <option value='Intermediate' >{this.props.intermediateT}</option>
                            <option value='Advanced'>{this.props.advancedT}</option>
                            <option value='Proficient/Fluent'>{this.props.proficientT}</option>
                            <option value='Native'>{this.props.nativeT}</option>
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
