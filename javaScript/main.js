//GET URL
let imageUrl = 'https://picsum.photos/300';

//assign url to image element on desktop




// document.getElementById('email_submit').addEventListener('click');

// random image api
let skip = false;
//SKIP
document.getElementById('skip_btn').addEventListener('click', function() {
    skip = !skip;

    if(skip) { document.getElementById("refresh").src= imageUrl;
        console.log('click'); }
});


//ADD 
document.getElementById('add_btn').addEventListener('click', function() {

})

