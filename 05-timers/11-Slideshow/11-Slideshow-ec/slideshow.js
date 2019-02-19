// Slideshow Activity
// Students: follow the instructions below:

// TODO: Put links to our images in this image array.
var images = [
  'images/bootstrap.png',
  'images/github-logo.jpg',
  'images/logo_JavaScript.png'
];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$('#start').on('click', startSlideshow);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$('#stop').on('click', stopSlideshow);

// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $('#image-holder').html('<img src=' + images[count] + " width='400px'>");
}

function nextImage() {
  // TODO: Increment the count by 1.
  // TODO: Show the loading gif in the "image-holder" div.
  // TODO: Use a setTimeout to run displayImage after 1 second.
  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  count++;
  $('#image-holder').html('<img src="images/loading.gif" width="50px">');
  setTimeout(function() {
    displayImage();
  }, 1000);
  if (count === images.length) {
    count = 0;
  }
}
function startSlideshow() {
  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 1000);
}
function stopSlideshow() {
  // TODO: Put our clearInterval here:
  clearInterval(showImage);
}

// This will run the display image function as soon as the page loads.
displayImage();