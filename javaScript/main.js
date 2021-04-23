const skipButton = document.getElementById("skip_btn");
const addButton = document.getElementById("")

//Get img with axios

const getimage = () => {

    axios.get("https://picsum.photos/300")
    .then(response => {
        pictureId = response.headers['picsum-id'];
        console.log(response);
        ImageUrl = `https://picsum.photos/id/${pictureId}/300`;
        document.getElementById("image_src").src = ImageUrl;
    })
    .catch(function (error) {
        console.log(error)
    });
};

window.addEventListener("load", getimage);
skipButton.addEventListener("click", getimage);


// create array

const selectedImages


