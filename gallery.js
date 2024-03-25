const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-lists");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".navbar-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fetchUsersButton").addEventListener("click", getUsers);
});

async function getUsers() {
    const res = await fetch("https://dummyjson.com/users");
    const usersData = await res.json();
    const users = usersData.users;
    const btn=document.getElementById("fetchUsersButton");
    const tt=document.getElementById("texttop")

    const userCardsContainer = document.getElementById("userCards");
    userCardsContainer.innerHTML = ""; 

    users.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.image;
        card.appendChild(img);

        const content = document.createElement("div");
        content.classList.add("card-content");

        const name = document.createElement("h4");
        name.textContent = `Name: ${user.firstName} ${user.lastName}`;
        content.appendChild(name);

        const maidenname = document.createElement("h4");
        maidenname.textContent = `Maiden-name: ${user.maidenName}`;
        content.appendChild(maidenname);

        const email = document.createElement("p");
        email.textContent =  `E-mail: ${user.email}`;
        content.appendChild(email);

        if (user.address && user.address.city && user.address.address && user.address.state && user.address.postalCode) {
            const address = document.createElement("p");
            address.textContent = `Address: ${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}`;
            content.appendChild(address);
        } else {
            const address = document.createElement("p");
            address.textContent = "Address not available";
            content.appendChild(address);
            console.log("Missing or undefined address data for user:", user);
        }
        if (user.university) {
            const university = document.createElement("p");
            university.textContent = `University: ${user.university}`;
            content.appendChild(university);
        }

        // Check if bank data exists
        if (user.bank) {
            const bankInfo = document.createElement("p");
            bankInfo.textContent = `Bank: ${user.bank.cardType}, ${user.bank.currency}`;
            content.appendChild(bankInfo);
        }

        // Check if company data exists
        if (user.company) {
            const companyInfo = document.createElement("p");
            companyInfo.textContent = `Company: ${user.company.name}, ${user.company.department}`;
            content.appendChild(companyInfo);
        }

        // Check if crypto data exists
        if (user.crypto) {
            const cryptoInfo = document.createElement("p");
            cryptoInfo.textContent = `Crypto: ${user.crypto.coin}`;
            content.appendChild(cryptoInfo);
        }

        card.appendChild(content);
        userCardsContainer.appendChild(card);
        btn.classList.add("remove");
        tt.classList.add("remove")

    });
}
