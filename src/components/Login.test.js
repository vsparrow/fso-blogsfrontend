import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react'
import {prettyDOM} from '@testing-library/dom'
import Login from './Login'


test('Invalid login show error message', async ()=>{
	const div = component.container.querySelector('#login')
	const inputs = component.container.querySelector('inputs')
	console.log(prettyDOM(inputs))
})