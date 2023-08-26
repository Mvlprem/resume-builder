function EducationInfo({ props }) {
  const render = props.map((obj) => (
    <div key={obj.id} className="education">
      {props.length !== 0 ? (
        <>
          <p
            key={obj.startDate}
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning="true"
          >
            {obj.startDate} - {obj.endDate}
          </p>

          <p
            key={obj.schoolName}
            style={{ fontWeight: 'bold' }}
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning="true"
          >
            {obj.schoolName}
          </p>

          <p
            key={obj.location}
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning="true"
          >
            {obj.location}
          </p>
          <p
            key={obj.degree}
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning="true"
          >
            {obj.degree}
          </p>
        </>
      ) : null}
    </div>
  ))

  return (
    <div className="education-info">
      {props.length !== 0 ? (
        <h3
          style={{
            backgroundColor: 'var(--color-background)',
            padding: '0.5rem',
          }}
        >
          Education
        </h3>
      ) : null}

      {render}
    </div>
  )
}

export default EducationInfo
