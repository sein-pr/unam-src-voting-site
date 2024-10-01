document.addEventListener("DOMContentLoaded", function () {
    // Candidates with roles
    const presidents = [
        {
            name: "Jensen Ackles",
            image: "/assets/img/suitJensen.jpg",
            qualities: ["Persuasive", "Power", "Integrity", "People's choice"],
            role: "president"
        },
        {
            name: "Dolores Abanathy",
            image: "/assets/img/suitedDolores.avif",
            qualities: ["Persuasive", "Power", "Integrity", "People's choice"],
            role: "president"
        },
        {
            name: "Maeve Abanathy",
            image: "/assets/img/tumblr_64a827a6f44de4700f5755030be71019_87d053f6_1280.jpg",
            qualities: ["Persuasive", "Power", "Integrity", "People's choice"],
            role: "president"
        }
    ];

    // Candidates without roles
    const otherCandidates = [
        {
            name: "Dolores Abanathy",
            image: "/assets/img/images.jpeg",
            qualities: ["Persuasive", "Power", "Integrity", "People's choice"]
        },
        {
            name: "Thandie Newton",
            image: "/assets/img/thandie-newton-as-maeve-in-westworld.avif",
            qualities: ["Persuasive", "Power", "Integrity", "People's choice"]
        },
        {
            name: "Maeve Abanathy",
            image: "/assets/img/images.jpeg",
            qualities: ["Persuasive", "Power", "Integrity", "People's choice"]
        }
    ];

    const votingSection = document.querySelector(".candidate");
    const selectedCandidates = []; // Store selected candidate

    // Create voting items for candidates with roles
    presidents.forEach(candidate => {
        const votingItem = document.createElement("div");
        votingItem.classList.add("voting-items-president");

        votingItem.innerHTML = `
            <div class="image-item-president">
                <img src="${candidate.image}" alt="${candidate.name}">
                <div class="input"></div>
                <button><i class="uil uil-play"></i></button>
            </div>
            <div class="info">
                <h3>${candidate.name}</h3>
                <ul>
                    ${candidate.qualities.map(quality => `<li>${quality}</li>`).join('')}
                </ul>
            </div>
            <div class="ribbon"><span>${candidate.role}</span></div>
        `;

        votingSection.appendChild(votingItem);
    });

    // Create voting items for other candidates
    otherCandidates.forEach(candidate => {
        const votingItem = document.createElement("div");
        votingItem.classList.add("voting-items");

        votingItem.innerHTML = `
            <div class="image-item">
                <img src="${candidate.image}" alt="${candidate.name}">
                <div class="input"></div>
                <button><i class="uil uil-play"></i></button>
            </div>
            <div class="info">
                <h3>${candidate.name}</h3>
                <ul>
                    ${candidate.qualities.map(quality => `<li>${quality}</li>`).join('')}
                </ul>
            </div>
        `;

        votingSection.appendChild(votingItem);
    });

    // Handle candidate selection
    document.querySelectorAll('.voting-items-president .input, .voting-items .input').forEach((inputDiv, index) => {
        inputDiv.addEventListener('click', function () {
            // Change background color of clicked div to yellow
            this.style.backgroundColor = 'yellow';

            // Find the corresponding candidate name
            let candidateName = this.parentElement.nextElementSibling.querySelector('h3').textContent;

            // Ensure only one candidate can be selected at a time
            selectedCandidates.length = 0; // Clear previous selection
            selectedCandidates.push(candidateName); // Store the clicked candidate's name

            // Clear background color of all other candidates
            document.querySelectorAll('.voting-items-president .input, .voting-items .input').forEach((div, idx) => {
                if (idx !== index) {
                    div.style.backgroundColor = ''; // Reset others
                }
            });
        });
    });

    // Handle submission of the vote
    const nextButton = document.querySelector("#next");
    nextButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent immediate redirection

        if (selectedCandidates.length === 0) {
            alert("Please select a candidate before proceeding!");
            return;
        }

        // Store that the user has voted
        localStorage.setItem('hasVoted', 'true');

        // Display the modal and show selected candidate
        const modal = document.querySelector('.voted-modal');
        const votedFor = document.querySelector('#voted-for');
        votedFor.textContent = selectedCandidates[0]; // Display the selected candidate's name
        modal.style.display = 'block'; // Show the modal

        // Wait 3 seconds, then redirect to done.html
        setTimeout(() => {
            window.location.href = './done.html'; // Redirect to done page
        }, 3000);
    });
});

// Redirect logic for done.html
document.addEventListener("DOMContentLoaded", function () {
    // Wait for 5 seconds and then redirect to home page
    setTimeout(() => {
        window.location.href = './home.html'; // Adjust as necessary
    }, 5000);
});

// Update home page based on voting status
document.addEventListener("DOMContentLoaded", function () {
    const voteButton = document.querySelector("#vote-button"); // Adjust this selector as necessary

    // Check if the user has voted
    if (localStorage.getItem('hasVoted') === 'true') {
        voteButton.textContent = 'Voted'; // Change button text
        voteButton.disabled = true; // Optionally disable the button
    }
});
