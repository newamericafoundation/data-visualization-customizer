import { Converter } from 'csvtojson'

var converter = new Converter({})

function deleteQuotations(item) {
	if (item[0] === '"' && item[item.length - 1] === '"') { return item.slice(1, -1) }
	return item
}

export function csvToJsonOld(csv) {
	var allRows = csv.split('\n').map(row => row.split(','))
	var headerRow = allRows.slice(0, 1)[0]
	var contentRows = allRows.slice(1)
	return contentRows.map((row, i) => {
		var obj = {}
		row.forEach((item, j) => { obj[deleteQuotations(headerRow[j])] = deleteQuotations(item) })
		return obj
	})
}

export default function csvToJson(csv, next) {
	converter.fromString(csv, (err, data) => {
		next(data)
	})
}
