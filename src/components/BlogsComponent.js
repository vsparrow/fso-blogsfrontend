import React from 'react'
import Message from './Message'
import {connect} from 'react-redux'
import Blog from './Blog'
import Toggable from './Toggable'
import NewBlogsForm from './NewBlogsForm'
import PostLoginNotification from './PostLoginNotification'

const BlogsComponent = ({blogs,setBlogs, user,setUser, message, setMessage})=>{
	return(
		<div id='BlogsComponent'>
			<h2>blogs</h2>
			<Message message={message} setMessage={setMessage} />			
			<PostLoginNotification user={user} setUser={setUser}/>
			<Toggable buttonLabel={'Add a new blog'}>
				<NewBlogsForm user={user} blogs={blogs} setBlogs={setBlogs} message={message}
				setMessage={setMessage}	
				/>
			</Toggable>	
			<p></p>
			<div>{"blogs"}</div>
			<div>{blogs.sort((a,b)=>b.likes-a.likes).map((blog,index)=><Blog key={index} blog={blog} user={user} blogs={blogs} setBlogs={setBlogs}/>)}</div>
		</div>	
	)
}//Blogs

// export default BlogsComponent
const mapStateToProps = state => ({blogs: state.blogs})
export default connect(mapStateToProps)(BlogsComponent);
