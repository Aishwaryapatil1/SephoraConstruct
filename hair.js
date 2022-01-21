var basketItem=JSON.parse(localStorage.getItem("basketItem"))||[];
var sephoraItemsData=JSON.parse(localStorage.getItem("sephoraItemsData"));
var skincareArr=sephoraItemsData.filter(function(ele){
    return ele.category=="hair";
})
createDisplay(skincareArr);

 document.querySelector("#all").addEventListener("click",function(){
 createDisplay(skincareArr);
});
document.querySelector("#shampoo").addEventListener("click",shampoo);
function shampoo(){
   var shampooArr=skincareArr.filter(function(ele){
       return ele.type=="shampoo";
   })
   createDisplay(shampooArr);
}

document.querySelector("#treatments").addEventListener("click",treatments);
function treatments(){
   var treatmentsArr=skincareArr.filter(function(ele){
       return ele.type=="treatments";
   })
   createDisplay(treatmentsArr);
}
document.querySelector("#styling").addEventListener("click",styling);
function styling(){
   var stylingArr=skincareArr.filter(function(ele){
       return ele.type=="styling";
   })
   createDisplay(stylingArr);
}

function createDisplay(arr){
 document.querySelector("#items").textContent="";
 document.querySelector("#total").innerHTML=arr.length+"  Results Found";
    arr.map(function(ele){
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
    var i=document.createElement("i");
    head1.textContent=ele.name;
    
    p1.textContent=ele.brand;

    head2.innerHTML=ele.stars+'<i class="fas fa-star"></i>'+"   "+ele.numReviews+"   (Reviews)";
    i.setAttribute("id","i");
    head3.textContent="Price is:  $"+ele.price;
    head3.setAttribute("id","price");
    btn.textContent="Add to Basket ";
   
    btn.addEventListener("click",function(){
        addItem(ele);
    });
    head2.style.margin="20px";
    div1.append(head2);
    div2.append(img1,p1,head1,div1,head3,btn);
    div2.style.textAlign="center";
     div2.style.height="400px"

    document.querySelector("#items").append(div2); 
    })
 }

 function addItem(ele){
     basketItem.push(ele);
     alert("Successfully Added to the Basket");
     localStorage.setItem("basketItem",JSON.stringify(basketItem));
 }
    


 function sorting(){
      var selected=document.querySelector("#selectSort").value;
      if(selected=="")
      {
         createDisplay(skincareArr);
      }
      else{
          
      if(selected=="low"){
       var sortArr=skincareArr.sort(function(a,b){
          return a.price-b.price;
      })
      }
      if(selected=="high"){
         var sortArr=skincareArr.sort(function(a,b){
          return b.price-a.price;
      })
      }
      if(selected=="rated"){
         var sortArr=skincareArr.sort(function(a,b){
          return b.numReviews-a.numReviews;
      })
     }
     
      createDisplay(sortArr);
      
  }
 }