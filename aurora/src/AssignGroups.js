// script.js
const dragSources = document.querySelectorAll('.drag-source');
const newLeaderButton = document.getElementById('newLeaderButton');
const listContainers = []; // An array to store list containers for each big circle
let nextBigCircleLeft = 0; // Track the left position of the next big circle

// Function to create a new big circle with text and a list
function createNewBigCircle(text) {
    const bigCircle = document.createElement('div');
    bigCircle.classList.add('drop-target');
    bigCircle.style.backgroundColor = 'lightcoral'; // Set the background color to a lighter red
    const label = document.createElement('span');
    label.classList.add('label');
    label.textContent = text;
    bigCircle.appendChild(label);
    const listContainer = document.createElement('ul');

    // Add event listeners for the new big circle
    bigCircle.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    bigCircle.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');

        const listItem = document.createElement('li');
        listItem.textContent = data;
        listContainer.appendChild(listItem);

        // Hide only the dragged blue circle
        const draggedCircle = document.querySelector('.dragged-circle');
        if (draggedCircle) {
            draggedCircle.style.display = 'none';
            draggedCircle.classList.remove('dragged-circle'); // Remove the class
        }
    });

    listContainers.push(listContainer); // Add the list container to the array
    bigCircle.appendChild(listContainer); // Append the list container to the big circle

    // Set the position of the big circle at the bottom of the screen
    bigCircle.style.position = 'absolute';
    bigCircle.style.bottom = '10px'; // Adjust the bottom position as needed
    bigCircle.style.left = `${nextBigCircleLeft}px`; // Set the left position
    nextBigCircleLeft += 220; // Increase the left position for proper spacing

    document.body.appendChild(bigCircle); // Append the big circle to the body
}

// Add event listener for the "New Leader" button
newLeaderButton.addEventListener('click', () => {
    const leaderName = prompt('Enter house id:');
    if (leaderName) {
        createNewBigCircle(leaderName);
    }
});

// Add event listeners for drag-and-drop for each drag source
dragSources.forEach((dragSource) => {
    dragSource.addEventListener('dragstart', (e) => {
        const label = e.target.textContent;
        e.dataTransfer.setData('text/plain', label);

        // Add a class to the dragged blue circle
        e.target.classList.add('dragged-circle');
    });
});

// Add a variable to keep track of the current drop target
let currentDropTarget = null;

document.addEventListener('dragenter', (e) => {
    if (e.target.classList.contains('drop-target')) {
        currentDropTarget = e.target;
        e.target.classList.add('highlight');
    }
});

document.addEventListener('dragleave', (e) => {
    if (e.target.classList.contains('drop-target')) {
        e.target.classList.remove('highlight');
    }
});

document.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');

    if (currentDropTarget) {
        const listItem = document.createElement('li');
        listItem.textContent = data;
        listContainers[currentDropTarget.dataset.index].appendChild(listItem);
        currentDropTarget.classList.remove('highlight');
    }
});
const groupings = new Map();

// Function to update the groupings hashmap
function updateGroupings() {
    // Clear the existing groupings
    groupings.clear();

    // Iterate through the big circles and their respective lists
    listContainers.forEach((listContainer, index) => {
        const bigCircleLabel = document.querySelectorAll('.drop-target .label')[index].textContent;
        const smallCircleLabels = Array.from(listContainer.getElementsByTagName('li')).map((li) => li.textContent);

        // Store the grouping in the hashmap
        groupings.set(bigCircleLabel, smallCircleLabels);
    });
}

// Function to send the groupings data to the API
function sendGroupingsToAPI() {
    // Call your API here with the 'groupings' hashmap as the data payload
    // Example: You can use fetch to make a POST request to your API endpoint
    fetch('http://127.0.0.1:4000/houses_assign', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Array.from(groupings.entries())),
    })
        .then((response) => {
            if (response.ok) {
                console.log('Groupings successfully sent to the API.');
            } else {
                console.error('Failed to send groupings to the API.');
            }
        })
        .catch((error) => {
            console.error('Error while sending groupings:', error);
        });
}

// Add an event listener to the submit button
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', () => {
    updateGroupings();
    sendGroupingsToAPI();
});

// Function to send groupings data to the API
function sendGroupingsToAPI() {
    // Create an object to hold the groupings with houses as "id"
    const groupingsWithHouses = {};

    // Iterate through the big circles and their respective lists
    listContainers.forEach((listContainer, index) => {
        const bigCircleLabel = document.querySelectorAll('.drop-target .label')[index].textContent;
        const smallCircleLabels = Array.from(listContainer.getElementsByTagName('li')).map((li) => li.textContent);

        // Assign the small circle labels to the big circle label (house)
        groupingsWithHouses[bigCircleLabel] = smallCircleLabels;
    });

    // Send the data to your API
    fetch('/house_assign', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: groupingsWithHouses }),
    })
        .then((response) => {
            if (response.ok) {
                console.log('Groupings with houses successfully sent to the API.');
            } else {
                console.error('Failed to send groupings with houses to the API.');
            }
        })
        .catch((error) => {
            console.error('Error while sending groupings with houses:', error);
        });
}
