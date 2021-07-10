import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/cvCreator.css'
import ExperienceForm from './ExperienceForm';
import { Github, Briefcase } from 'react-bootstrap-icons';
import Experience from './Experience';
import PersonalForm from './PersonalForm';
import PersonalInfo from './PersonalInfo';
import SchoolFrom from './SchoolForm';
import SchoolInfo from './SchoolInfo';
import LanguageFrom from './LanguageForm';
import ComputerForm from './ComputerForm';
import ComputerInfo from './ComputerInfo';
import { v4 as uuidv4 } from 'uuid';
import placeholder from "../imgs/placeholder.png";
import LanguageInfo from './LanguageInfo';

import Pdf from "react-to-pdf";

//Cv Creator Class Main Component
class CvCreator extends Component {
    static defaultProps = {
        personalInfoGerm: [{
            nameGerman: 'Name',
            streetGerman: 'Strasse',
            placeGerman: 'Ort,Stadt',
            birthDateGerman: 'Geburtsdaten',
            emailGerman: 'email',
            mobilGerman: 'mobil',
            statusGerman: 'Familienstand',
            nationalityGerman: 'Nationalität'
        }],
        ExpInfoGerm: [{
            positionGerman: 'Position',
            companyGerman: 'Firma',
            cityGerman: 'Stadt',
            dateFromGerman: 'von',
            dateToGerman: 'bis',

        }],
        SchoolInfoGerm: [{
            degreeGerman: 'ausbuildung',
            schoolGerman: 'Schulname',
            cityGerman: 'Stadt',
            dateFromGerman: 'von',
            dateToGerman: 'bis',

        }],
        computerInfoGerm: [{
            computerGerman: 'EDV-Kenntnisse:',


        }],
        languageInfoGerm: [{
            languageGerman: 'Sprachen:',
            levelGerman: 'Niveau'


        }]

    }
    constructor(props) {
        super(props)

        this.state = {
            experience: [{
                position: 'Produktions',
                company: 'Ktl Center Mhk helibron sarmak',
                city: 'Harrmanns',
                dateFrom: '04/2018',
                dateTo: '04/2020',
                id: uuidv4()

            },


            ],
            school: [
                {
                    degree: 'Degree',
                    schoolName: 'School Name,',
                    city: 'City',
                    dateFrom: 'From',
                    dateTo: ' To',
                    id: uuidv4()
                },

            ],
            computerSkill: [{
                computerSkills: 'Windows,Mac OS,MS Office',
                id: uuidv4()
            }],
            languages: [{
                language: 'Language',
                level: 'Level',
                id: uuidv4()

            }],

            street: 'street',
            place: 'zip/city',
            telephone: 'Phone',
            email: 'email@gmail.com',
            fullName: 'Kevin Sarmp',
            birthDate: '19.02.1991',
            nationality: 'nationality',
            status: 'single',
            picture: placeholder,
            drivingLicences: 'Class B'

        }
        this.addExperience = this.addExperience.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.updateData = this.updateData.bind(this);
        this.updateFile = this.updateFile.bind(this);
        this.addSchool = this.addSchool.bind(this);
        this.addLanguage = this.addLanguage.bind(this);
        this.addComputerSkill = this.addComputerSkill.bind(this);
        this.updateDriving = this.updateDriving.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }


