var sephoraItemsData = JSON.parse(localStorage.getItem('sephoraItemsData'));
var brandCounts = {}
sephoraItemsData.map(function (item) {
    if (!brandCounts[item.brand]) {
        brandCounts[item.brand] = 1;
    } else {
        brandCounts[item.brand] += 1;
    }
});

var brands = [];
for (var brand in brandCounts) {
    brands.push(brand);
}

var brandsDiv = document.getElementById('brands');
for (var brand of brands) {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = brand;
    checkbox.value = brand;
    checkbox.id = brand;

    var label = document.createElement('label');
    label.htmlFor = brand;
    label.textContent = brand;

    var ckbox = document.createElement('div')
    ckbox.classList.add('ckbox');
    ckbox.append(checkbox, label);

    brandsDiv.append(ckbox);
}

function getSelectedBrands() {
    var selectedBrands = [];
    document.querySelectorAll('#brands input').forEach(function (brand) {
        if (brand.checked) {
            selectedBrands.push(brand.value);
        }
    });
    return selectedBrands;
}

brandsDiv.addEventListener('change', function (e) {
    var selectedBrands = getSelectedBrands();
    var filteredItems = sephoraItemsData.filter(function (item) {
        return selectedBrands.includes(item.brand);
    });
    createDisplay(filteredItems);
});

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

var basketItem=JSON.parse(localStorage.getItem("basketItem"))||[];
function addItem(ele){
    basketItem.push(ele);
    alert("Successfully Added to the Basket");
    localStorage.setItem("basketItem",JSON.stringify(basketItem));
}

createDisplay(sephoraItemsData);