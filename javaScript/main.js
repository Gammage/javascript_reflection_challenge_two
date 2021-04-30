const userContainer = document.getElementById('selected_images');

const skipButton = document.getElementById("skip_btn");
const addButton = document.getElementById("add_btn");
let emailText = document.getElementById('email_text');
//Get img with axios

let usedEmails = [];
let correctEmail
let imageUrl
let pictureId
let passedEmail
let uncutemail
    
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

function validateEmail(emailInput){
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailInput.match(mailFormat)) {
        
        passedEmail = emailInput
        // .replace(/@/g, '')
        console.log(passedEmail);
        uncutemail = emailInput; //why

        if(arrayContains(passedEmail)) {
        addimgtobox(emailInput, pictureId)
        } else {
            createBoxforImg()
        }

        } else {
            // emailInputError.textContent = emailerrorstring
            console.log("error");
        }
};


addButton.addEventListener('click', function() {
    validateEmail(emailText.value);
});


window.addEventListener("load", getimage);
skipButton.addEventListener("click", getimage);

function createBoxforImg () {

    // create main
    let userImages = document.createElement('div');
    userImages.classList.add('user_img');
    userImages.id = passedEmail;
    userContainer.appendChild(userImages);

    // text
    let emailText = document.createElement('p')
    emailText.textContent = passedEmail
    userContainer.appendChild(emailText)

    // image container
    let imgContainer = document.createElement('div')
    imgContainer.classList.add('image_container')
    imgContainer.id = passedEmail + '_img_box'
    userContainer.appendChild(imgContainer)

    // img
    let image = document.createElement('img')
    image.src = `https://picsum.photos/id/${pictureId}/150`;
    imgContainer.appendChild(image);

};

function addImgetoBox () {
    //create image to email thats already been created

    let image = document.createElement('img')
    image.src = `https://picsum.photos/id/${pictureId}/150`;
    imgContainer.appendChild(image);

};

//this makes no sense, but i know this is used to test if an email has been saved already
function arrayContains(value) {
    for (let x = 0; x < usedEmails.length; x++) {
        if (usedEmails[x] === value) {
            return true
        }
    }
    return false
}


