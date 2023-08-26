import { useState } from 'react'
import '../src/styles/main.css'
import '../src/styles/aside.css'
import { v4 as uuidv4 } from 'uuid'
import Options from './utils/Options'
import PersonalInfo from './components/personalInfo/PersonalInfo'
import PersonalInput from './components/personalInfo/PersonalInput'
import EducationInfo from './components/education/EducationInfo'
import EducationInput from './components/education/EducationInput'
import ExperienceInfo from './components/experience/ExperienceInfo'
import ExperienceInput from './components/experience/ExperienceInput'

const newEducation = []
const newExperience = []

function App() {
  // Personal states
  const [fullName, newName] = useState('')
  const [email, newEmail] = useState('')
  const [phoneNumber, newNumber] = useState('')
  const [address, newAddress] = useState('')

  const personalInfo = { fullName, email, phoneNumber, address }
  const personalEvents = { newName, newEmail, newNumber, newAddress }

  // Education states
  const [endDate, newEnd] = useState('')
  const [degree, newDegree] = useState('')
  const [startDate, newStart] = useState('')
  const [schoolName, newSchool] = useState('')
  const [location, newLocation] = useState('')

  const uuid = uuidv4()
  const eduInfo = { id: uuid, startDate, endDate, schoolName, location, degree }
  const eduEvents = { newDegree, newSchool, newLocation, newStart, newEnd }
  const [educations, setEducations] = useState(newEducation)

  const addEducation = () => {
    const empty = Object.values(eduInfo).includes('')
    if (empty) return
    newEducation.push(eduInfo)
    clearEducation()
    setEducations(newEducation)
  }
  const clearEducation = () => {
    newDegree(''), newSchool(''), newLocation(''), newStart(''), newEnd('')
  }

  // Experience states
  const [end, setEnd] = useState('')
  const [start, setStart] = useState('')
  const [place, newPlace] = useState('')
  const [title, newTitle] = useState('')
  const [description, newDescription] = useState('')
  const [company, newCompany] = useState('')

  const expInfo = { id: uuid, start, end, place, title, company, description }
  const expEvents = {
    setEnd,
    setStart,
    newPlace,
    newTitle,
    newCompany,
    newDescription,
  }
  const [experiences, setExperiences] = useState(newExperience)

  const addExperience = () => {
    const empty = Object.values(expInfo).includes('')
    if (empty) return
    newExperience.push(expInfo)
    clearExperience()
    setExperiences(newExperience)
  }
  const clearExperience = () => {
    setEnd(''),
      setStart(''),
      newPlace(''),
      newTitle(''),
      newCompany(''),
      newDescription('')
  }

  return (
    <>
      <aside>
        <Options
          event={personalEvents}
          educations={setEducations}
          experiences={setExperiences}
        />
        <PersonalInput text={personalInfo} event={personalEvents} />
        <EducationInput
          text={eduInfo}
          event={eduEvents}
          add={addEducation}
          clear={clearEducation}
        />
        <ExperienceInput
          text={expInfo}
          event={expEvents}
          add={addExperience}
          clear={clearExperience}
        />
      </aside>
      <main>
        <PersonalInfo props={personalInfo} />
        <EducationInfo props={educations} />
        <ExperienceInfo props={experiences} />
      </main>
    </>
  )
}

export default App
