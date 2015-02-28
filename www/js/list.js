var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.elems = [];
        //this.categories = ["produce", "deli", "toiletries"];
        this.categories = JSON.parse(localStorage["categories"]);
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('load', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log("loaded")
        app.receivedEvent('load');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        sample_list = [
        {"item": "shampoo","category":"toiletries"},
        {"item": "broccoli","category":"produce"}]
        sample_list.forEach(app.addToList)
    },

    new: function() {
        document.getElementById("add").style.visibility="hidden";
        document.getElementById("sort").style.visibility="hidden";
        document.getElementById("form").style.visibility="visible";
    },

    addToList: function(elem){
        console.log(elem);
        app.elems.push(elem);
        var div = document.createElement("div");
        div.className = "items";
        var item_div = document.createElement("div");
        var category_div = document.createElement("div");
        var item_text = document.createTextNode(elem.item);
        var category_text = document.createTextNode(elem.category);
        item_div.className = "item_div";
        category_div.className = "category_div";
        item_div.appendChild(item_text);
        category_div.appendChild(category_text);
        div.appendChild(item_div);
        div.appendChild(category_div);
        document.getElementById("list").appendChild(div);
    },

    add: function() {
        var item = document.getElementById("item").value;
        var category = document.getElementById("category").value;

        if (app.categories.indexOf(category) == -1) {
            document.getElementById("error").style.visibility="visible";
        } else {
            document.getElementById("error").style.visibility="hidden";
            document.getElementById("add").style.visibility="visible";
            document.getElementById("sort").style.visibility="visible";
            document.getElementById("form").style.visibility="hidden";
            document.getElementById("item").value="";
            document.getElementById("category").value="";

            app.addToList({"item":item, "category":category});
        }

    },

    sortList: function() {
        var list = document.getElementById("list");
        var items = list.getElementsByClassName("items");
        var items_copy = [] //necessary to make list stay static
        for (var i = 0; i < items.length; i++) {
            items_copy.push(items[i]);
        }
        for (var i = 0; i < items_copy.length; i++) {
            list.removeChild(items_copy[i]);
        }

        elems_copy = app.elems
        app.elems = []

        app.categories.forEach(function(cat) {
            elems_copy.forEach(function(elem) {
                if (elem.category == cat){
                    app.addToList(elem);
                }
            })
        })

    },

    record: function() {
        document.getElementById("cover").style.visibility="visible";
        document.getElementById("main").style.visibility="hidden";
        this.num_items++;
        var recordFileName = "item" + this.num_items + ".wav";
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
                    fileSystem.root.getFile(recordFileName, {
                        create: true,
                        exclusive: false
                    }, function(fileEntry){
                        console.log("File " + recordFileName + " created at " + fileEntry.fullPath);
                        mediaVar = new Media(fileEntry.fullPath, function(){
                            console.log("Media created successfully");
                        });
                    }
                );
            });
    }

};

app.initialize();
app.receivedEvent('load');