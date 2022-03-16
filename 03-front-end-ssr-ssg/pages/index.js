import { useEffect , useState} from "react"


function App() {

  const [listUser , setListUser] = useState([])

  useEffect(()=> {

    const headers =  new Headers()

    headers.append('Accept', 'application/json')

    fetch('http://localhost:3333/api/users').then(response => {

      return response.json()
    }).then(data => {

      setListUser(data.users)
      
    })
  } , [])
  



  return (

    <ul>
      {

        listUser.map(user => <li key={user.id}>{user.name}</li>)
     
      
      }

     
    </ul>

  )
}

export default App
