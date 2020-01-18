import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import {prettyDOM} from '@testing-library/dom'
import SimpleBlog from './SimpleBlog'

test('renders a blog', ()=>{
	const blog = {title: 'a test blog', author: 'Clark Kent', likes: 5}
	const component = render(<SimpleBlog blog={blog}/>)
	expect(component.container).toHaveTextContent('a test blog')
	expect(component.container).toHaveTextContent(blog.author)
	expect(component.container).toHaveTextContent(blog.likes)
	
	// component.debug() //prints html to console.
	//prints selected html to console
	// const likes = component.container.querySelector('.likes')
	// console.log(prettyDOM(likes))
})



