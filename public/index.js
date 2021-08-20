
 const myName = () => {
     document.getElementById("name").innerHTML= "Gift Omodu";
}


const sendMail = (mail) => {
    fetch("https://http://localhost:3000//send", {
        method:"post",
        body: mail,
    }).then((response)=>{
        console.log(mail)
        return response.json();
    })
}

const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();
    let mail = new FormData(form);
    sendMail(mail);
})