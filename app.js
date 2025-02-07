//Validating numbers of people

/*const error = () => {
    const numOfPeople = document.getElementById('numOfPeople');
    numOfPeople.classList.add('errorAction');

    const errorMessage = document.querySelector('.errorMessage');
    if(errorMessage) {
        errorMessage.style.display = "block";
    }
}


function validateNumOfPeople(input) {
   input.value = input.value.replace(/[^0-9.]/g, '');
    
   
   if(parseInt(input.value === '0')) {
       error();
   } else {
    document.getElementById('numOfPeople').classList.remove('errorAction');
    errorMessage.style.display = "none";
   }
}
