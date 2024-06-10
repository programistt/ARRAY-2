let body = document.querySelector("body");

let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

data.map((element) => {
    let p = document.createElement("p");
    if (element > 50) {
        p.style = "background-color: green; color: lightblue; font-size: 40px; text-align:center"
    } else {
        p.style = "background-color: red; color: lightblue; font-size: 40px; text-align:center"
    }

    p.textContent = element;

    body.appendChild(p);
})