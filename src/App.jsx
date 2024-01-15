import { useEffect, useState } from 'react'
import './App.css'
import CardContainer from './components/CardContainer';
function App() {
  const [users, setUsers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  async function getData() {
    const data = await fetch('users.json');
    const jsonData = await data.json();
    
    setUsers(jsonData);
    setFilteredData(jsonData);
  }

  function filtrarData() {
    const data = users.filter(user => user.name.includes(searchValue))
    setFilteredData(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>

      <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <button onClick={filtrarData}>Search</button>

      <CardContainer
        users={filteredData}
      />


    </div>
  )
}

export default App
