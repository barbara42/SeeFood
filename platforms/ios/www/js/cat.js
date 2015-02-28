//category functionality
//adding and editing 

var categories = []

//Defining a listener for our button, specifically, an onclick handler
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
			button.setAttribute("id", categories[categories.length -1])
			button.innerHTML = 'remove'
			entry.appendChild(button)

			console.log(entry)
			list.appendChild(entry);
			

    }
    // //Now construct a quick list element
    // var li = "<li>" + text + "</li>";

    // //Now use appendChild and add it to the list!
    // document.getElementById("list").appendChild(li);


}