
 const myName = () => {
     document.getElementById("reveal").innerHTML= "Gift Omodu";
}


const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();
    let mail = new FormData(form);
    sendMail(mail);
})

const sendMail = (mail) => {
    fetch("https://fast-brushlands-74233.herokuapp.com/send", {
        method:"post",
        body: mail,
    }).then((response)=>{
        return response.json();
    });
    
}
