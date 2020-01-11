import React, {useState} from 'react';

//add login form
const Login = ({username, password, setUsername, setPassword}) => {
	// const handleChange = (event.target)=>
	
	return(
		<div>
			<h2>log in to application</h2>
			<form>
				<div>username <input type='text' name='username' value={username} onChange={e=>setUsername(e.target.value)}/></div>
				<div>password <input type='text' name='password' value={password} onChange={e=>setPassword(e.target.value)}/></div>
			</form>
		</div>
	)
}


const App = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	console.log(`username:${username} || password:${password}`)
	return (
	<div className="App">
	  <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
	</div>
	);
}

export default App;
