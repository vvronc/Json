console.log("Hello world")

const myobj= { 
    name: "Rono",
    language: "Python",
    age:8,
    city: "Nyeri"
};

document.getElementById("demo").innerHTML=myobj.name;
document.getElementById("demo1").innerHTML =myobj.city;


// API

const fetchData = () => {
    const listEl = document.querySelector("ul");
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log(res);
        return res.json();
    })

    .then((data) => {
        data.forEach((post) => {
            listEl.insertAdjacentHTML("beforeend", `<h1>${post.name}</h1>`);
            listEl.insertAdjacentHTML("beforeend", `<p>${post.email}<p>`);
            listEl.insertAdjacentHTML("beforeend", `<p>${post.address.city}</p>`);
            listEl.insertAdjacentHTML("beforeend", `<p>${post.company.bs}</p>`);
        });
        console.log("data");
    })
    .catch((err) => {
        console.log(err.message);
    });

}
fetchData();