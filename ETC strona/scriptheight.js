window.addEventListener('DOMContentLoaded', function() {
    // Function to adjust the height
    function adjustHeight() {
        // Check if the screen width is greater than 768px (typically not mobile)
        if (window.innerWidth > 768) {
            // Get the height of the 'onas' section
            var onasHeight = document.querySelector('#onas .onas').offsetHeight;

            // Set the min-height of the 'kontakt' section to be the same as 'onas'
            document.querySelector('.kontakt').style.minHeight = onasHeight + 'px';
        } else {
            // Reset the min-height for mobile view
            document.querySelector('.kontakt').style.minHeight = 'auto';
        }
    }

    // Call the function initially
    adjustHeight();

    // Adjust the height when the window is resized
    window.addEventListener('resize', adjustHeight);
});
