

function errorMessage(element,msg){
    const inputControl=element.parentElement;
    const display=inputControl.querySelector('.error');
    display.innerHTML=msg;
    inputControl.classList.add('error');
    inputControl.classList.remove("success");
}
function successMessage(element){
    const inputControl=element.parentElement;
    const display=inputControl.querySelector(".error");
    display.innerHTML="";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

function checkForDigits(uname){
    return /\d/.test(uname);
}

function validateForm(e){
    const idOfElement=e.target.id;
    switch(idOfElement)
    {
        case "uname":validateUname(e);
        break;
        case "email":validateEmail(idOfElement);
        break;
        default:alert("invalid op");
    }
    
}

function validateUname(e)
{
    const value=e.target.value;
    const element=document.getElementById("uname");
    element.valid();
    if (value=="")
    {
        errorMessage(element,"user name should not be empty.");
    }
    else if(checkForDigits(value))
    {
        errorMessage(element,"user name should not contain digits");
    }
    else
    {
        successMessage(element);
    } 
}

function validateEmail()
{

}

function validateMobile()
{
    
}

function validatePassword()
{

}

