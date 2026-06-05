const players = [
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "KL Rahul",
        score: 5878
    },
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "Shikhar Dhawan",
        score: 5878
    },
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "Shikhar Dhawan",
        score: 5878
    },
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "Shikhar Dhawan",
        score: 5878
    },
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "Shikhar Dhawan",
        score: 5878
    },
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "Shikhar Dhawan",
        score: 5878
    },
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "Shikhar Dhawan",
        score: 5878
    }
];

const main = document.querySelector(".main");

for (let i = 0; i < players.length; i++) {
    const element = players[i];
    const htmlTemplate = `
    <div class="card" >
        <div class="card_img">
            <img src="${element.img}"
                alt="">
        </div>
        <div class="card_content"></div>
            <h3>${element.name}</h3>
            <p>IPL Score: ${element.score}</p>
            <button class="donate-btn">Donate</button>
        </div>
    </div>
    `
    main.innerHTML += htmlTemplate;
}



const donateBtn = document.getElementsByClassName("donate-btn");
let cartItems = []
//console.log(donateBtn[0])

for (let i = 0; i < donateBtn.length; i++) {
    donateBtn[i].addEventListener("click", () => donateButtonClicked(i))
}

function donateButtonClicked(index) {

    if (cartItems.includes(index) === true) {
        console.log("Player already been added to cart");

    }
    else {
        cartItems.push(index)
        console.log("Player added to cart");
    }

    console.log(cartItems)
    const cartItemCountElement = document.getElementById("cart-items-count");
    cartItemCountElement.innerText = cartItems.length;
    console.log("Clicked on a donate button", index)
}

const donateButtonClicked2 = (index) => {
    console.log("Clicked on Index", index)
}

/*const players = [
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "KL Rahul",
        score: 5878
    },
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "Shikhar Dhawan",
        score: 5878
    },
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "Shikhar Dhawan",
        score: 5878
    },
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "Shikhar Dhawan",
        score: 5878
    },
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "Shikhar Dhawan",
        score: 5878
    },
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "Shikhar Dhawan",
        score: 5878
    },
    {
        img: "https://documents.iplt20.com/ipl/IPLHeadshot2026/2.png",
        name: "Shikhar Dhawan",
        score: 5878
    }
];

const main = document.querySelector(".main"); 

let html = ""; 

for (let i = 0; i < players.length; i++) {
    const player = players[i];

    html += `
    <div class="card">
        <div class="card_img">
            <img src="${player.img}" alt="">
        </div>

        <div class="card_content">
            <h3>${player.name}</h3>
            <p>IPL Score: ${player.score}</p>
            <button class="donate-btn">Donate</button>
        </div>
    </div>
    `;
}

main.innerHTML += html;
*/