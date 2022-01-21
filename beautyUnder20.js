var basketItem=JSON.parse(localStorage.getItem("basketItem"))||[];
var sephoraItemsData=JSON.parse(localStorage.getItem("sephoraItemsData"));
var beautyArr=sephoraItemsData.filter(function(ele){
    return ele.price<=20;
})
createDisplay(beautyArr);

 document.querySelector("#all").addEventListener("click",function(){
 createDisplay(beautyArr);
});
document.querySelector("#makeup").addEventListener("click",makeup);
function makeup(){
   var makeupArr=beautyArr.filter(function(ele){
       return ele.category=="makeup" && ele.price<=20 ;
   })
   createDisplay(makeupArr);
}

document.querySelector("#skincare").addEventListener("click",skincare);
function skincare(){
   var skincareArr=beautyArr.filter(function(ele){
       return ele.category=="skincare" && ele.price<=20;
   })
   createDisplay(skincareArr);
}
document.querySelector("#hair").addEventListener("click",hair);
function hair(){
   var hairArr=beautyArr.filter(function(ele){
       return ele.category=="hair" && ele.price<=20;
   })
   createDisplay(hairArr);
}
document.querySelector("#fragrance").addEventListener("click",fragrance);
function fragrance(){
   var fragranceArr=beautyArr.filter(function(ele){
       return ele.category=="fragrance" && ele.price<=20;
   })
//    console.log(fragranceArr);
   createDisplay(fragranceArr);
}
document.querySelector("#tools").addEventListener("click",tools);
function tools(){
   var toolsArr=beautyArr.filter(function(ele){
       return ele.category=="tools" && ele.price<=20;
   })
   createDisplay(bathArr);
}
document.querySelector("#bath").addEventListener("click",bath);
function bath(){
   var bathArr=beautyArr.filter(function(ele){
       return ele.category=="bath" && ele.price<=20;
   })
   createDisplay(bathArr);
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
    head1.textContent=ele.name;
    var i=document.createElement("i");
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
         createDisplay(beautyArr);
      }
      else{
          
      if(selected=="low"){
       var sortArr=beautyArr.sort(function(a,b){
          return a.price-b.price;
      })
      }
      if(selected=="high"){
         var sortArr=beautyArr.sort(function(a,b){
          return b.price-a.price;
      })
      }
      if(selected=="rated"){
         var sortArr=beautyArr.sort(function(a,b){
          return b.numReviews-a.numReviews;
      })
     }
     
      createDisplay(sortArr);
      
  }
 }