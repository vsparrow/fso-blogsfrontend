import {useState} from 'react'

export const useField = (type)=>{
	const [value,setValue]=useState('')
	const onChange=(e)=>{setValue(e.target.value)} //e for event
	return {type, value, onChange}
}

export const useFieldReset = (hook)=>{
	const reset = ()=>{
			const e={target:{value:''}}
			hook.onChange(e)
	}
	return {reset}
}