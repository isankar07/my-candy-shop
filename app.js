
form>addEventListener('submit',e=> {
    e.preventDefault(); 
    var name = document.getElementById('name') 
    var desc = document.getElementById('desc')
    var price = document.getElementById('price')
    var Qty = document.getElementById('Qty')  
    var obj = {
        name : name.value,
        desc : desc.value,
        price : price.value,
        Qty : Qty.value,
    }
    sendPostRequest(obj);
})

async function sendPostRequest(chocolate) {
    try{
        const response =await axios.post('https://crudcrud.com/api/6133aae5ea3f4b42839d1200f4f483fe',chocolate);
        console.log("success")
        showOnScreen(response.data)
    
    }
    catch(err){
    console.log(err);
    }
   
}

function showOnScreen(myObj){
      var parentlist = document.getElementById('item');
      var childList = document.createElement('li');
      
}