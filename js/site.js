let contacts = [];
// a contact to screen
function addContact() {
    //object create\
    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    
    const contact = 
    {
        firstName: firstName,
        lastName: lastName,
        email : email
    }
    //set items
    // contact.firstName = "John";
    // contact.lastName = "Smith";
    // contact.email = "jsmith@mail.com"

    //retrive the items or values
  
    contacts.push(contact);

    displayContacts(contacts);
    
    document.getElementById("myForm").reset();

}

function displayContacts(contacts) {
       document.getElementById("results").innerHTML = "";
    for (let index = 0; index < contacts.length; index++) {

      
       
        let templateRow = `<tr><td>${contacts[index].firstName}</td><td>${contacts[index].lastName}</td><td>${contacts[index].email}</td></tr>`
        document.getElementById("results").innerHTML += templateRow;
         
    }
  
}