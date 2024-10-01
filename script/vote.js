document.addEventListener("DOMContentLoaded", function () {
    const candidates = [
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
    let selectedCandidate = "";

    // Dynamically create voting items
    candidates.forEach((candidate, index) => {
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

        // Add click event listener to the input divs
        const inputDiv = votingItem.querySelector('.input');
        inputDiv.addEventListener('click', function () {
            // Change background color of clicked div to yellow
            this.style.backgroundColor = 'yellow';

            // Record the selected candidate's name
            selectedCandidate = candidate.name;

            // Clear background color of other candidates
            document.querySelectorAll('.input').forEach((div, idx) => {
                if (idx !== index) {
                    div.style.backgroundColor = ''; // Reset others
                }
            });
        });
    });

    // Handle the submit button click
    const nextButton = document.querySelector("#next");
    nextButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent immediate redirection

        if (!selectedCandidate) {
            alert("Please select a candidate before proceeding!");
            return;
        }

        // Display the modal and show selected candidate
        const modal = document.querySelector('.voted-modal');
        const votedFor = document.querySelector('#voted-for');
        votedFor.textContent = selectedCandidate; // Display the selected candidate's name
        modal.style.display = 'block'; // Show the modal

        // Wait 3 seconds, then redirect
        setTimeout(() => {
            window.location.href = './vote-executive.html'; // Redirect to the next page
        }, 3000);
    });
});
