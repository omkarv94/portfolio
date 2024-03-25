document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fetchUsersButton").addEventListener("click", getUsers);
});

async function getUsers() {
    const res = await fetch("https://dummyjson.com/users");
    const usersData = await res.json();
    const users = usersData.users;

    const userCardsContainer = document.getElementById("userCards");
    userCardsContainer.innerHTML = ""; // Clear previous content

    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.image;
        card.appendChild(img);

        const content = document.createElement("div");
        content.classList.add("card-content");

        const name = document.createElement("h4");
        name.textContent = `${user.firstName} ${user.lastName}`;
        content.appendChild(name);

        const email = document.createElement("p");
        email.textContent = user.email;
        content.appendChild(email);

        if (user.address && user.address.city && user.address.country) {
            const address = document.createElement("p");
            address.textContent = `${user.address.city}, ${user.address.country}`;
            content.appendChild(address);
        } else {
            const address = document.createElement("p");
            address.textContent = "Address not available";
            content.appendChild(address);
            console.log("Missing or undefined address data for user:", user);
        }

        card.appendChild(content);
        userCardsContainer.appendChild(card);
    });
}
