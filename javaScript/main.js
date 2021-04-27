const skipButton = document.getElementById("skip_btn");
const addButton = document.getElementById("add_btn");
let emailText = document.getElementById('email_text');
//Get img with axios

let usedEmails = [];
let correctEmail
    
const getimage = () => axios.get("https://picsum.photos/300")
.then((response) => {
    pictureId = response.headers['picsum-id'];
    console.log(response);
    imageUrl = `https://picsum.photos/id/${pictureId}/300`;
    document.getElementById("image_src").src = imageUrl;
})
.catch(function (error) {
    console.log(error)
});

addButton.addEventListener('click', function() {
    validateEmail(emailText.value);
});

function validateEmail(emailInput){
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.match(mailFormat)) {

        addimgtobox(emailInput, imageUrl)
        createBoxforImg()

    } else {
        // emailInputError.textContent = emailerrorstring
        console.log("error");
    }
}

window.addEventListener("load", getimage);
skipButton.addEventListener("click", getimage);

function createBoxforImg () {};
function addImgetoBox () {};


