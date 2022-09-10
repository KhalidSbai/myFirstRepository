const menuItems = Array.from(document.querySelectorAll(".menu-item"));

//menu :
let index = 0;
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    menuItems[index].classList.remove("active-anim");
    index = menuItems.indexOf(this);
    menuItems[index].classList.add("active-anim");
  });
});

//card
let tableProduit = [
  { id: 2, taille: 28, prix: 130 },
  { id: 3, taille: 27, prix: 90 },
  { id: 1, taille: 28, prix: 80 },
  { id: 4, taille: 29, prix: 90 },
  { id: 5, taille: 28, prix: 70 },
  { id: 6, taille: 29, prix: 110 },
  { id: 7, taille: 28, prix: 80 },
  { id: 8, taille: 28, prix: 85 },
  { id: 9, taille: 29, prix: 85 },
];

const container = document.getElementById("container");
let contenu = "";
function pages() {
  tableProduit.forEach((element) => {
    contenu += `<div class="card">
    <div class="img">
      <img
        src="ressources/${element.id}-min.png"  id="${element.id}"
        alt=""
      />
    </div>
    <div class="info">
      <div class="taille">Taille : <span>${element.taille}</span></div>
      <div class="prix">${element.prix}<span class="dh"> DH</span></div>
    </div>
  </div>`;
  });
  container.innerHTML = contenu;
}
pages();

//visualisaiton image
const images = document.querySelectorAll(".img");
const visualImg = document.getElementById("visualimg");
const idVisualImg = document.getElementById("idvisualimg");

images.forEach((element) => {
  element.addEventListener("click", (e) => {
    let idimg = e.target.id || e.target.children[0].id;
    idVisualImg.setAttribute("src", "ressources/" + idimg + "-min.png");
    visualImg.classList.toggle("desactive");
  });
});
visualImg.addEventListener("click", () => {
  visualImg.classList.toggle("desactive");
});
