//category functionality
//adding and editing 

var categories = []

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

			console.log(entry)
			list.appendChild(entry);
    }
}

function removebtn(value){
	console.log(value + " was removed")
	//removes it from array
	var index = categories.indexOf(value)
	categories.splice(index, 1);

	//removes it from list 
	var entry = document.getElementById(value)
	list.remove(entry)

}