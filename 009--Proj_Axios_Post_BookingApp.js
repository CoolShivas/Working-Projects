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


// function showingDataOfLocalStOnDisplay(latestObj){
//     // const parentUlTag = document.querySelector("ulTagMade");
//     // // Its not working ;
//     const parentUlTag = document.getElementById("helloWorld");
//     const childLiTag = document.createElement('li');
//     childLiTag.className = "booking-details";
//     childLiTag.appendChild(document.createTextNode(`${latestObj.userInput} - ${latestObj.emailInput} - ${latestObj.mobilInput} `));

//     parentUlTag.appendChild(childLiTag);
     
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//     document.getElementById('usn').value = '';
//     document.getElementById('em').value = '';
//     document.getElementById('pn').value = '';
// }




// //////////******************************************************************************************************************** */



