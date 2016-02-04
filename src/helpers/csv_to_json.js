export default function csvToJson(csv) {
	var allRows = csv.split('\n').map(row => row.split(','))
	var headerRow = allRows.slice(0, 1)[0]
	var contentRows = allRows.slice(1)
	return contentRows.map((row, i) => {
		var obj = {}
		row.forEach((item, j) => { obj[headerRow[j]] = item })
		return obj
	})
}