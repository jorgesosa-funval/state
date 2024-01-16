import { useEffect, useState } from 'react'
import './App.css'
import CardContainer from './components/CardContainer';
function App() {

  const [users, setUsers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchId, setSearchId] = useState();
  const [sugerencias, setSugerenicas] = useState();

  async function getData() {
    const data = await fetch('users.json');
    const jsonData = await data.json();

    setUsers(jsonData);
    setFilteredData(jsonData);
  }

  // function filtrarData() {
  //   const data = users.filter(user => {

  //     let userName = user.name.toLowerCase();

  //     if (searchValue === '' && searchRolValue === '') {
  //       setFilteredData(users);
  //     }

  //     if (searchRolValue === '' && userName.includes(searchValue)) {

  //       return user;

  //     }

  //     if (searchValue === '' && user.role === searchRolValue) {

  //       return user;

  //     }


  //     if (searchRolValue !== '' && searchValue !== '' && userName.includes(searchValue) && user.role === searchRolValue) {

  //       return user;

  //     }



  //   })

  //   setFilteredData(data);
  // }

  function filtrarData(e) {
    setSearchValue(e.target.value);

    const data = users.filter(user => {

      let userName = user.name.toLowerCase();

      if (userName.includes(e.target.value.toLowerCase())) {

        return user;

      }

    })

    setSugerenicas(data);
  }
  
  function search() {
    const data = users.filter(user => {

      let userName = user.name.toLowerCase();
      let id = user.id;

      if (userName.includes(searchValue) && id >= searchId) {

        return user;

      }

    })

    setFilteredData(data);
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div>

      <input type="text" value={searchValue} onChange={filtrarData} />
      <input type="number" onChange={(e) => setSearchId(parseInt(e.target.value))} />
      <button onClick={search}>Search</button>
      {sugerencias && searchValue &&
        <ul className='sugerencias'>
          {
            sugerencias.map((sugerencia) =>

              <li onClick={(e) => { setSearchValue(e.target.textContent), setSugerenicas([]) }}>{sugerencia.name}</li>

            )
          }

        </ul>
      }



      <CardContainer
        users={filteredData}
      />


    </div>
  )
}

export default App
