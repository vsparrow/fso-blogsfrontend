import React, {useState, useEffect} from 'react';
import blogService from './services/blogs'

//add login form
const Login = ({username, password, user, setUsername, setPassword, setUser}) => {
	// const handleChange = (event.target)=>
	const handleLogin = async (e)=>{
		e.preventDefault()
		console.log("logging in with", username, password)
		try{
			const user = await blogService.login({username, password})
			setUser(user)
			setUsername('')
			setPassword('')
			console.log(user)
		}
		catch(exception){
				
		}
	}
	return(
		<div>
			<h2>log in to application</h2>
			<form onSubmit={handleLogin}>
				<div>username <input type='text' name='username' value={username} onChange={e=>setUsername(e.target.value)}/></div>
				<div>password <input type='text' name='password' value={password} onChange={e=>setPassword(e.target.value)}/></div>
				<button type='submit'>login</button>
			</form>
		</div>
	)
}//Login

const Blogs = ({blogs,setBlogs})=>{
	useEffect((setBlogs)=>{ blogService.getAll().then(newBlogs=>setBlogs(newBlogs.map(b=><div key={b.id}>{b.title} {b.author}</div>)))
	}, [])
	return(
		<div>
			<h2>blogs</h2>
			<div>{blogs}</div>
		</div>	
	)
}//Blogs

const App = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(null)
	const [blogs, setBlogs] = useState([])
	
	const frontpage = ()=>{
		if(user === null){
			return <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} user={user} setUser={setUser} />		
		}
		return <Blogs blogs={blogs} setBlogs={setBlogs}/>
	}
	console.log(`username:${username} || password:${password}`)
	return (
	<div className="App">
	  {frontpage()}
	</div>
	);
}

export default App;
