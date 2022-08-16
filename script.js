const cn = document.querySelector(".container");
const ty = document.querySelector(".ty");
const btn = document.getElementById("btn-submit");
const rating = document.getElementById("rate")
const rates = document.querySelectorAll(".rating")


btn.addEventListener("click", ()=>{
    ty.classList.remove("hidden");
    cn.style.display = "none";
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})