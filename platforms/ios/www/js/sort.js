sample_list = [
{"item": "shampoo","category":"toiletries"},
{"item": "broccoli","category":"produce"},
{"item": "orange juice","category":"drinks"},
{"item": "chips","category":"snacks"},
{"item": "carrots","category":"produce"},
{"item": "ham","category":"deli"},
{"item": "onions","category":"produce"},
{"item": "cranberry juice","category":"drinks"}
]

sample_categories = [
"toiletries",
"drinks",
"snacks",
"deli",
"produce"
]

function sort_list(list, categories) {
	sorted_list = []

	list.forEach(function(elem){
		if (categories.indexOf(elem.category) == -1){
			console.log("Did not recognize category\"" + elem.category + "\" for item \"" + elem.item + "\".")
		}
	})

	categories.forEach(function(cat) {
		list.forEach(function(elem) {
			if (elem.category == cat){
				sorted_list.push(elem);
			}
		})
	})

	return sorted_list;
}

console.log(sort_list(sample_list, sample_categories));