const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(event){

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if(name === ""){
            alert("Please enter your name");
            return;
        }

        if(email === ""){
            alert("Please enter your email");
            return;
        }

        if(!email.includes("@")){
            alert("Please enter a valid email");
            return;
        }

        if(message === ""){
            alert("Please enter your message");
            return;
        }

        form.reset();
        alert("Message Sent Successfully!");

    });

}

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("change", function(){

    document.body.classList.toggle("dark");

});