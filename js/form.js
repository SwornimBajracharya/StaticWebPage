
function validate() {

    var req = document.getElementsByClassName("req");
    var err = document.getElementsByClassName("err");
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    for (var i = 0; i < req.length; i++) {
        if (req[i].value == "" || req[i].value == null) {
            err[i].innerHTML = "This field is required.";
        }
        else {
            err[i].innerHTML = "";
        }

    }
    if (!emailPattern.test(email)) {
        document.getElementById("derr").innerHTML = "Invalid Email.";
    }

return false;
}

