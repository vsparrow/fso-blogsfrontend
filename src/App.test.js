import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', ()=>{
	test('if no user logged, blogs are not rendered', async ()=>{
		const component = render(<App />)
		component.rerender(<App />)
		component.debug()
		await waitForElement(()=>component.getByText('login'))
	})	
})
