document.addEventListener("DOMContentLoaded", function () {
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

    const candidateSection = document.querySelector(".candidate");
    let selectedPresident = "";

    // Dynamically create voting items for presidents
    presidents.forEach((president, index) => {
        const votingItem = document.createElement("div");
        votingItem.classList.add("voting-items-president");

        votingItem.innerHTML = `
            <div class="image-item-president">
                <img src="${president.image}" alt="${president.name}">
                <div class="input"></div>
                <button><i class="uil uil-play"></i></button>
            </div>
            <div class="info">
                <h3>${president.name}</h3>
                <ul>
                    ${president.qualities.map(quality => `<li>${quality}</li>`).join('')}
                </ul>
            </div>
            <div class="ribbon"><span>${president.role}</span></div>
        `;

        candidateSection.appendChild(votingItem);

        // Add click event listener to the input divs
        const inputDiv = votingItem.querySelector('.input');
        inputDiv.addEventListener('click', function () {
            // Change background color of clicked div to yellow
            this.style.backgroundColor = 'yellow';

            // Record the selected president's name
            selectedPresident = president.name;

            // Clear background color of other candidates
            document.querySelectorAll('.voting-items-president .input').forEach((div, idx) => {
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

        if (!selectedPresident) {
            alert("Please select a president before proceeding!");
            return;
        }

        // Display the modal and show selected president
        const modal = document.querySelector('.voted-modal');
        const votedFor = document.querySelector('#voted-for');
        votedFor.textContent = selectedPresident; // Display the selected president's name
        modal.style.display = 'block'; // Show the modal

        // Wait 3 seconds, then redirect
        setTimeout(() => {
            window.location.href = './done.html'; // Redirect to the next page
        }, 3000);
    });
});
