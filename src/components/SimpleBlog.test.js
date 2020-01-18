import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react'
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

test('clicking the link button calls the event handler twice', ()=>{
	const blog = {title: 'a test blog', author: 'Clark Kent', likes: 5}
	const mockHandler = jest.fn()
	const {getByText} = render(<SimpleBlog blog={blog} onClick={mockHandler}/>)
	const button = getByText('like')
	fireEvent.click(button)
	fireEvent.click(button)
	
	expect(mockHandler.mock.calls.length).toBe(2)
})

