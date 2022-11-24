import Chart from 'chart.js/auto';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { data1, data2 } from './demoData'
import './Demo.css'


const DemoChart = () => (
	<div className="demo-chart">
		<Line data={data1} />
		<Bar data={data2} />
	</div>
)

export default DemoChart
