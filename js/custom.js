document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let country = document.getElementById("country").value;

    
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let countryError = document.getElementById("countryError");
    let successMessage = document.getElementById("formSuccessMessage");

    
    nameError.classList.add("d-none");
    emailError.classList.add("d-none");
    phoneError.classList.add("d-none");
    countryError.classList.add("d-none");
    successMessage.classList.add("d-none");

    let isValid = true;

    
    if (name === "") {
        nameError.classList.remove("d-none");
        isValid = false;
    }

    
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        emailError.classList.remove("d-none");
        isValid = false;
    }

    
    let phoneRegex = /^\+?[1-9]\d{0,2}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.classList.remove("d-none");
        isValid = false;
    }

   
    if (country === "") {
        countryError.classList.remove("d-none");
        isValid = false;
    }

  
    if (isValid) {
        successMessage.classList.remove("d-none");

        
        document.getElementById("leadForm").reset();

       
        setTimeout(() => {
            successMessage.classList.add("d-none");
            let modal = new bootstrap.Modal(document.getElementById("leadFormModal"));
            modal.hide(); 
        }, 2000);
    }
});