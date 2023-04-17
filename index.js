
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

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const checkNumber = num =>{
    return /\D/.test(num);
}

function validateForm(e){
    const idOfElement=e.target.id;
    switch(idOfElement)
    {
        case "uname":validateUname(e);
        break;
        case "email":validateEmail(e);
        break;
        case "number":validateMobile(e);
        break;
        case "state":validateState(e);
        break;
        default:alert("invalid op");
    }
    
}

function validateUname(e)
{
    const value=e.target.value;
    const element=document.getElementById("uname");
    if (value=="")
    {
        errorMessage(element,"user name should not be empty.");
    }
    else if(checkForDigits(value))
    {
        errorMessage(element,"should not contain digits");
    }
    else if(value.length<3)
    {
        errorMessage(element,"not be less than 3 letters");
    }
    else
    {
        successMessage(element);
    } 
}

function validateEmail(e)
{
    const value=e.target.value;
    const element=document.getElementById("email");
    if(value=="")
    {
        errorMessage(element,"E-mail should not be empty");
    }
    else if (!isValidEmail(value)) 
    {
        errorMessage(element,'Provide a valid email address');
    }
    else{
        successMessage(element);
    }
}

function validateMobile(e)
{
    const value=e.target.value;
    const element=document.getElementById("number");
    if(value=="")
    {
        errorMessage(element,"Number should not be empty");
    }
    else if(checkNumber(value))
    {
        errorMessage(element,"enter only digits");
    }
    else if(value.length<10||value.length>10){
        errorMessage(element,"Please enter 10 digits");
    }
    else{
        successMessage(element);
    }
}

function validateState(e)
{
    const value=e.target.value;
    const element=document.getElementById("state");
    if(value=="")
    {
        errorMessage(element,"please select state");
    }
    else{
        successMessage(element);
    }
}

function validateUserOnSubmit()
{
    const uname=document.getElementById("uname");
    const unameValue=uname.value;
    const email=document.getElementById("email");
    const emailValue=email.value;
    const number=document.getElementById("number");
    const numberValue=number.value;
    const state=document.getElementById("state");
    const stateValue=state.value;
    if (unameValue=="")
    {
        errorMessage(uname,"user name should not be empty.");
        return false;
    }
    else if(checkForDigits(unameValue))
    {
        errorMessage(uname,"should not contain digits");
        return false;
    }
    else if(unameValue.length<3)
    {
        errorMessage(element,"not be less than 3 letters");
        return false;
    }
    else if(numberValue=="")
    {
        errorMessage(number,"Number should not be empty");
        return false;
    }
    else if(checkNumber(numberValue))
    {
        errorMessage(number,"enter only digits");
        return false;
    }
    else if(numberValue.length<10||numberValue.length>10){
        errorMessage(number,"Please enter 10 digits");
        return false;
    }
    else if(emailValue=="")
    {
        errorMessage(email,"E-mail should not be empty");
        return false;
    }
    else if (!isValidEmail(emailValue)) 
    {
        errorMessage(email,'Provide a valid email address');
        return false;
    }
    else if(stateValue=="")
    {
        errorMessage(state,"please select state");
        return false;
    }
    else{
        return true;
    }

}