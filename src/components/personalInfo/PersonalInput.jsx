function PersonalInput({ text, event }) {
  return (
    <div className="personal-input">
      <h1>Personal Details</h1>
      <h4>Full name</h4>
      <input
        type="text"
        value={text.fullName}
        name="fullName"
        autoComplete="off"
        placeholder="First and last name"
        onChange={(e) => event.newName(e.target.value)}
      />

      <h4>Email</h4>
      <input
        type="email"
        value={text.email}
        name="email"
        autoComplete="off"
        placeholder="Enter email"
        onChange={(e) => event.newEmail(e.target.value)}
      />

      <h4>Phone number</h4>
      <input
        type="text"
        value={text.phoneNumber}
        name="phoneNumber"
        autoComplete="off"
        placeholder="Enter phone number"
        onChange={(e) => event.newNumber(e.target.value)}
      />

      <h4>Address</h4>
      <input
        type="text"
        value={text.address}
        name="address"
        autoComplete="off"
        placeholder="City, Country"
        onChange={(e) => event.newAddress(e.target.value)}
      />
    </div>
  )
}

export default PersonalInput
