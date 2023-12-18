


const headerAccess = document.querySelector(".heading-leader");
// console.log(headerAccess);
// // Successfully Accessible;
headerAccess.parentElement.style.backgroundColor = '#ccc'
headerAccess.style.borderBottom = 'solid 2px black'

////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function storingDataOnLocalDisk(event){
    event.preventDefault();
    // console.log(8787);
    // // Successfully working;

    const latestObj = {
        userInput : event.target.username.value,
        emailInput : event.target.mailing.value,
        mobilInput : event.target.mobile.value
    }
    // localStorage.setItem(latestObj.userInput , JSON.stringify(latestObj));
    // showingDataOfLocalStOnDisplay(latestObj);
    axios.post("https://crudcrud.com/api/22636b4d7a274dc5aec0af971b9fe0e3/secondUser", latestObj)
    .then((response)=>{
        // // Here, we want to see the data on the display;
        showingDataOfLocalStOnDisplay(response.data)
        // // By this we are able to see the whole stored data on server i.e, cloud as well as on display too;
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    }) 
    // // Finally, we have stored the data on the server named as axios instead of local storage;
    // // https://crudcrud.com/api/22636b4d7a274dc5aec0af971b9fe0e3  this link is generated from crudcrud.com;
    // // And the above link is valid for 24 hrs;
    // // Therefore, /secondUser this route is made to store the data i.e, latestObj contains;
    // // Atlast, we made the promise of response and error whether it completed to get the response 
    // // or get the error. So, here we get the response that means the data is stored into the server;
}

window.addEventListener("DOMContentLoaded" , () =>{
    axios.get("https://crudcrud.com/api/22636b4d7a274dc5aec0af971b9fe0e3/secondUser")
    .then((res) => {
        console.log(res);
        for(let i = 0; i < res.data.length; i++)
        showingDataOfLocalStOnDisplay(res.data[i]);
    })
    .catch((err) =>{
        console.log(err);
    })
})

function showingDataOfLocalStOnDisplay(latestObj){
    // const parentUlTag = document.querySelector("ulTagMade");
    // // Its not working ;
    const parentUlTag = document.getElementById("helloWorld");
    const childLiTag = document.createElement('li');
    childLiTag.className = "booking-details";
    childLiTag.appendChild(document.createTextNode(`${latestObj.userInput} - ${latestObj.emailInput} - ${latestObj.mobilInput} `));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger';
    deleteBtn.value = 'delete';

    deleteBtn.appendChild(document.createTextNode('DELETE'));

    deleteBtn.onclick = () => {
        localStorage.removeItem(latestObj.fNameInput);
        parentUlTag.removeChild(childLiTag);
    }

    childLiTag.appendChild(deleteBtn);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-success';
    editBtn.value = 'edit';

    editBtn.appendChild(document.createTextNode("EDIT"));

    editBtn.onclick = () => {
        localStorage.removeItem(latestObj.fNameInput);
        parentUlTag.removeChild(childLiTag);
        document.getElementById('fn').value = latestObj.fNameInput;
        document.getElementById('mn').value = latestObj.mNameInput;
        document.getElementById('ln').value = latestObj.lNameInput;
        document.getElementById('em').value = latestObj.emailInput;
        document.getElementById('pn').value = latestObj.mobilInput;
    }

    childLiTag.appendChild(editBtn);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    parentUlTag.appendChild(childLiTag);
     
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById('usn').value = '';
    document.getElementById('em').value = '';
    document.getElementById('pn').value = '';
}




//////////******************************************************************************************************************** */

// // For deeply want to know go to the 016-Project_On_JS and open files 009 and 010; 

