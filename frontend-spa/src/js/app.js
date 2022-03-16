import home from "./home.js";
import header from "./header.js";
import footer from './footer.js';
//import { campuses } from "./campusesJson.js";

fetch("http://localhost:8080/campuses")
.then(res => res.json())
.then(campuses => {
    console.log(campuses)
    const containerEl = document.querySelector(".container");
    containerEl.innerHTML = header();
    containerEl.innerHTML += home(campuses);
    containerEl.innerHTML += footer();
    
    const campusEl = containerEl.querySelectorAll(".campus");
    
    campusEl.forEach(campus =>{
        campus.addEventListener("click", ()=>{
            let campusIdEl = campus.querySelector(".id_field")
            alert("You clicked me: "+ campusIdEl.value);
        })
    })
})