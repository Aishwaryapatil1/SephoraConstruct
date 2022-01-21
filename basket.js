var basketItem=JSON.parse(localStorage.getItem("basketItem"));

var totalValue=basketItem.reduce(function(acc,cv){
    return acc+cv.price;
},0)

display(totalValue,basketItem.length);
    function display(total,n){
        document.querySelector("#totalprice").textContent="Total Number of Items  "+n+"  and Price Is:"+total;
    }
createDisplay(basketItem);
function createDisplay(arr){
    document.querySelector("#items").textContent="";
    // document.querySelector("#total").innerHTML=arr.length+"  Results Found";
       arr.map(function(ele,index){
        var img1=document.createElement("img");
       var head1=document.createElement("p");
       var p1=document.createElement("h4");
       var head2=document.createElement("h4");
       var p2=document.createElement("p");
       var head3=document.createElement("h3");
       var div1=document.createElement("div");
       div1.setAttribute("id","rate");
       head1.setAttribute("id","dis");
       var div2=document.createElement("div");
       var btn=document.createElement("button");
       btn.setAttribute("id","addToCart");
       img1.setAttribute("id","images");
       img1.setAttribute("src",ele.imageUrl);
       head1.textContent=ele.name;
       var i=document.createElement("i");
       p1.textContent=ele.brand;
   
       head2.innerHTML=ele.stars+'<i class="fas fa-star"></i>'+"   "+ele.numReviews+"   (Reviews)";
      i.setAttribute("id","i");
       head3.textContent="Price is:  $"+ele.price;
       head3.setAttribute("id","price");
       btn.textContent="Remove From Basket";
      
       btn.addEventListener("click",function(){
        removeCart(index);
       });
       head2.style.margin="20px";
       div1.append(head2);
       div2.append(img1,p1,head1,div1,head3,btn);
       div2.style.textAlign="center";
        div2.style.height="400px"
   
       document.querySelector("#items").append(div2); 
       })
    }
   
    function removeCart(index){
        console.log(index);
        basketItem.splice(index,1);
        
        localStorage.setItem("basketItem",JSON.stringify(basketItem));
        createDisplay(basketItem);
        var totalValue=basketItem.reduce(function(acc,cv){
        return acc+cv.price;
    },0)
    display(totalValue,basketItem.length);
}
       
   
   
    function sorting(){
         var selected=document.querySelector("#selectSort").value;
         if(selected=="")
         {
            createDisplay(basketItem);
         }
         else{
             
         if(selected=="low"){
          var sortArr=basketItem.sort(function(a,b){
             return a.price-b.price;
         })
         }
         if(selected=="high"){
            var sortArr=basketItem.sort(function(a,b){
             return b.price-a.price;
         })
         }
         if(selected=="rated"){
            var sortArr=basketItem.sort(function(a,b){
             return b.numReviews-a.numReviews;
         })
        }
        
         createDisplay(sortArr);
         
     }
    }
    

    function check(){
        if(basketItem=="")
        {
            alert("Basket is empty!");
        }
        else{
            window.location.href="CheckoutPage.html";
        }
    }

    
    