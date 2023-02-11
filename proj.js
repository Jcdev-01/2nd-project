var selectedRow = null;

//show alerts
function showAlert(message, className){
     const div = document.createElement("div");
     div.className = `alert alert-${className}`;
     div.appendChild(document.createTextNode(message));
     const container = document.querySelector(".crud");
     const main = document.querySelector(".main");
     container.insertBefore(div, main); 

     setTimeout(() => document.querySelector(".alert").remove(), 3000);
}
//clear all fields

function clearFields(){
     document.querySelector(".first-name").value = "";
     document.querySelector(".last-name").value = "";
     document.querySelector(".middle-name").value = "";
     document.querySelector(".select").value = "";
}
//add data
document.querySelector("#student-form").addEventListener("submit", (e) =>{
       e.preventDefault();
       //get form values
       const firstName = document.querySelector(".first-name").value;
       const surName = document.querySelector(".last-name").value;
       const middleName = document.querySelector(".middle-name").value;
       const numberBooks = document.querySelector(".select").value;
      //validate
      if(firstName == "" || surName == "" || middleName == "" || numberBooks == ""){
           showAlert("Please fill in all fields", "danger");
      } else{
         if(selectedRow == null){
            const list = document.querySelector(".student");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${firstName}</td>
            <td>${surName}</td>
            <td>${middleName}</td>
            <td>${numberBooks}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a><br><br>
            <a href="#" class="btn btn-danger btn-sm delete">Del</a>
       `;
       list.appendChild(row);
       selectedRow = null;
       showAlert("Student Data Added", "success");
         }
     }  
});
//delete data
document.querySelector(".student").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
         target.parentElement.parentElement.remove();
         showAlert("Student Data Deleted", "danger");
    }
});
//contact form validation
function myValidate(){
     document.querySelector("#validate").reset();
     alert("!!!under maintenance!!!");
}