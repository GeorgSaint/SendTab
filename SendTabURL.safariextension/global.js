function replaceAll(str, replace) {
    return str.replace(new RegExp('"', 'g'), replace);
}


var handle_url_send = function(url) {
    console.log('Done send url for: ' + url);
};

var handle_url_recive = function(reciveTxt) {
    var re = /"http.*"/g;
    var str = reciveTxt;
    var m;
    
    m = re.exec(str);
    if (m === null) {
        alert("Nothing to show!");
        return
    }
    url = replaceAll(m[0], '');
    if (url != null) {
        var newTab = safari.application.activeBrowserWindow.openTab();
        newTab.url = url;
    }
};

//not used
var validate_shorturl = function(event) {
  if(event.command === "send url") {
    // Disable the button if there is no URL loaded in the tab.
    event.target.disabled = !event.target.browserWindow.activeTab.url;
  }
};


var sendURL = function(url, auth, node, tonode, callback) {
    console.log('Sending url');
    var endpoint = "http://sendtab.com/api3/put?auth="+auth+"&from="+node+"&to="+tonode+"&link="+escape(url);
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", endpoint);
    console.log('opening ' + endpoint);
    myRequest.onload = function() {
        callback(myRequest.responseText);
    };
    myRequest.send();
};

var reciveURL = function(url, auth, node, callback) {
    console.log('Sending url');
    var endpoint = "http://sendtab.com/api3/get?auth="+auth+"&from="+node;
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", endpoint);
    console.log('opening ' + endpoint);
    myRequest.onload = function() {
        //if (myRequest.status == 200) {
            callback(myRequest.responseText);
        //}
    };
    myRequest.send();
};


var command_click = function(event) {
    //alert("ping-"+event.command);
    if(event.command === "send url") {
        authMD5 = safari.extension.settings.getItem("auth");
        fromNode = safari.extension.settings.getItem("fromnode");
        tonode = safari.extension.settings.getItem("tonode");

        sendURL(safari.application.activeBrowserWindow.activeTab.url, authMD5, fromNode, tonode, handle_url_send);
    } else if(event.command === "recive url") {
        authMD5 = safari.extension.settings.getItem("auth");
        fromNode = safari.extension.settings.getItem("fromnode");
        
        reciveURL("", authMD5, fromNode, handle_url_recive);
    }
};

safari.application.addEventListener("command", command_click, true);
//safari.application.addEventListener("validate", validate_shorturl, false);
//safari.application.addEventListener("message", handle_message, false);
