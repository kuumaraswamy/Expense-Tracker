

function saveToLocalStorage(event){
    const expenseAmount=event.target.expenseAmount.value
    const description= event.target.description.value
    const choose= event.target.choose.value
    let obj={
        expenseAmount,description,choose
    } 
    localStorage.setItem(obj.choose,JSON.stringify(obj))

   
   
 showNewListOnScreen(obj)

}

//when refresh the page data not go any where

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys = Object.keys(localStorageObj)

    for (var i = 0; i < localstoragekeys.length; i++) {
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewListOnScreen(userDetailsObj)
    }
})


function showNewListOnScreen(list){
    event.preventDefault()
    const parentNode =  document.getElementById("listOfItems")
    const childHTML = `<li id=${list.choose}>${list.expenseAmount}-${list.description} - ${list.choose} 
        <button onclick=deleteList('${list.choose}')> Delete</button>
        <button onclick=editListDetails('${list.expenseAmount}','${list.description}','${list.choose}')>Edit</button>
        </li>`
    parentNode.innerHTML= parentNode.innerHTML + childHTML
 }


 //edit 
 function editListDetails(choose,expenseAmount, description ){
    document.getElementById('choose').value =choose;
    document.getElementById('expenseAmount').value = expenseAmount;
    document.getElementById('description').value = description;
    
    deleteList(choose)
 }

  //delete
  function deleteList(choose){
    console.log(choose)
    localStorage.removeItem(choose)
    removeListFromScreen(choose)
}
function removeListFromScreen(choose){
    const parentNode=document.getElementById("listOfItems")
    const childNodeToBeDeleted=document.getElementById(choose)
    parentNode.removeChild(childNodeToBeDeleted);

}









