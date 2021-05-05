const userContainer = document.getElementById('selected_images');
const skipButton = document.getElementById("skip_btn");
const addButton = document.getElementById("add_btn");
let emailText = document.getElementById('email_text');

let usedEmails = [];
let imageUrl
let pictureId
let passedEmail
    
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
        console.log(passedEmail);

        if(arrayContains(passedEmail)) {
        addImgtoBox(passedEmail, imageUrl)
        } else {
            createBoxforImg()
        }

        getimage()

        } else {
            // emailInputError.textContent = emailerrorstring
            console.log("error");
            window.alert("Please input a valid email");
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
    imgContainer.id = passedEmail + '_imgbox'
    userContainer.appendChild(imgContainer)

    // img
    let image = document.createElement('img')
    image.classList.add('saved_mini')
    image.src = `https://picsum.photos/id/${pictureId}/150`;
    imgContainer.appendChild(image);
    usedEmails.push(passedEmail)

};

function addImgtoBox () {
    //create image to email thats already been created

    let image = document.createElement('img')
    image.classList.add('saved_mini')
    image.src = `https://picsum.photos/id/${pictureId}/150`;
    let imgContainer = document.getElementById(passedEmail + '_imgbox')
    imgContainer.appendChild(image);

};

//if email is used
function arrayContains(value) {
    for (let x = 0; x < usedEmails.length; x++) {
        if (usedEmails[x] === value) {
            return true
        }
    }
    return false
}


