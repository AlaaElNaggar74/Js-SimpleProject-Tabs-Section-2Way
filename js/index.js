let contextandheader = document.getElementById("context");
let hedTabs = document.querySelectorAll(".hedTabs");
let dipla = document.querySelectorAll(".dipla");

contextandheader.addEventListener("click", (eve) => {
  console.log(eve.target.dataset.id);
  let checkValue = eve.target.dataset.id;
  if (checkValue) {
    hedTabs.forEach((but) => {
      but.classList.remove("active");
    });
    eve.target.classList.add("active");

    dipla.forEach((artic) => {
      artic.classList.remove("active");
    });
    let artiicID = document.getElementById(checkValue);
    console.log();
    artiicID.classList.add("active");
  }
});
