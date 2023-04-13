const btn = document.getElementById("add-exp");
const itemList = document.getElementById("expense-item");
const total = document.querySelector('#total');
var totalsum = 0 ;

btn.addEventListener('click',addItem);
itemList.addEventListener('click',removeItem)


function addItem(e){
    e.preventDefault();
  
    // Get input value
    var amount = document.getElementById('amount');
    var desc = document.getElementById('desc');

    
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(amount.value+","+desc.value));
  
    // Create del button element
    var deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete ms-2';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('delete'));
  
    // Append button to li
    li.appendChild(deleteBtn);
  
    // Append li to list
   

    var editBtn = document.createElement('button');
  
    // Add classes to del button
    editBtn.className = 'btn btn-danger btn-sm float-end edit';
  
    // Append text node
    editBtn.appendChild(document.createTextNode('edit'));

     // Append button to li
    li.appendChild(editBtn);
  // Append li to list
  itemList.appendChild(li);

    let ob = {
      amount : amount.value ,
      desc : desc.value
    }

    let obs = JSON.stringify(ob);
    localStorage.setItem(desc.value  ,obs);

    let item = localStorage.getItem(amount.value );
    let obd = JSON.parse(item);
    // console.log(obd);
    // Clear fields
    totalsum += parseInt(amount.value) ;
    total.value = totalsum;
    console.log(totalsum);
    amount.value = '';
    desc.value = '';
  }

  function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        // console.log(li.firstChild);
        var tt = li.firstChild.textContent.split(',')[1];
        // console.log(tt);
        totalsum = totalsum-parseInt(li.firstChild.textContent.split(',')[0]);
        console.log(totalsum);
        total.value = totalsum;
        
        localStorage.removeItem(tt);
        itemList.removeChild(li);
      }
    }
  
    else if(e.target.classList.contains('edit')){
      
        var li = e.target.parentElement;
        console.log(li.firstChild);
        var tt = li.firstChild.textContent.split(',')[1];
        // console.log(tt);
  
        amount.value = li.firstChild.textContent.split(',')[0];
        desc.value = li.firstChild.textContent.split(',')[1];
        totalsum = totalsum-parseInt(amount.value);
        console.log(totalsum);
        total.value = totalsum;
        localStorage.removeItem(tt);
        itemList.removeChild(li);
  
        
      
    }
  }

