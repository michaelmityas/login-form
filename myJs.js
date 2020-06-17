function simpleForm(){
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input   = arrow.previousElementSibling;
            const parent  = arrow.parentElement;
            const nextDiv = parent.nextElementSibling;

        //check username
        if(input.type === "text" && userValidate(input))
        {
            nextSlide(parent, nextDiv);
            error.innerHTML="";

        }else if(input.type === "email" && emailValidate(input)){
        //check email
            nextSlide(parent, nextDiv);
            error.innerHTML="";

        }else if(input.type === "password" && passwordValidate(input)){
        //check password
            nextSlide(parent, nextDiv);
            error.innerHTML="";

        }else{
            parent.style.animation = "shake .6s ease-in-out";
        }
        //rid of animation
        parent.addEventListener('animationend', () => {
            parent.style.animation = "";
        })
    })
 })
}

simpleForm()

var error = document.getElementById('output');

function userValidate(username){
    if(username.value.length < 6)
    {
        insertError('rgb(243, 117, 117)');
        error.innerHTML = "Username must be at least 6 characters"
    }else{
        insertError('rgb(112, 189, 130)');
        return true;
    }
}

function emailValidate(email){
    const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(validation.test(email.value)){
        insertError('rgb(112, 189, 130)');
        return true;
    }else{
        insertError('rgb(243, 117, 117)');
        error.innerHTML = "Email must be in valid form";
    }
}

function passwordValidate(input){
    if(input.value.length < 8)
    {
        insertError('rgb(243, 117, 117)');
        error.innerHTML = "Password must be at least 8 characters";
    }else{
        insertError('rgb(112, 189, 130)');
        return true;
    }
}

function insertError(color){
    document.body.style.backgroundColor = color;
}

function nextSlide(parent, nextDiv){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextDiv.classList.add('active');
}