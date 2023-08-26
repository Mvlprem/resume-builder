import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'

function Paragraph({ text, icon }) {
  if (text !== '')
    return (
      <p
        contentEditable="true"
        spellCheck="false"
        suppressContentEditableWarning="true"
      >
        {icon}
        {text}
      </p>
    )
}

function PersonalInfo({ props }) {
  const { fullName, email, phoneNumber, address } = props
  return (
    <div className="personal-info">
      <h1
        style={{ gridColumn: '1/4' }}
        contentEditable="true"
        spellCheck="false"
        suppressContentEditableWarning="true"
      >
        {fullName}
      </h1>
      <Paragraph text={email} icon={<EmailIcon />} />
      <Paragraph text={phoneNumber} icon={<PhoneIcon />} />
      <Paragraph text={address} icon={<LocationOnIcon />} />
    </div>
  )
}

export default PersonalInfo
