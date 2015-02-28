var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.num_items = 0;
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
        sample_list.forEach(function(elem){
            console.log(elem);
            this.num_items++;
            var div = document.createElement("div");
            div.className = "items";
            var text = document.createTextNode(elem.category);
            div.appendChild(text);
            document.getElementById("list").appendChild(div);
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