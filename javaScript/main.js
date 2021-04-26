const skipButton = document.getElementById("skip_btn");
const addButton = document.getElementById("add_btn");
//Get img with axios


    const getimage = () => axios.get("https://picsum.photos/300")
    .then(response => {
        pictureId = response.headers['picsum-id'];
        console.log(response);
        imageUrl = `https://picsum.photos/id/${pictureId}/300`;
        document.getElementById("image_src").src = imageUrl;
    })
    .catch(function (error) {
        console.log(error)
    });

    

// let tempImages = [pictureId];
// console.log(tempImages);

window.addEventListener("load", getimage);
skipButton.addEventListener("click", getimage);

// let urlArray = [pictureId];
// let imageArray = [ImageUrl];

// const tempimages = ['Id', 'Url'];
// console.log(tempimages);

// const save = () => {
//     tempimages.push(ImageUrl);
//     tempimages.push(pictureId);
// }

// class Useremail {
//     constructor(id, email){
//         this.id = id;
//         this.email = email;
//     }
// }

// var emailAddress = new Useremail {}

// the new keyword
    // - creates a new empty object
    // - sets the value of this to be the new empty object
    // - calls the constructor method

// addButton.addEventListener("click", save);

// add image to temprorary array

// array of images added


// create array
// const selectedImages

//class email > ID AND URL

