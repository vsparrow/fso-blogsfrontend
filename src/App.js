import React, {useState, useEffect} from 'react';
import blogService from './services/blogs'
import Login from './components/Login'
import Blog from './components/Blog'

// *********************************************************************************************
const Message = ({message, setMessage}) => {
	if(message.length === 0){ return <div></div>}
	setTimeout(()=>{setMessage('')},5000)
	return <div><h2>{message}</h2></div>
}

// *********************************************************************************************
const LogoutButton = ({setUser})=>{
	return <button onClick={()=>{window.localStorage.removeItem('loggedBlogappUser'); setUser(null);}}>logout</button>
}
// *********************************************************************************************
const PostLoginMessage = ({user,setUser})=>{
	return(<div><p>{user.name} logged in<LogoutButton setUser={setUser}/></p></div>)
}
// *********************************************************************************************
const BlogsComponent = ({blogs,setBlogs, user,setUser, message, setMessage})=>{
	return(
		<div>
			<h2>blogs</h2>
			<Message message={message} setMessage={setMessage} />
			<PostLoginMessage user={user} setUser={setUser}/>
			<NewBlogsForm user={user} blogs={blogs} setBlogs={setBlogs} message={message}
				setMessage={setMessage}	
			/>
			<p></p>
			<div>{"blogs"}</div>
			<div>{blogs.map((blog,index)=><Blog key={index} blog={blog}/>)}</div>
		</div>	
	)
}//Blogs
//***********************************************************************************************
const NewBlogsForm = ({user,blogs,setBlogs,message, setMessage}) => {
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
			setMessage(`a new blog ${results.title} by ${results.author} added`)
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
	const [message, setMessage] = useState('')
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
	return (<BlogsComponent 
				blogs={blogs} 
				setBlogs={setBlogs} 
				user={user} 
				setUser={setUser}
				message={message}
				setMessage={setMessage}
			/> )
}

export default App;
