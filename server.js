function register(event){
    event.preventDefault();
    var name=document.getElementById("username").value;
    // console.log(name);
    var email=document.getElementById("useremail").value;
    // console.log(email);
    var password=document.getElementById("userpassword").value;
    // console.log(password);
    var confirmpassword=document.getElementById("userconfirmpassword").value;
    // console.log(confirmpassword);


    if(name && email && password && confirmpassword){
        if(password.length >=8 && confirmpassword.length >=8){
            if(password==confirmpassword){
                var userdata={uname:name, uemail:email,upass:password,uconfirmpass:confirmpassword}//creation of object syntax:var objectname={key:value}
                console.log(userdata)

                localStorage.setItem("users",JSON.stringify(userdata))
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
function getdata(){
    var data= JSON.parse(localStorage.getItem("users"))
    console.log("fetched data",data)
}






// JSON.stringify //conert obgect into json string
// JSON.parse //convrt json into object
// localStorage.setItem(key,value) //use to store data into local storage
// localStorage.getItem(key) //to get data from local storage
// localStorage.removeItem(key) //to delete data from local storage
