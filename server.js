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


    
//     var dataarray = JSON.parse(localStorage.getItem("users")) || [];
//     var flag = false;
//     for ( i = 0; i < dataarray.length ; i++) {
//         // console.log(dataarray[i],i)
//         console.log(email, "entered email");
//         console.log(dataarray[i].uemail, "stored emails")
//         if (dataarray[i].uemail == email) {
//             flag = true;
//         }
//     }
//     if (flag == false) {
//         var userdata = { uname: name, uemail: email, upass: password, uconfirmpass: confirmpassword }
//         dataarray.push(userdata)
//         localStorage.setItem("users", JSON.stringify(dataarray))
//         alert("registered successful");
//         document.getElementById("username").value = ''
//         document.getElementById("useremail").value = ''
//         document.getElementById("userpassword").value = ''
//         document.getElementById("userconfirmpassword").value = ''
//     }
//     else {
//         alert("use unique Email..")
//     }



//     //addition

// }

    



    if(name && email && password && confirmpassword){
        if(password.length >=8 && confirmpassword.length >=8){
            if(password==confirmpassword){
    var dataarray = JSON.parse(localStorage.getItem("users")) || [];
    var flag = false;
    for ( i = 0; i < dataarray.length ; i++) {
        // console.log(dataarray[i],i)
        console.log(email, "entered email");
        console.log(dataarray[i].uemail, "stored emails")
        if (dataarray[i].uemail == email) {
            flag = true;
        }
    }
    if (flag == false) {
        var userdata = { uname: name, uemail: email, upass: password, uconfirmpass: confirmpassword }
        dataarray.push(userdata)
        localStorage.setItem("users", JSON.stringify(dataarray))
        alert("registered successful");
        document.getElementById("username").value = ''
        document.getElementById("useremail").value = ''
        document.getElementById("userpassword").value = ''
        document.getElementById("userconfirmpassword").value = ''
    }
    else {
        alert("use unique Email..")
    }   
        }
        else{
            console.log("password not matched");
        }
    }
        else {
            console.log("password should be minimum 8 digits")
        }
    }

    else{
        console.log("all fields are required")
    }

}


// function getdata(){
//     var data= JSON.parse(localStorage.getItem("users"))
//     console.log("fetched data",data)
// }

// const arraydata=[];
// function multiuser(event){
//     event.preventDefault();
//     var name=document.getElementById("username").value;
//     var email=document.getElementById("useremail").value;
//     var password=document.getElementById("userpassword").value;
//     var confirmpassword=document.getElementById("userconfirmpassword").value;

//     var userdata={uname:name, uemail:email,upass:password,uconfirmpass:confirmpassword}
//     arraydata.push(userdata);
//     localStorage.setItem("user",JSON.stringify(arraydata))


// }




