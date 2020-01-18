import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react'
import {prettyDOM} from '@testing-library/dom'
import Blog from './Blog'

describe('<Blog />', ()=>{
	let component
	let user = 	{name: 'John Theowner', username:'petowner'}
	let blog = {
		title: 'test blog', 
		author:'Garfield Thecat', 
		link: "www.yahoo.com", 
		likes:5,
		user
	}
	beforeEach(()=>{
		component = render(<Blog blog={blog} user={user}/>)
	})
	
	test('initial render only display title and author', ()=>{
		const div = component.container.querySelector('#blogMinimal')
		expect(div).toHaveStyle('display: block')
		expect(div).toHaveTextContent(blog.title)
		expect(div).toHaveTextContent(blog.author)
		expect(div).not.toHaveTextContent(blog.likes)	
	})
	
	test('initial render does not display extended information', ()=>{
		const div = component.container.querySelector('#blogExtended')
		expect(div).toHaveStyle('display: none')
	})
	// verify that when the blog post is clicked, the other information of the blog post becomes visible.

})//describe