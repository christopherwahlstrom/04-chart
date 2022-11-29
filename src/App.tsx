import { useState } from 'react'
import './App.css'
import Demo from './components/Demo'
import Students from './components/Students'

function App() {
const [count, setCount] = useState(0)

	return (
		<div className="App">
			<Students />
			<Demo />
		</div>
	)
}

export default App
