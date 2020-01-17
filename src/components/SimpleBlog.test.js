import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

test('renders a blog', ()=>{
	const blog = {title: 'a test blog', author: 'Clark Kent', likes: 5}
	const component = render(<SimpleBlog blog={blog}/>)
	expect(component.container).toHaveTextContent('a test blog')
})



