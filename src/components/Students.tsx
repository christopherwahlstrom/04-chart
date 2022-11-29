import Chart from 'chart.js/auto';
import { Pie, Bar, Line, Scatter } from 'react-chartjs-2';
import { genderDiagramData, mathDiagramData, scatterDiagramData } from '../data/studentsData';
import './Demo.css'

console.log('Students diagram data:', genderDiagramData)

const Students = () => {

	return (
		<div>
			<h1> Gender distribution of students </h1>
			<Pie data={genderDiagramData} />

			<h1> Average math score </h1>
			<Bar data={mathDiagramData} />

			<h1> Math scores, scatter plot </h1>
			<Scatter data={scatterDiagramData} />
		</div>
	)
}

export default Students
