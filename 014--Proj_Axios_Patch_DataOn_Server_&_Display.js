


const headerAccess = document.querySelector(".heading-leader");
// console.log(headerAccess);
// // Successfully Accessible;
headerAccess.parentElement.style.backgroundColor = '#ccc'
headerAccess.style.borderBottom = 'solid 2px black'

////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function storingDataOnCrudByAxios(event){
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
    axios.post("https://crudcrud.com/api/7187dfbc3a544db7b0e46d152925ab46/ashuAradhiya", latestObj)
    .then((response)=>{
        // // Here, we want to see the data on the display;
        showingDataOnDisplay(response.data)
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

window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/7187dfbc3a544db7b0e46d152925ab46/ashuAradhiya")
    .then((response) => {
        console.log(response);
        for(let i = 0; i < response.data.length; i++)
        showingDataOnDisplay(response.data[i]);
    })
    .catch((error) => {
        console.log(error);
    })
})
// // Here, by using the window.addEventListener("DOMContentLoaded" , () will give all whatever 
// // data we posted on the server to our display ;

function showingDataOnDisplay(latestObj){
    // const parentUlTag = document.querySelector("ulTagMade");
    // // Its not working ;
    // latestObj ={
    //     _id : '',
    //     userInput : '',
    //     emailInput : '',
    //     mobilInput : ''
    // }
    const parentUlTag = document.getElementById("helloWorld");
    const childLiTag = document.createElement('li');
    childLiTag.className = "booking-details";
    
    // // Formation of id for picking or grabbing the id's of server data for deletion purpose;
    childLiTag.id = `${latestObj._id}`;

    // // Adding ${latestObj._id} to grab the id's of server ;
    childLiTag.appendChild(document.createTextNode(`${latestObj._id} - ${latestObj.userInput} - ${latestObj.emailInput} - ${latestObj.mobilInput} `));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger';
    deleteBtn.value = 'delete';

    deleteBtn.appendChild(document.createTextNode('DELETE'));

    deleteBtn.onclick = () => {
        // localStorage.removeItem(latestObj._id);
        axios.delete(`https://crudcrud.com/api/7187dfbc3a544db7b0e46d152925ab46/ashuAradhiya/${latestObj._id}`)
        .then((res) => {
            console.log(res);
            for(let i =0; i < res.data.length; i++)
            {
                showingDataOnDisplay(res.data[i]);
            }
        })
        .catch((err) => {
            console.log(err);
        })
        // // Here, byt the use of crud link with axios.delete using back ticks and using /${latestObj._id}
        // // we are able to delete the data from the server ;
        // // Previously, the delete button deleting the data from the screen only not from the server;
        parentUlTag.removeChild(childLiTag);
    }
 
    childLiTag.appendChild(deleteBtn);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-success';
    editBtn.value = 'edit';

    editBtn.id = `${latestObj._id}`;

    editBtn.appendChild(document.createTextNode("EDIT"));

    editBtn.onclick = () => {
        // localStorage.removeItem(latestObj.userInput );
        axios.patch(`https://crudcrud.com/api/7187dfbc3a544db7b0e46d152925ab46/ashuAradhiya/${latestObj._id}`)
        .then((res) => {
            console.log(res);
            for(let i = 0; i < res.data.length; i++)
            {
                showingDataOnDisplay(res.data[i]);
            }
        })
        // // Here, we are able edit data but it stores in new Id;
        parentUlTag.removeChild(childLiTag);
        document.getElementById('usn').value = latestObj.userInput;
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



