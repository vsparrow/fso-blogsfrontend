import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

beforeEach(()=>{
// const user = {
//   username: 'misterfantastic',
//   token: '1231231214',
//   name: 'Reed Richards'
// }

// localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
})

describe('<App />', ()=>{
	test('if no user logged, blogs are not rendered', async ()=>{
		const component = render(<App />)
		component.rerender(<App />)
		// component.debug()
		await waitForElement(()=>component.getByText('login'))
		
		expect(component.container).not.toHaveTextContent('HTML is easy')
		
		const blogs = component.container.querySelectorAll('.blog')
		expect(blogs.length).toBe(0)
	})	
	
	test('when a user is logged in blogs are rendered', async ()=>{
		const user = {
		  username: 'misterfantastic',
		  token: '1231231214',
		  name: 'Reed Richards'
		}

		localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
		const component = render(<App />)
		component.rerender(<App />)
		await waitForElement(()=>component.container.querySelector('.blog'))
		// component.debug()
		
		expect(component.container).toHaveTextContent('HTML is easy')
		
		const blogs = component.container.querySelectorAll('.blog')
		expect(blogs.length).toBe(3)
	})
})