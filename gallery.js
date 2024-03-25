     async function getImages()  {
    const res = await fetch("https://dummyjson.com/users")
    const users = await  res.json()    
    users.users.forEach(user => {
        var elem = document.createElement("img");
        var elem1 = document.createElement("h4");
        var card = document.createElement("div");
        elem.setAttribute("src", user.image);
        elem1.innerHTML = user.firstName;
        card.setAttribute("height", "500");
        card.setAttribute("width", "300");
        card.appendChild(elem);
        card.appendChild(elem1);
        document.getElementById("imgagesDiv").appendChild(card);

    });
    }