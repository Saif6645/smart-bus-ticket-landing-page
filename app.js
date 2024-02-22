// Get a reference to the button
const scrollButton = document.getElementById('fast-btn');

// Get a reference to the target section
const section2 = document.getElementById('here');

// Add a click event listener to the button
scrollButton.addEventListener('click', function() {
    section2.scrollIntoView({ behavior: 'smooth' });
});


