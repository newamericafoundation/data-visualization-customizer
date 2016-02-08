export function getSelectedOption(allOptions, previousSelectedOption) {
	if (previousSelectedOption == null) { 
		return allOptions[0] 
	}
	if (allOptions.indexOf(previousSelectedOption) === -1) {
		return allOptions[0]
	}
	return previousSelectedOption
}

export function getSelectedOptions(allOptions, previousSelectedOptions) {
	if (previousSelectedOptions == null) {
		return []
	}
	var newSelectedOptions = []
	for (let option of previousSelectedOptions) {
		if (allOptions.indexOf(option) > -1) { newSelectedOptions.push(option) }
	}
	return newSelectedOptions
}