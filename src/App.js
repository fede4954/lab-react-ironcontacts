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

  const sortAz = () => {
    const sortedArray = [...contactsArray].sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0
    })

    setContacts(sortedArray)
  }

  const sortPop = () => {
    const sortedArray = [...contactsArray].sort((a, b) =>{
      return a.popularity-b.popularity
    })

    setContacts(sortedArray)
  }

  return <div className="App">
    <h1>IronContacts</h1>

    <button onClick={() => remainingContacts.length > 0 && randomContact()}>Add a random contact</button>
    <button onClick={() => sortAz()}>Sort alphabetically</button>
    <button onClick={() => sortPop()}>Sort by popularity</button>

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