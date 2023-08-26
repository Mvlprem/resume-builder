import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from 'react'

function EducationInput({ text, event, add, clear }) {
  const [isActive, setIsActive] = useState(false)

  const checkState = (state) => {
    if (state) setIsActive(false)
    else setIsActive(true)
  }

  return (
    <div className="education-input">
      <h1>Education</h1>

      <button
        style={{ background: 'none', marginLeft: 'auto' }}
        onClick={() => checkState(isActive)}
      >
        {isActive ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>

      {isActive ? (
        <form style={{ gridColumn: '1/3' }} autoComplete="off">
          <h4>School</h4>
          <input
            type="text"
            required
            name='school'
            placeholder='Enter school / university'
            value={text.schoolName}
            onChange={(e) => event.newSchool(e.target.value)}
          />

          <h4>Degree</h4>
          <input
            type="text"
            required
            name='degree'
            placeholder='Enter field of study'
            value={text.degree}
            onChange={(e) => event.newDegree(e.target.value)}
          />

          <h4>Start Date</h4>
          <input
            type="text"
            required
            name='startDate'
            placeholder='Enter start date'
            value={text.startDate}
            onChange={(e) => event.newStart(e.target.value)}
          />

          <h4>End Date</h4>
          <input
            type="text"
            required
            name='endDate'
            placeholder='Enter end date'
            value={text.endDate}
            onChange={(e) => event.newEnd(e.target.value)}
          />

          <h4>Location</h4>
          <input
            type="text"
            required
            name='location'
            placeholder='Enter location'
            value={text.location}
            onChange={(e) => event.newLocation(e.target.value)}
          />

          <div>
            <button
            type='reset'
              style={{ backgroundColor: 'var(--color-accent-red)' }}
              onClick={clear}
            >
              Clear
            </button>
            <button
              type="submit"
              style={{ backgroundColor: 'var(--color-accent-green)' }}
              onClick={add}
            >
              Submit
            </button>
          </div>
        </form>
      ) : null}
    </div>
  )
}

export default EducationInput
