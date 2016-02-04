export default function readFileAsText(file, next) {
	var reader = new FileReader()
	reader.onload = function() { return next(reader.result) }
	reader.readAsText(file)
}