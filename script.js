let Food = document.getElementById('input-food');
let inputBtn = document.getElementById('input-btn');
let FoodContainer = document.getElementById('food-container');
let NolistEl=document.getElementById('no-list');
let FoodList=document.getElementById('food-list-count');

// fitch the data and drew in UI
document.addEventListener('DOMContentLoaded',()=>{
let FetchFoodItem= [...JSON.parse( localStorage.getItem("FoodItems"))];



FetchFoodItem.forEach(item =>{

  let Li = document.createElement('li');
  let DivItem=document.createElement('div');
  let DivRemoveBtn=document.createElement('div');

  Li.append(DivItem,DivRemoveBtn);
DivRemoveBtn.parentElement.setAttribute('onclick','removeItem(event)')

  DivRemoveBtn.innerHTML=' <i class="fa-solid fa-xmark"></i> ';


  Li.append(DivItem);
  Li.append(DivRemoveBtn);
  let txt = document.createTextNode(item.FoodItem);
  Li.className = 'food-item';
  DivItem.append(txt);
  FoodContainer.append(Li);



  
}) 
RefreshUI();
})




let handelInput= () => {
  
  let Li = document.createElement('li');
  let DivItem=document.createElement('div');
  let DivRemoveBtn=document.createElement('div');
//   appended because of setattribute property
  Li.append(DivItem,DivRemoveBtn);
DivRemoveBtn.parentElement.setAttribute('onclick','removeItem(event)')

  DivRemoveBtn.innerHTML=' <i class="fa-solid fa-xmark"></i> ';

// appended to creat element 
  Li.append(DivItem);
  Li.append(DivRemoveBtn);
  let txt = document.createTextNode(Food.value);
  Li.className = 'food-item';
  DivItem.append(txt);
  FoodContainer.append(Li);
// create local storage 
localStorage.setItem('FoodItems', JSON.stringify( [...JSON.parse(localStorage.getItem('FoodItems') || "[]")
,{FoodItem:Food.value}])

);
  Food.value="";
  RefreshUI();
};  
  inputBtn.addEventListener('click',handelInput); 





// Removing element
function removeItem(event){
   let ExistingList=event.target.parentNode.parentNode;
    ExistingList.remove();
// Remove from local storage
let FetchFoodItem=[...JSON.parse(localStorage.getItem("FoodItems"))];
// console.log(FetchFoodItem);
FetchFoodItem.forEach((item) =>{

if(item.FoodItem === ExistingList.innerText){
FetchFoodItem.splice(FetchFoodItem.indexOf(item),1);

  }


});

localStorage.setItem('FoodItems',JSON.stringify(FetchFoodItem));

    RefreshUI();
}



// checking UI 
function RefreshUI() {
  FoodList.innerText= `you added ${ FoodContainer.children.length} items`;

  FoodContainer.children.length > 0 
  ? ((NolistEl.hidden=true),(FoodList.hidden=false))
  :((NolistEl.hidden=false),(FoodList.hidden=true));

}