import React, {useState, useEffect} from 'react';
import blogService from './services/blogs'

// **********************************************************************************************
//login form
const Login = ({username, password, user, setUsername, setPassword, setUser}) => {
	const handleLogin = async (e)=>{
		e.preventDefault()
		try{
			const user = await blogService.login({username, password})			
			setUser(user)
      		window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user)) 			
			setUsername('')
			setPassword('')
		}
		catch(exception){
			console.log(exception.message)	
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
// *********************************************************************************************
const LogoutButton = ({setUser})=>{
	return <button onClick={()=>{window.localStorage.removeItem('loggedBlogappUser'); setUser(null);}}>logout</button>
}
// *********************************************************************************************
const PostLoginMessage = ({user,setUser})=>{
	return(<div><p>{user.name} logged in<LogoutButton setUser={setUser}/></p></div>)
}
// *********************************************************************************************
const BlogsComponent = ({blogs,setBlogs, user,setUser})=>{
	return(
		<div>
			<h2>blogs</h2>
			<PostLoginMessage user={user} setUser={setUser}/>
			<NewBlogsForm user={user} blogs={blogs} setBlogs={setBlogs}/>
			<p></p>
			<div>{"blogs"}</div>
			<div>{blogs.map((blog,index)=><li key={index}>{blog.title}</li>)}</div>
		</div>	
	)
}//Blogs
//***********************************************************************************************
const NewBlogsForm = ({user,blogs,setBlogs}) => {
	const [title,setTitle] = useState('')
	const [author,setAuthor] = useState('')
	const [url,setUrl] = useState('')	
	
	const createHandler = async (e) => { 
		e.preventDefault()
		console.log("hello")
		const newBlogData = {title,url,author}
		console.log(newBlogData)
		//post the blog
		try{
			const results = await blogService.postBlog(newBlogData, user.token) //******
			console.log("results are,", results)
			setBlogs(blogs.concat(results))
		}catch(error){console.log(error)}	
		setTitle('')
		setAuthor('')
		setUrl('')
	}
	
	return(
		<div>
			<h2>create new</h2>
			<form>
				<div>title:<input type='text' name='title' value={title} onChange={e=>setTitle(e.target.value)}/></div>
				<div>author:<input type='text' name='author' value={author} onChange={e=>setAuthor(e.target.value)}/></div>
				<div>url:<input type='text' name='url' value={url} onChange={e=>setUrl(e.target.value)}/></div>
				<button onClick={createHandler}>create</button>
			</form>
		</div>
	)		
}  
//***********************************************************************************************
const App = () => {
	//************************************************************* variables
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(null)
	const [blogs, setBlogs] = useState([])
	//************************************************************* EFFECT
	useEffect(() => {
    	blogService.getAll().then(data => {console.log("data is",data);setBlogs(data)})
  	}, [])
	
	useEffect(()=>{
		const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
		if(loggedUserJSON){
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			blogService.getAll()
		}
	},[])
	
	//************************************************************* RENDERING
	if(user === null){ 
		return <Login 
				   username={username} 
				   setUsername={setUsername} 
				   password={password} 
				   setPassword={setPassword} 
				   user={user} 
				   setUser={setUser} 
				/>
	}
	//else
	return (<BlogsComponent blogs={blogs} setBlogs={setBlogs} user={user} setUser={setUser} /> )
}

export default App;
