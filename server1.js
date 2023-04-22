function register(event){
    event.preventDefault();
    // alert("working")

    var name=document.getElementById("username").value;
    var email=document.getElementById("useremail").value;
    var password=document.getElementById("userpassword").value;
    var confirmpassword=document.getElementById("userconfirmpassword").value;

    if(name && email && password && confirmpassword){
        if(password.length>=8 && confirmpassword.length>=8){
            if(password==confirmpassword){
                var lsarray=JSON.parse(localStorage.getItem("lsuser")) || [];
                var flag=false;
                for(var i=0;i<lsarray.length;i++){
                    if(lsarray[i].uemail==email){
                        flag=true;
                    }
                }
                if(flag==false){
                    lsdata={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword};
                    lsarray.push(lsdata)
                    localStorage.setItem("lsuser",JSON.stringify(lsarray));
                    alert("registered successfully")
                    window.location.href="./login.html";
                    document.getElementById("username").value=''
                    document.getElementById("useremail").value=''
                    document.getElementById("userpassword").value=''
                    document.getElementById("userconfirmpassword").value=''
                }
                else{
                    alert("email already exist")
                }
            }
            else{
                console.log("password not matched")
            }

        }
        else{
            console.log("password should be minimum 8 disgits")
        }
    }
    else{
        console.log("all fields are required")
    }
}


function login(event){
    event.preventDefault();

    var l_email=document.getElementById("useremail").value;
    var l_password=document.getElementById("userpassword").value;
    var ls_loginuser;

   if(l_email && l_password){
    var array=JSON.parse(localStorage.getItem("lsuser"))
    var flag=false;
    for(var i=0;i<array.length;i++){
        if(array[i].uemail==l_email && array[i].upassword==l_password){
            flag=true;
            ls_loginuser=array[i];
        }
    }
    if(flag==false){
        alert("credentials not matched")
    }
    else{
        localStorage.setItem("ls-loginuser",JSON.stringify(ls_loginuser))
        alert("logged in successfully")
        window.location.href="./home.html"
    }
}
   else{
    console.log("both fields are required")
   }

}