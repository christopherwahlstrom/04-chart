import { useState } from 'react'
import './App.css'
import Demo from './components/Demo'

function App() {
const [count, setCount] = useState(0)

	return (
		<div className="App">
			<Demo />
		</div>
	)
}

export default App
