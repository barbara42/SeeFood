//category functionality
//adding and editing 

var categories = localStorage["categories"];
if (categories == undefined){
	categories = []
}
else{
	categories = JSON.parse(categories);
}
//populates list
populateList()

//onclick handler for add button
document.getElementById("add").onclick = function() {
    //First things first, we need our text:
    var text = document.getElementById("idea").value; //.value gets input values
    //only add category if it isnt already in list
    if (categories.indexOf(text) == -1){
    	    categories.push(text);
    	    var entry = document.createElement('ol');
			entry.appendChild(document.createTextNode(categories[categories.length -1]+' '));
			//create remove button
			var button = document.createElement('BUTTON');
			button.setAttribute("id", "removebtn")
			button.setAttribute("value", categories[categories.length -1])
			button.setAttribute("onclick", 'removebtn(this.value)')
			button.innerHTML = 'remove'
			entry.appendChild(button)

			//sets entry id to category associated with 
			entry.setAttribute("id", categories[categories.length -1])

			list.appendChild(entry);

			//update local storage
			localStorage["categories"] = JSON.stringify(categories);

    }
}

function removebtn(value){
	value.toUpperCase();
	console.log(value + " was removed")
	//removes it from array
	var index = categories.indexOf(value)
	categories.splice(index, 1);

	//removes it from list 
	var entry = document.getElementById(value)
	console.log(entry)
	console.log(value)
	list.removeChild(entry)

	//update local storage
	localStorage["categories"] = JSON.stringify(categories);

}

function getCategories(){
	console.log(categories)
	return categories
}

//RE POPULATE LIST!! 
function populateList(){
	for(i=0; i < categories.length; i++){
		var entry = document.createElement('ol');
		entry.appendChild(document.createTextNode(categories[i].toUpperCase()+' '));
		//create remove button
		var button = document.createElement('BUTTON');
		button.setAttribute("id", "removebtn")
		button.setAttribute("value", categories[i].toUpperCase())
		button.setAttribute("onclick", 'removebtn(this.value)')
		button.innerHTML = 'remove'
		entry.appendChild(button)

		//sets entry id to category associated with 
		entry.setAttribute("id", categories[i].toUpperCase())
		//appends to list
		list.appendChild(entry);
	}
}














