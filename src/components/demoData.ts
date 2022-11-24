// Alternativ 1: använd objektformen
// Observera att objektet måste ha egenskaperna x och y
const daysInMonth = [
	{ month: 'januari', days: 31 },
	{ month: 'februari', days: 28 },
	{ month: 'mars', days: 31 },
	{ month: 'april', days: 30 },
	{ month: 'maj', days: 31 },
].map(({ month, days }) => ({ x: month, y: days }))
const data1 = {
	datasets: [{
		label: 'Dagar',
		data: daysInMonth
	}]
}

// Alternativ 2: separata listor för varje serie
const monthNameSeries = ['januari', 'februari', 'mars', 'april', 'maj']  // x
const dayAmountSeries = [31, 28, 31, 30, 31]
const data2 = {
	labels: monthNameSeries,
	datasets: [{
		label: 'Dagar',
		data: dayAmountSeries
	}]
}

export { data1, data2 }