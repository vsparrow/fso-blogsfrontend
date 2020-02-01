import React from 'react'
import Message from './Message'
import {connect} from 'react-redux'
import Blog from './Blog'
import Toggable from './Toggable'
import NewBlogsForm from './NewBlogsForm'
import PostLoginNotification from './PostLoginNotification'

const BlogsComponent = (props)=>{
	return(
		<div id='BlogsComponent'>
			<h2>blogs</h2>
			<Message  />			
			<PostLoginNotification />
			<Toggable buttonLabel={'Add a new blog'}>
				<NewBlogsForm />
			</Toggable>	
			<p></p>
			<div>blogs</div>
			<div>{props.blogs.sort((a,b)=>b.likes-a.likes).map((blog,index)=><Blog key={index} blog={blog} />)}</div>
		</div>	
	)
}//Blogs

const mapStateToProps = state => ({blogs: state.blogs})
export default connect(mapStateToProps)(BlogsComponent);
