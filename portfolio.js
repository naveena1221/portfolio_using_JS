const textArray = ["I'm a Web Developer", "I'm a Front-End Developer"];
        let currentIndex = 0;
        let currentText = '';
        let isDeleting = false;
        let typingSpeed = 200; // Speed in milliseconds

        function type() {
            const index = currentIndex % textArray.length;
            const fullText = textArray[index];

            if (isDeleting) {
                currentText = fullText.substring(0, currentText.length - 1);
            } else {
                currentText = fullText.substring(0, currentText.length + 1);
            }

            document.getElementById('typewriter-text').textContent = currentText;

            let delta = typingSpeed;

            if (isDeleting) {
                delta /= 2; // Faster deletion
            }

            if (!isDeleting && currentText === fullText) {
                delta = 1500; // Pause after typing
                isDeleting = true;
            } else if (isDeleting && currentText === "I'm a ") {
                isDeleting = false;
                currentIndex++;
                delta = 500; // Pause after deletion
            }

            setTimeout(type, delta);
        }

        document.addEventListener('DOMContentLoaded', type);


document.addEventListener("DOMContentLoaded", function() {
    const homeContent = document.getElementById("home");
    // Initially hide the content
    homeContent.style.opacity = "0";
    homeContent.style.transform = "translateY(100px)";
  
    // Display the content after a delay
    setTimeout(function() {
      homeContent.style.opacity = "1";
      homeContent.style.transform = "translateY(0)";
      homeContent.style.transition = "transform 1s ease-out";
    }, 1000);
    

  });

document.addEventListener("DOMContentLoaded",function(){
    const profile=document.getElementById("profile");
    profile.style.opacity="0";
    

    setTimeout(function(){
        profile.style.opacity = "1";
        profile.style.transition = "opacity 1.5s ease-in-out";
    },500)
});
document.addEventListener("DOMContentLoaded",function(){
    const project=document.getElementById("project");
    project.style.opacity="0";
    setTimeout(function(){
        project.style.opacity = "1";
        project.style.transition = "opacity 1.5s ease-in-out";

    },500)
});
document.addEventListener("DOMContentLoaded",function(){
    const contact=document.getElementById("contact");
    contact.style.opacity="0";
    setTimeout(function(){
        contact.style.opacity = "1";
        contact.style.transition = "opacity 1.5s ease-in-out";

    },500)
});

const fname=document.getElementById("fName");
const lname=document.getElementById("lName");
const submit=document.querySelector("#submit");
const email=document.getElementById("email");
const msg=document.getElementById("msg")
const subject=document.getElementById("subject");

submit&&submit.addEventListener('click',function(event){
    event.preventDefault();
    if(fname.value===""){
        fnameErr.style.display="flex";
        fName.style.borderColor='red';
    }
    if(lname.value===""){
        lnameErr.style.display="flex";
        lName.style.borderColor='red';
    }
    if(email.value===""){
        emailErr.style.display="block"
        email.style.borderColor='red';
    }
    else if(!email.value.includes("@")){
        emailErr2.style.display="block";
        email.style.borderColor='red';
    }
    if(msg.value===""){
        msgerr.style.display="flex";
        msg.style.borderColor='red';
    }
    const obj={
        fname:fname.value,
        lname:lname.value,
        email:email.value,
        subject:subject.value,
        message:msg.value

    };
    console.log(obj);
    localStorage.setItem("obj", JSON.stringify(obj));
    fname.value="";
    lname.value="";
    email.value="";
    msg.value="";

});

document.getElementById('shareButton').addEventListener('click', function() {
    // Get the current URL of your webpage
    const currentURL = window.location.href;
    console.log("Entered successfully");

    // Use the Web Share API if available in the browser
    if (navigator.share) {
        navigator.share({
            title: 'My Portfolio',
            text: 'Check out this portfolio!',
            url: currentURL
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
        // If Web Share API is not available, provide a fallback method
        // For example, you can prompt users to copy the URL
        prompt('Copy this link:', currentURL);
    }
});






