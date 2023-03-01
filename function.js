function auth() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "admin") {
        document.body.innerHTML="";
        window.location.replace("./config.html");
    }
    else {
        return;
    }
}

function show() {
    var x = document.getElementById("password");
    
    if (x.type === 'password') { 
        x.type='text';
    }
    else {
        x.type='password'
    }
}