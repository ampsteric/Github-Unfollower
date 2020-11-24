import React , {useState} from 'react'
import './App.css'
import List from './Component/List/List';

// 
export default function App() {
  const [username , setUsername] = useState('');
  return (
    <div className="App">
          <h1>
            Find the Imposters on your Github
          </h1>

      <form onSubmit={e=>{
        e.preventDefault()
        setUsername(e.target[0].value)}
      }>
<div className="container mt-5" >
            <div class="input-group input-group-lg">
                <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Refresh and Enter Your Github Username" />
          </div>
                <button type="submit" class="btn btn-danger mt-3 mx-5">Submit</button>  
      </div>
      </form>
      <List user={username} />
    </div>
  )
}
