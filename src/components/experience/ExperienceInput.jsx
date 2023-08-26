import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from 'react'

function ExperienceInput({ text, event, add, clear }) {
  const [isActive, setIsActive] = useState(false)

  const checkState = (state) => {
    if (state) setIsActive(false)
    else setIsActive(true)
  }

  return (
    <div className="experience-input">
      <h1>Experience</h1>

      <button
        style={{ background: 'none', marginLeft: 'auto' }}
        onClick={() => checkState(isActive)}
      >
        {isActive ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </button>

      {isActive ? (
        <form style={{ gridColumn: '1/3' }} autoComplete="off">
          <h4>Company Name</h4>
          <input
            type="text"
            required
            name="company"
            placeholder="Enter company name"
            autoComplete="off"
            value={text.company}
            onChange={(e) => event.newCompany(e.target.value)}
          />

          <h4>Position Title</h4>
          <input
            type="text"
            required
            name="position"
            placeholder="Enter position"
            value={text.title}
            onChange={(e) => event.newTitle(e.target.value)}
          />

          <h4>Start Date</h4>
          <input
            type="text"
            required
            name="start"
            placeholder="Enter start date"
            value={text.start}
            onChange={(e) => event.setStart(e.target.value)}
          />

          <h4>End Date</h4>
          <input
            type="text"
            required
            name="end"
            placeholder="Enter end date"
            value={text.end}
            onChange={(e) => event.setEnd(e.target.value)}
          />

          <h4>Location</h4>
          <input
            type="text"
            required
            name="loc"
            placeholder="Enter location"
            value={text.place}
            onChange={(e) => event.newPlace(e.target.value)}
          />

          <h4>Description</h4>
          <textarea
            type="text"
            rows="4"
            required
            name="description"
            placeholder="Enter Description"
            value={text.description}
            onChange={(e) => event.newDescription(e.target.value)}
          />

          <div>
            <button
              type="reset"
              onClick={clear}
              style={{ backgroundColor: 'var(--color-accent-red)' }}
            >
              Clear
            </button>
            <button
              type="submit"
              onClick={add}
              style={{ backgroundColor: 'var(--color-accent-green)' }}
            >
              Submit
            </button>
          </div>
        </form>
      ) : null}
    </div>
  )
}

export default ExperienceInput
