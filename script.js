document.addEventListener("DOMContentLoaded", function() {
    // Define the variables to access them via JS
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    var sidemenu = document.getElementById("sidemenu");
    var popup = document.getElementById("popup");

    // Definition of opentab():
    function opentab(tabname) {
        for (var tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (var tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    // Menu stuff
    function openmenu() {
        sidemenu.style.right = "0";
    }
    
    function closemenu() {
        sidemenu.style.right = "-200px";
    }

    // Pop-up implementation:
    function openPopUp() {
        popup.classList.add("open-popup");
    }

    function closePopUp() {
        popup.classList.remove("open-popup");
    }

    // Add an event listener for form submission
    var contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        var formData = new FormData(contactForm);

        // Make an AJAX request
        fetch("form_handler.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                openPopUp();
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});


 ////WEB APP
/*
const scriptURL = 'https://script.google.com/macros/s/AKfycbxF4t2rRJVbjggbyuUQMCcPxufRZt0zfigd7cn1phalC7mJofJtU659qNr7lG4UCvg7/exec'
    const form = document.forms['submit-to-google-sheet']

    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
*/
