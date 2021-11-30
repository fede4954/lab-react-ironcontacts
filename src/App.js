import contacts from './contacts.json'
const contactsArray = contacts.splice(5)

const App = () => {
  return <div className="App">
    <h1>IronContacts</h1>
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      {contactsArray.map((person, index) => {
        const { pictureUrl, name, popularity } = person
        return (
          <tr key={index + Date.now()}>
            <td><img src={pictureUrl} alt={name} /></td>
            <td>{name}</td>
            <td>{popularity}</td>
          </tr>
        )
      })}
    </table>
  </div>
}

export default App