import contacts from './contacts.json'
import { useState } from 'react'

const App = () => {
  const [contactsArray, setContacts] = useState(contacts.slice(0, 5))
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5, contacts.length))

  const randomContact = () => {
    let randomNum = Math.floor(Math.random() * remainingContacts.length)
    const extractedContact = remainingContacts[randomNum]
    const newArray = remainingContacts.filter((contact) => {
      return contact.id !== extractedContact.id
    })
    setRemainingContacts(newArray)
    setContacts([...contactsArray, extractedContact])
  }

  return <div className="App">
    <h1>IronContacts</h1>

    <button onClick={() => remainingContacts.length > 0 && randomContact()}>Add a random contact</button>

    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
      </tr>

      {contactsArray.map((person, index) => {
        const { pictureUrl, name, popularity, wonOscar, wonEmmy } = person
        return (
          <tr key={index + Date.now()}>
            <td><img src={pictureUrl} alt={name} /></td>
            <td>{name}</td>
            <td>{popularity}</td>

            {wonOscar ? <td>🏆</td> : <td></td>}
            {wonEmmy ? <td>🏆</td> : <td></td>}
          </tr>
        )
      })}
    </table>
  </div>
}

export default App