let bio = document.querySelector(".bio");
let imgContainer = document.querySelector(".img-container");
let getUserBtn = document.getElementById("get-random-btn");
let url = "https://random-data-api.com/api/v2/users?response_type=json";

// fetching Api data and creating a new user

let getUser = () => {
fetch(url)
.then((resp) => resp.json())
.then ((data) => {
imgContainer.innerHTML = `<img src=${data.avatar}>`;
bio.innerHTML = 
`<h2>${data.first_name} ${data.last_name}</h2>
<h3>${data.employment.title}</h3>
<p><i class="fa-solid fa-location-dot"></i>${data.address.city}</p>`;

// generating random color while choose a user

let bgRandomColor = 
"#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6,"0");
document.documentElement.style.setProperty ("--theme-color", bgRandomColor);
});

}

window.addEventListener("load", getUser);
getUserBtn.addEventListener("click",getUser);