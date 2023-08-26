import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import DeleteIcon from '@mui/icons-material/Delete'
import PersonIcon from '@mui/icons-material/Person'
import exampleCV from './exampleCV'
import emptyCV from './emptyCV'
import '../styles/aside.css'

function Button(props) {
  const buttonStyle = {
    color: props.color,
    gridColumn: props.gridColumn,
    fontWeight: props.fontWeight,
    backgroundColor: props.backgroundColor,
  }
  return (
    <button style={buttonStyle} onClick={props.click}>
      {props.icon}
      {props.text}
    </button>
  )
}

function Options({ event, educations, experiences }) {
  return (
    <div className="options">
      <Button
        text="Clear CV"
        icon={<DeleteIcon />}
        color="var(--color-accent-black)"
        backgroundColor="var(--color-accent-red)"
        click={() => emptyCV(event, educations, experiences)}
      />

      <Button
        fontWeight="bold"
        text="Load Example"
        icon={<PersonIcon />}
        color="var(--color-accent-black)"
        backgroundColor="var(--color-background)"
        click={() => exampleCV(event, educations, experiences)}
      />

      <Button
        text="Generate PDF"
        icon={<PictureAsPdfIcon />}
        gridColumn="1/4"
        color="var(--color-accent-black)"
        click={() => window.print()}
        backgroundColor="var(--color-accent-green)"
      />
    </div>
  )
}

export default Options
