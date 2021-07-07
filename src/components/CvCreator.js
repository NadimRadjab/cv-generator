import React, { Component } from 'react'
import '../styles/cvCreator.css'
import ExperienceForm from './ExperienceForm';
import Experience from './Experience';
import PersonalForm from './PersonalForm';
import PersonalInfo from './PersonalInfo';
import SchoolFrom from './SchoolForm';
import SchoolInfo from './SchoolInfo';
import ExtraSkillsFrom from './ExtraSkillsFrom';
import ExtraSkillsInfo from './ExtraSkillsInfo';
import { v4 as uuidv4 } from 'uuid';
import { PDFViewer } from '@react-pdf/renderer';
import Pdf from "react-to-pdf";

//Cv Creator Class Main Component
class CvCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            experience: [{
                position: '',
                company: '',
                city: '',
                dateFrom: '',
                dateTo: '',
                id: uuidv4()
            }],
            school: [
                {
                    degree: '',
                    schoolName: '',
                    city: '',
                    dateFrom: '',
                    dateTo: '',
                    id: uuidv4()
                }
            ],
            skills: [{
                language: '',
                level: '',
                computerSkills: '',
                driving: '',
                id: uuidv4()
            }],
            street: '',
            place: '',
            telephone: '',
            email: '',
            fullName: '',
            birthDate: '',
            nationality: '',
            status: '',
            picture: '',

        }
        this.addExperience = this.addExperience.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.updateData = this.updateData.bind(this);
        this.updateFile = this.updateFile.bind(this);
        this.addSchool = this.addSchool.bind(this);
        this.addSkill = this.addSkill.bind(this);
    }

    // Removes a form filters by id
    removeItem(id) {

        this.setState({
            experience: this.state.experience.filter(exp => exp.id !== id),
            school: this.state.school.filter(sc => sc.id !== id),
            language: this.state.skills.filter(lan => lan.id !== id)
        });

    }

    //updates the data by setting the  state  the function is passed as a prop to the childs components to take there value
    updateData = (target, value, id) => {
        this.setState({
            experience: this.state.experience.map(obj => {
                if (obj.id === id) {
                    return { ...obj, [target]: value }
                }
                return obj;
            }),
            school: this.state.school.map(obj => {
                if (obj.id === id) {
                    return { ...obj, [target]: value }
                }
                return obj;
            }),
            skills: this.state.skills.map(obj => {
                if (obj.id === id) {
                    return { ...obj, [target]: value }
                }
                return obj;
            })
        })
        this.setState({ [target]: value });


    };
    updateFile = (target, value) => {

        this.setState({
            [target]: value
        })
    };


    // Adds a new obj to the exp array
    addExperience() {
        let newObj = {
            position: '',
            company: '',
            city: '',
            dateFrom: '',
            dateTo: '',
            id: uuidv4()
        }
        this.setState(st => ({
            experience: [...st.experience, newObj],

        }))
    }
    // Adds a new school obj to the school array
    addSchool() {
        let newSchool = {
            position: '',
            company: '',
            city: '',
            dateFrom: '',
            dateTo: '',
            id: uuidv4()
        }
        this.setState(st => ({
            school: [...st.school, newSchool]
        }))

    }
    // Adds a new skill obj to the skills array
    addSkill() {
        let newSkill = {
            language: '',
            level: '',
            computerSkills: '',
            driving: '',
            id: uuidv4()
        }
        this.setState(st => ({
            skills: [...st.skills, newSkill]
        }))
    }
    render() {
        /// Creates elements for the amount of items in the given array
        let newExpForm = this.state.experience.map(form => (
            <ExperienceForm
                key={form.id}
                id={form.id}
                removeItem={this.removeItem}
                updateData={this.updateData}

            />

        ))
        let newExp = this.state.experience.map(form => (

            <Experience
                key={form.id}
                id={form.id}
                position={form.position}
                company={form.company}
                city={form.city}
                dateFrom={form.dateFrom}
                dateTo={form.dateTo} />

        ));

        let newSchoolForm = this.state.school.map(sc => (
            <SchoolFrom
                key={sc.id}
                id={sc.id}
                updateData={this.updateData}
                removeItem={this.removeItem} />
        ));
        let newSchoolInfo = this.state.school.map(sc => (

            <SchoolInfo
                key={sc.id}
                id={sc.id}
                degree={sc.degree}
                school={sc.schoolName}
                city={sc.city}
                dateFrom={sc.dateFrom}
                dateTo={sc.dateTo} />
        ));
        let newLanguageFrom = this.state.skills.map(lan => (
            <ExtraSkillsFrom
                key={lan.id}
                id={lan.id}
                updateData={this.updateData}
                removeItem={this.removeItem} />
        ));
        let newLanguageInfo = this.state.skills.map(lan => (
            <ExtraSkillsInfo
                key={lan.id}
                id={lan.id}
                language={lan.language}
                level={lan.level}
                computer={lan.computerSkills}
                driving={lan.driving} />
        ));

        return (
            <div className='Cv-container'>

                <div className='Cv-forms'>
                    <PersonalForm updateData={this.updateData} updateFile={this.updateFile} />
                    <h2>Professional Experience</h2>
                    {newExpForm}
                    <button onClick={this.addExperience}>Add</button>
                    <h2>Education</h2>
                    {newSchoolForm}
                    <button onClick={this.addSchool}>Add</button>
                    <h2>Extra Skill</h2>
                    {newLanguageFrom}
                    <button onClick={this.addSkill}>Add</button>
                </div>

                <Pdf >
                    {({ toPdf, targetRef }) => (
                        <div className='Cv-infos' ref={targetRef}>

                            <PersonalInfo
                                name={this.state.fullName}
                                street={this.state.street}
                                place={this.state.place}
                                telephone={this.state.telephone}
                                email={this.state.email}
                                birthDate={this.state.birthDate}
                                nationality={this.state.nationality}
                                status={this.state.status}
                                picture={this.state.picture}

                            />

                            {newExp}
                            {newSchoolInfo}
                            {newLanguageInfo}
                            <button onClick={toPdf}>PDF</button>
                        </div>
                    )}
                </Pdf>


            </div>
        )
    }
}
export default CvCreator;