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
    //Default Props Used for the translation of the page
    static defaultProps = {
        personalInfoEng: [{
            titleEng: 'Personal Information',
            nameEng: 'Name',
            streetEng: 'Street',
            placeEng: 'Zip/City',
            birthDateEng: 'Birth Date',
            emailEng: 'Email',
            mobilEng: 'Mobil',
            statusEng: 'Status',
            nationalityEng: 'Nationality',
            id: uuidv4()
        }],
        personalInfoGerm: [{
            titleGerman: 'Persönliche Angaben',
            nameGerman: 'Name',
            streetGerman: 'Strasse',
            placeGerman: 'Ort/Stadt',
            birthDateGerman: 'Geburtsdaten',
            emailGerman: 'email',
            mobilGerman: 'mobil',
            statusGerman: 'Familienstand',
            nationalityGerman: 'Nationalität',
            id: uuidv4()
        }],
        ExpInfoEng: {
            titleEng: 'Professional Experience ',
            positionEng: 'Position',
            companyEng: 'Company',
            cityEng: 'City',
            dateFromEng: 'From',
            dateToEng: 'Until',

        },
        ExpInfoGerm: {
            titleGerman: 'Berufliche Erfahrungen',
            positionGerman: 'Position',
            companyGerman: 'Firma',
            cityGerman: 'Stadt',
            dateFromGerman: 'von',
            dateToGerman: 'bis',

        },

        SchoolInfoGerm: {
            titleGerman: 'Schulausbildung',
            degreeGerman: 'Ausbildung',
            schoolGerman: 'Schulname',
            cityGerman: 'Stadt',
            dateFromGerman: 'von',
            dateToGerman: 'bis',

        },
        SchoolInfoEng: {
            titleEng: 'Education',
            degreeEng: 'Degree',
            schoolEng: 'School Name',
            cityEng: 'City',
            dateFromEng: 'From',
            dateToEng: 'Until',

        },
        computerInfoGerm: {
            computerGerman: 'EDV-Kenntnisse',


        },
        computerInfoEng: {
            computerEng: 'Coumputer Skills',


        },
        languageInfoGerm: {
            languageGerman: 'Sprachen',
            levelGerman: 'Niveau',
            beginnerGerman: 'Anfänger',
            intermediateGerman: 'Mittlere',
            advancedGerman: 'Fortgeschritten',
            fluentGerman: 'Kompetent/Fließend',
            motherGerman: 'Muttersprache',

        },
        languageInfoEng: {
            languageEng: 'Language',
            levelEng: 'Level',
            beginnerEng: 'Beginner',
            intermediateEng: 'Intermediate',
            advancedEng: 'Advanced',
            fluentEng: 'Proficient/Fluent',
            motherEng: 'Native',

        }

    }
    constructor(props) {
        super(props)

        this.state = {
            isGerman: false,
            experience: [{
                position: 'Position',
                company: 'Company Name',
                city: 'City Name',
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
                language: 'English',
                level: 'Level',
                id: uuidv4()

            }],

            street: 'Street Nr',
            place: 'Zip/City',
            telephone: 'Phone',
            email: 'email@gmail.com',
            fullName: 'Kevin Sarmp',
            birthDate: '19.02.1991',
            nationality: 'nationality',
            status: 'single',
            picture: placeholder,
            drivingLicences: 'Class B',
            expTitle: 'Professional Experience',
            schoolTitle: 'Education',
            skillsTitle: 'Extra Skills',
            drivingTitle: 'Driving Licence',
            languageTitle: 'Languages',
            computerTitle: 'Computer Skills'

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
        this.changeLanguageGerm = this.changeLanguageGerm.bind(this);
        this.changeLanguageEng = this.changeLanguageEng.bind(this);
    }

    //Change the language to German
    changeLanguageGerm() {
        this.setState({
            isGerman: true,
            expTitle: 'Berufliche Erfahrungen',
            schoolTitle: 'Schulausbildung',
            skillsTitle: 'Sonstige Kenntnisse',
            drivingTitle: 'Führerscheine',
            languageTitle: 'Sprachen',
            computerTitle: 'EDV-Kenntnisse',
            experience: [{
                position: 'Position',
                company: 'Firma Name',
                city: 'Stadt Name',
                dateFrom: '04/2018',
                dateTo: '04/2020',
                id: uuidv4()

            },],
            school: [{
                degree: 'Ausbildung',
                schoolName: 'Schulname,',
                city: 'Stadt',
                dateFrom: 'Von',
                dateTo: ' Bis',
                id: uuidv4()
            }],
            computerSkill: [{
                computerSkills: 'Windows,Mac OS,MS Office',
                id: uuidv4()
            }],
            languages: [{
                language: 'English',
                level: 'Niveau',
                id: uuidv4()

            }],
            street: 'Strasse Nr',
            place: 'Ort/Stadt',
            telephone: 'Mobil',
            email: 'email@gmail.com',
            fullName: 'Kevin Sarmp',
            birthDate: '19.02.1991',
            nationality: 'Nationalität',
            status: 'single',
            picture: placeholder,
            drivingLicences: 'Klasse B'
        })
    }
    //Change the language to English
    changeLanguageEng() {
        this.setState({
            isGerman: false,
            expTitle: 'Professional Experience',
            schoolTitle: 'Education',
            skillsTitle: 'Extra Skills',
            drivingTitle: 'Driving Licence',
            languageTitle: 'Languages',
            computerTitle: 'Computer Skills',
            experience: [{
                position: 'Position',
                company: 'Company Name',
                city: 'City Name',
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
                language: 'English',
                level: 'Level',
                id: uuidv4()

            }],
            street: 'Street Nr',
            place: 'Zip/City',
            telephone: 'Phone',
            email: 'email@gmail.com',
            fullName: 'Kevin Sarmp',
            birthDate: '19.02.1991',
            nationality: 'nationality',
            status: 'single',
            picture: placeholder,
            drivingLicences: 'Class B',

        })

    }
    //Resets the form sets the language to english
    resetForm() {
        this.setState({
            isGerman: false,
            expTitle: 'Professional Experience',
            schoolTitle: 'Education',
            skillsTitle: 'Extra Skills',
            drivingTitle: 'Driving Licence',
            languageTitle: 'Languages',
            computerTitle: 'Computer Skills',
            experience: [{
                position: 'Position',
                company: 'Company Name',
                city: 'City Name',
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
                language: 'English',
                level: 'Level',
                id: uuidv4()

            }],
            street: 'Street Nr',
            place: 'Zip/City',
            telephone: 'Phone',
            email: 'email@gmail.com',
            fullName: 'Kevin Sarmp',
            birthDate: '19.02.1991',
            nationality: 'nationality',
            status: 'single',
            picture: placeholder,
            drivingLicences: 'Class B',

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

    //func for the picture upload
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

        // Statements for the Language Translation for Foroms
        let translateGermanPersonal;
        let translateExp;
        let translateSchool;
        let translateComputer;
        let translateLanguage;
        let translateDriving;

        // Statements for the Language Translation for the Info
        let translateGermanPersonalInfo;


        //Translates the Personal Form
        if (this.state.isGerman === true) {
            translateGermanPersonal = this.props.personalInfoGerm.map(el => (
                <PersonalForm updateData={this.updateData} updateFile={this.updateFile}
                    streetT={el.streetGerman}
                    placeT={el.placeGerman}
                    birthDateT={el.birthDateGerman}
                    statusT={el.statusGerman}
                    nationalityT={el.nationalityGerman}
                    titleT={el.titleGerman}
                    key={el.id} />
            ))



        } else {
            translateGermanPersonal = this.props.personalInfoEng.map(el => (
                <PersonalForm key={el.id} updateData={this.updateData} updateFile={this.updateFile}
                    streetT={el.streetEng}
                    placeT={el.placeEng}
                    birthDateT={el.birthDateEng}
                    statusT={el.statusEng}
                    nationalityT={el.nationalityEng}
                    titleT={el.titleEng} />
            ))


        }


        //Translates the Professional Experience form
        if (this.state.isGerman === true) {
            translateExp = this.state.experience.map(form => (

                <ExperienceForm
                    key={form.id}
                    id={form.id}
                    removeItem={this.removeItem}
                    updateData={this.updateData}
                    positionT={this.props.ExpInfoGerm.positionGerman}
                    companyT={this.props.ExpInfoGerm.companyGerman}
                    cityT={this.props.ExpInfoGerm.cityGerman}
                    dateFromT={this.props.ExpInfoGerm.dateFromGerman}
                    dateToT={this.props.ExpInfoGerm.dateToGerman}
                    titelT={this.props.ExpInfoGerm.titleGerman}
                />



            ))
        } else {
            translateExp = this.state.experience.map(form => (
                translateExp = <ExperienceForm
                    key={form.id}
                    id={form.id}
                    removeItem={this.removeItem}
                    updateData={this.updateData}
                    positionT={this.props.ExpInfoEng.positionEng}
                    companyT={this.props.ExpInfoEng.companyEng}
                    cityT={this.props.ExpInfoEng.cityEng}
                    dateFromT={this.props.ExpInfoEng.dateFromEng}
                    dateToT={this.props.ExpInfoEng.dateToEng}
                    titelT={this.props.ExpInfoEng.titleEng}

                />

            ))

        };

        //Translates the Education form
        if (this.state.isGerman === true) {
            translateSchool = this.state.school.map(form => (

                <SchoolFrom
                    key={form.id}
                    id={form.id}
                    removeItem={this.removeItem}
                    updateData={this.updateData}
                    degreeT={this.props.SchoolInfoGerm.degreeGerman}
                    schoolT={this.props.SchoolInfoGerm.schoolGerman}
                    cityT={this.props.SchoolInfoGerm.cityGerman}
                    dateFromT={this.props.SchoolInfoGerm.dateFromGerman}
                    dateToT={this.props.SchoolInfoGerm.dateToGerman}
                    titelT={this.props.SchoolInfoGerm.titleGerman}
                />



            ))
        } else {
            translateSchool = this.state.school.map(form => (
                translateSchool = <SchoolFrom
                    key={form.id}
                    id={form.id}
                    removeItem={this.removeItem}
                    updateData={this.updateData}
                    degreeT={this.props.SchoolInfoEng.degreeEng}
                    schoolT={this.props.SchoolInfoEng.schoolEng}
                    cityT={this.props.SchoolInfoEng.cityEng}
                    dateFromT={this.props.SchoolInfoEng.dateFromEng}
                    dateToT={this.props.SchoolInfoEng.dateToEng}
                    titelT={this.props.SchoolInfoEng.titleEng}

                />

            ))

        }

        //Translates the Language form
        if (this.state.isGerman === true) {
            translateLanguage = this.state.languages.map(form => (

                <LanguageFrom
                    key={form.id}
                    id={form.id}
                    removeItem={this.removeItem}
                    updateData={this.updateData}
                    languageT={this.props.languageInfoGerm.languageGerman}
                    levelT={this.props.languageInfoGerm.levelGerman}
                    beginnerT={this.props.languageInfoGerm.beginnerGerman}
                    intermediateT={this.props.languageInfoGerm.intermediateGerman}
                    advancedT={this.props.languageInfoGerm.advancedGerman}
                    proficientT={this.props.languageInfoGerm.fluentGerman}
                    nativeT={this.props.languageInfoGerm.motherGerman}
                />



            ))
        } else {
            translateLanguage = this.state.languages.map(form => (
                translateLanguage = <LanguageFrom
                    key={form.id}
                    id={form.id}
                    removeItem={this.removeItem}
                    updateData={this.updateData}
                    languageT={this.props.languageInfoEng.languageEng}
                    levelT={this.props.languageInfoEng.levelEng}
                    beginnerT={this.props.languageInfoEng.beginnerEng}
                    intermediateT={this.props.languageInfoEng.intermediateEng}
                    advancedT={this.props.languageInfoEng.advancedEng}
                    proficientT={this.props.languageInfoEng.fluentEng}
                    nativeT={this.props.languageInfoEng.motherEng}

                />

            ))

        };

        //Translates the computer form
        if (this.state.isGerman === true) {
            translateComputer = this.state.computerSkill.map(form => (

                <ComputerForm
                    key={form.id}
                    id={form.id}
                    removeItem={this.removeItem}
                    updateData={this.updateData}
                    computerT={this.props.computerInfoGerm.computerGerman}

                />



            ))
        } else {
            translateComputer = this.state.computerSkill.map(form => (
                translateComputer = <ComputerForm
                    key={form.id}
                    id={form.id}
                    removeItem={this.removeItem}
                    updateData={this.updateData}
                    computerT={this.props.computerInfoEng.computerEng}

                />

            ))

        };

        //Translates the driving form
        if (this.state.isGerman === true) {
            translateDriving = <div className='DrivingFrom'>
                <form>
                    <label className="col-sm-8  col-form-label" htmlFor='drivingLicences'>Führerscheine</label>
                    <input type='text'
                        className="form-control"
                        name='drivingLicences'
                        id='drivingLicences'
                        key={uuidv4}
                        onChange={this.updateDriving}
                        value={this.state.drivingLicences}
                        placeholder='Führerscheine'
                        maxLength='22' />
                </form>
            </div>



        } else {
            translateDriving = <div className='DrivingFrom'>
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




        };

        //Translates the Personal Info for the Cv
        if (this.state.isGerman === true) {
            translateGermanPersonalInfo = this.props.personalInfoGerm.map(el => (
                <PersonalInfo
                    key={el.id}
                    nameT={el.nameGerman}
                    streetT={el.streetGerman}
                    placeT={el.placeGerman}
                    telephoneT={el.placeGerman}
                    birthDateT={el.birthDateGerman}
                    nationalityT={el.nationalityGerman}
                    statusT={el.statusGerman}
                    titleT={el.titleGerman}
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
            ));
        } else {
            translateGermanPersonalInfo = this.props.personalInfoEng.map(el => (
                <PersonalInfo
                    key={el.id}
                    nameT={el.nameEng}
                    streetT={el.streetEng}
                    placeT={el.placeEng}
                    telephoneT={el.placeEng}
                    birthDateT={el.birthDateEng}
                    nationalityT={el.nationalityEng}
                    statusT={el.statusEng}
                    titleT={el.titleEng}
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
            ));

        };



        /// Creates elements for the amount of items in the given array

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


        //ref variable
        const ref = React.createRef();

        return (
            <div>

                <div className='Title'><h1>Cv-Creator</h1>
                    <Briefcase size={40} />
                    <div className='lanButtons' >
                        <button className="btn " onClick={this.changeLanguageGerm}>German</button>
                        <button className="btn " onClick={this.changeLanguageEng}>English</button>
                    </div>

                </div>

                <div className='Cv-container'>

                    <div className='Cv-forms'>
                        {translateGermanPersonal}

                        <div className='Define'>
                            <h2>{this.state.expTitle}</h2>
                            {translateExp}

                            <button className="btn btn-info" onClick={this.addExperience}>Add</button>
                        </div>

                        <div className='Define'>
                            <h2>{this.state.schoolTitle}</h2>
                            {translateSchool}

                            <button className="btn btn-info" onClick={this.addSchool}>Add</button>
                        </div>
                        <div className='Define'>
                            <h2>{this.state.skillsTitle}</h2>
                            {translateComputer}

                            <button className="btn btn-info" onClick={this.addComputerSkill}>Add</button>
                        </div>
                        <div className='Define'>
                            {translateLanguage}

                            <button className="btn btn-info" onClick={this.addLanguage}>Add</button>
                        </div>

                        {translateDriving}


                    </div>

                    <div className="FunButtons">
                        <div ><Pdf targetRef={ref} filename="Cv.pdf" >

                            {({ toPdf }) => (
                                <Button className='btn btn-success' onClick={toPdf}>Generate PDF</Button>
                            )}

                        </Pdf></div>
                        <div >
                            <button className="btn btn-danger" onClick={this.resetForm}>Reset Form</button>
                        </div>
                    </div>

                    <div div className='Cv-infos' ref={ref}>

                        <div className='PersonalInfo-container '>
                            {translateGermanPersonalInfo}

                        </div>
                        <div className='Exp'>
                            <h3>{this.state.expTitle}</h3>
                            {newExp}
                        </div>

                        <div className='School'>
                            <h3>{this.state.schoolTitle}</h3>
                            {newSchoolInfo}
                        </div>
                        <div className='ExtraSkills'>
                            <h3>{this.state.skillsTitle}</h3>
                            <div className='skillGrid'>
                                <div className='LanInfo'>
                                    <div className='lanDiv'>
                                        <span id='lanSpan'>{this.state.languageTitle}:</span>
                                    </div>

                                    <div>

                                        {newLanguageInfo}
                                    </div>


                                </div>
                                <div className='SkillInfo'>
                                    <span id='computerSpan'>{this.state.computerTitle}:</span>
                                    <div className='computer-info'>
                                        {newComputerInfo}

                                    </div>

                                </div>

                            </div>


                        </div>

                        <div className='drivingContainer'>
                            <span id='drivingSpan'>{this.state.drivingTitle}:</span>
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