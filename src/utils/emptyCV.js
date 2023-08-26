function emptyCV(event, educations, experiences) {
  const { newName, newEmail, newNumber, newAddress } = event
  newName(''), newEmail(''), newNumber(''), newAddress('')
  educations([])
  experiences([])
}

export default emptyCV
