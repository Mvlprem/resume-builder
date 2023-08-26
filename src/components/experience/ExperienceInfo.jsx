function ExperienceInfo({ props }) {
  const render = props.map((obj) => (
    <div key={obj.id} className="experience">
      {props.length !== 0 ? (
        <>
          <p
            key={obj.start}
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning="true"
          >
            {obj.start} - {obj.end}
          </p>

          <p
            key={obj.company}
            style={{ fontWeight: 'bold' }}
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning="true"
          >
            {obj.company}
          </p>

          <p
            key={obj.place}
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning="true"
          >
            {obj.place}
          </p>
          <p
            key={obj.title}
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning="true"
          >
            {obj.title}
          </p>
          <p
            key={obj.description}
            style={{ gridColumn: '-2/-1' }}
            contentEditable="true"
            spellCheck="false"
            suppressContentEditableWarning="true"
          >
            {obj.description}
          </p>
        </>
      ) : null}
    </div>
  ))

  return (
    <div className="experience-info">
      {props.length !== 0 ? (
        <h3
          style={{
            backgroundColor: 'var(--color-background)',
            padding: '0.5rem',
          }}
        >
          Experience
        </h3>
      ) : null}

      {render}
    </div>
  )
}

export default ExperienceInfo
