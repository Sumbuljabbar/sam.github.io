
        // Function to toggle visibility of the nested list
        function toggleList(listId, event) {
            const nestedList = document.getElementById(listId);
            nestedList.classList.toggle('show');
            event.stopPropagation();  // Prevents the event from propagating to parent <li> items
        }

        // Function to show or hide the image for the clicked course
        function showImage(imageId, listItem, event) {
            // Prevent the click event from propagating to the parent list
            event.stopPropagation();

            // Check if the image is already visible under the list item
            const existingImage = listItem.querySelector('img');
            const image = document.getElementById(imageId);

            if (existingImage) {
                // If the image is already visible, hide it
                existingImage.remove();
            } else {
                // Hide all images
                const images = document.querySelectorAll('.image');
                images.forEach(image => image.style.display = 'none');

                // Clone the selected image and display it under the clicked list item
                const newImage = image.cloneNode(true);
                newImage.style.display = 'block';
                listItem.appendChild(newImage);
            }
        }
    

    // Function to toggle the visibility of responsibilities on click
    function toggleResponsibilities(responsibilityId) {
      var element = document.getElementById(responsibilityId);
      if (element.style.display === "block") {
          element.style.display = "none";
      } else {
          element.style.display = "block";
      }
  }

// Function to toggle the visibility of each content section
function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}