    //Resets the form inputs
    resetForm() {
        this.setState({
            isGerman: false,
            experience: [{
                position: 'Produktions',
                company: 'Ktl Center Mhk helibron sarmak',
                city: 'Harrmanns',
                dateFrom: '04/2018',
                dateTo: '04/2020',
                id: uuidv4()

            },],
            school: [{
                degree: 'Degree',
                schoolName: 'School Name,',
                city: 'City',
                dateFrom: 'From',
                dateTo: ' To',
                id: uuidv4()
            }],
            computerSkill: [{
                computerSkills: 'Windows,Mac OS,MS Office',
                id: uuidv4()
            }],
            languages: [{
                language: 'Language',
                level: 'Level',
                id: uuidv4()

            }],
            street: 'street',
            place: 'zip/city',
            telephone: 'Phone',
            email: 'email@gmail.com',
            fullName: 'Kevin Sarmp',
            birthDate: '19.02.1991',
            nationality: 'nationality',
            status: 'single',
            picture: placeholder,
            drivingLicences: 'Class B'
        })
    }
    // Removes a form filters by id
    removeItem(id) {

        this.setState({
            experience: this.state.experience.filter(exp => exp.id !== id),
            school: this.state.school.filter(sc => sc.id !== id),
            languages: this.state.languages.filter(lan => lan.id !== id),
            computerSkill: this.state.computerSkill.filter(lan => lan.id !== id)
        });

    }
    //updates the driving state
    updateDriving(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
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
            computerSkill: this.state.computerSkill.map(obj => {
                if (obj.id === id) {
                    return { ...obj, [target]: value }
                }
                return obj;
            }),
            languages: this.state.languages.map(obj => {
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
        };
        this.setState(st => ({
            experience: [...st.experience, newObj],

        }));
    };
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
        }));

    };
    // Adds a language  obj to the language array
    addLanguage() {
        let newLanguage = {
            language: '',
            level: '',
            id: uuidv4()
        }
        this.setState(st => ({
            languages: [...st.languages, newLanguage]
        }));
    };
    // Adds a new computer obj to the computer array
    addComputerSkill() {
        let newComputer = {
            computerSkills: '',

            id: uuidv4()
        }
        this.setState(st => ({
            computerSkill: [...st.computerSkill, newComputer]
        }))
    };

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
        let newLanguageFrom = this.state.languages.map(lan => (
            <LanguageFrom
                key={lan.id}
                id={lan.id}
                updateData={this.updateData}
                removeItem={this.removeItem} />
        ));
        let newComputerForm = this.state.computerSkill.map(sk => (
            <ComputerForm
                key={sk.id}
                id={sk.id}
                updateData={this.updateData}
                removeItem={this.removeItem}
            />
        ));

        let newLanguageInfo = this.state.languages.map(lan => (
            <LanguageInfo
                key={lan.id}
                id={lan.id}
                language={lan.language}
                level={lan.level} />
        ));
        let newComputerInfo = this.state.computerSkill.map(lan => (
            <ComputerInfo
                key={lan.id}
                id={lan.id}
                computer={lan.computerSkills}
            />
        ));
        const ref = React.createRef();

        return (
            <div>

                <div className='Title'><h1>Cv-Creator</h1>
                    <Briefcase size={40} /></div>
                <div className='Cv-container'>

                    <div className='Cv-forms'>

                        <PersonalForm updateData={this.updateData} updateFile={this.updateFile} />


                        <h2>Professional Experience</h2>
                        <div className='Define'>
                            {newExpForm}
                            <button className="btn btn-info" onClick={this.addExperience}>Add</button>
                        </div>
                        <h2>Education</h2>
                        <div className='Define'>
                            {newSchoolForm}
                            <button className="btn btn-info" onClick={this.addSchool}>Add</button>
                        </div>
                        <div className='Define'>
                            <h2>Extra Skill</h2>
                            {newComputerForm}
                            <button className="btn btn-info" onClick={this.addComputerSkill}>Add</button>
                        </div>
                        <div className='Define'>
                            {newLanguageFrom}
                            <button className="btn btn-info" onClick={this.addLanguage}>Add</button>
                        </div>

                        <div className='DrivingFrom'>
                            <form>
                                <label className="col-sm-8  col-form-label" htmlFor='drivingLicences'>Driving Licences</label>
                                <input type='text'
                                    className="form-control"
                                    name='drivingLicences'
                                    id='drivingLicences'
                                    key={uuidv4}
                                    onChange={this.updateDriving}
                                    value={this.state.drivingLicences}
                                    placeholder='Driving Licences'
                                    maxLength='22' />
                            </form>
                        </div>






                    </div>
                    <div className="FunButtons">
                        <div ><Pdf targetRef={ref} filename="Cv.pdf" >

                            {({ toPdf }) => (
                                <Button onClick={toPdf}>Generate pdf</Button>
                            )}

                        </Pdf></div>
                        <div >
                            <button className="btn btn-danger" onClick={this.resetForm}>Reset Form</button>
                        </div>
                        <div >
                            <button className="btn btn-danger" onClick={this.changeLanguage}>German</button>
                        </div>
                    </div>
                    <div div className='Cv-infos' ref={ref}>

                        <div className='PersonalInfo-container '>
                            <PersonalInfo
                                nameGerman={this.props.nameGerman}
                                streetGerman={this.props.streetGerman}
                                placeGerman={this.props.placeGerman}
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
                        </div>
                        <div className='Exp'>
                            <h3>Professional Experience</h3>
                            {newExp}</div>
                        <div className='School'>
                            <h3>Education</h3>
                            {newSchoolInfo}
                        </div>
                        <div className='ExtraSkills'>
                            <h3>Extra Skills</h3>
                            <div className='skillGrid'>
                                <div className='LanInfo'>
                                    <div className='lanDiv'>
                                        <span id='lanSpan'>Languages:</span>
                                    </div>

                                    <div>
                                        {newLanguageInfo}
                                    </div>


                                </div>
                                <div className='SkillInfo'>
                                    <span id='computerSpan'>Computer skills:</span>
                                    <div className='computer-info'>
                                        {newComputerInfo}

                                    </div>

                                </div>

                            </div>


                        </div>

                        <div className='drivingContainer'>
                            <span id='drivingSpan'>Driving Licence:</span>
                            <p id='driving'>{this.state.drivingLicences}</p>
                        </div>
                    </div>

                </div >
                <div className='footer'>
                    <footer>
                        <p>Created By Nadim Radjab &copy; </p>
                        <a href='https://github.com/NadimRadjab'><Github /></a>
                    </footer>
                </div>
            </div >
        )
    }
}
export default CvCreator;