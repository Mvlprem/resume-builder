import exampleData from '../data/exampleData'

function exampleCV(event, educations, experiences) {
  const { newName, newEmail, newNumber, newAddress } = event
  const { fullName, email, phoneNumber, address } = exampleData.personalInfo
  newName(fullName),
    newEmail(email),
    newNumber(phoneNumber),
    newAddress(address)

  educations(exampleData.sections.educations)
  experiences(exampleData.sections.experiences)
}

export default exampleCV
