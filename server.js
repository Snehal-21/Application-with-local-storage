function register(event) {
    event.preventDefault();
    var name = document.getElementById("username").value;
    // console.log(name);
    var email = document.getElementById("useremail").value;
    // console.log(email);
    var password = document.getElementById("userpassword").value;
    // console.log(password);
    var confirmpassword = document.getElementById("userconfirmpassword").value;
    // console.log(confirmpassword);


    if(name && email && password && confirmpassword){
       if(password.length >=8 && confirmpassword.length >=8){
        if(password==confirmpassword){
            var dataarray=JSON.parse(localStorage.getItem("users")) || [];
            var flag=false;
            for(var i=0;i<dataarray.length;i++){
                if(dataarray[i].uemail==email){
                    flag=true;
                }
            }
            if(flag==true){
                alert("Email already exists.")
            }
            else{
                var userdata={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword}
                    dataarray.push(userdata)
                    localStorage.setItem("users",JSON.stringify(dataarray))
                    alert("Registered Successfully.")
                    document.getElementById("username").value=''
                    document.getElementById("useremail").value=''
                    document.getElementById("userpassword").value=''
                    document.getElementById("userconfirmpassword").value=''
                }
            }
        else{
            console.log("Password should be matched.")
        }
       }
       else{
        console.log("Password should be minimum 8 digits.")
       }
    }
       else{
        console.log("All fields are required.")
    }
    }
    
// Step 1  : Get user typed data from html to JS = Completed
// Step 2 : Get all users data into JS from LS = Completed
// Step 3 : Iterate all users (LS) with user typed data 
// Step 4 : If email & password both match at same time then
//  show user suceess

    function login(event){
        event.preventDefault();
        var email = document.getElementById("useremail").value;
        var password = document.getElementById("userpassword").value;
        var currentuser={}

        if(email && password){
        var logindataarray=JSON.parse(localStorage.getItem("users"));
        var flagforlogoin=false;
        for(var i=0;i<logindataarray.length;i++){
            if(logindataarray[i].uemail==email && logindataarray[i].upassword==password){
                flagforlogoin=true;
                currentuser=logindataarray[i];
            }
        }
        if(flagforlogoin==true){
            // alert("Login Successful")
            localStorage.setItem("currentuser",JSON.stringify(currentuser));
            window.location.href = "./rediret.html";
        }
        else{
            alert("Credentials not matched")

        }

    }
    else{
        alert("Both fields are required.")
    }
}

    // if(name && email && password && confirmpassword){
    //     if(password.length >=8 && confirmpassword.length >=8){
    //         if(password==confirmpassword){
    // var dataarray = JSON.parse(localStorage.getItem("users")) || []; //creation of empty array
    // var flag = false;
    // for ( i = 0; i < dataarray.length ; i++) {
    //     // console.log(dataarray[i],i)
    //     console.log(email, "entered email");
    //     console.log(dataarray[i].uemail, "stored emails")
    //     if (dataarray[i].uemail == email) {
    //         flag = true;
    //     }
    // }
    // if (flag == false) {
    //     var userdata = { uname: name, uemail: email, upass: password, uconfirmpass: confirmpassword } //object creation
    //     dataarray.push(userdata)
    //     localStorage.setItem("users", JSON.stringify(dataarray))
    //     alert("registered successful");
    //     document.getElementById("username").value = '' //to empty the input field 
    //     document.getElementById("useremail").value = ''
    //     document.getElementById("userpassword").value = ''
    //     document.getElementById("userconfirmpassword").value = ''
    // }
    // else {
    //     alert("use unique Email..")
    // }   
    //     }
    //     else{
    //         console.log("password not matched");
    //     }
    // }
    //     else {
    //         console.log("password should be minimum 8 digits")
    //     }
    // }

    // else{
    //     console.log("all fields are required")
    // }








