var createArr=JSON.parse(localStorage.getItem("createItem"));
     var c=0;
     document.querySelector("form").addEventListener("submit",getIn);
    function getIn(event){
        
        event.preventDefault();
        var email=document.querySelector("#emil").value;
        var pwd=document.querySelector("#password").value;
        
        for(i=0;i<createArr.length;i++)
        { var c=0;
            if(createArr[i].email==email && createArr[i].pass==pwd)
            {
                c=1;
                break;
            }
        }
        if(c==1){
            alert("Login Successfully");
            window.location.href="index.html";
        }
        else{
            alert("Email or Password is incorrect");
        }
    }

document.getElementById('createAccount').addEventListener('click', function () {
    console.log('clicked')
    window.location.href = 'create.html'
})