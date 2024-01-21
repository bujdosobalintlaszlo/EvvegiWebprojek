var num = 0;
function BejelentkezesGen()
{
  BejelentkezesNavbarGen();
  num++;
  console.log(num);
}

function BejelentkezesNavbarGen()
{
  document.body.innerHTML="";
  let navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  navbar.style.paddingLeft ="10px";
  let visszaButton = document.createElement("input");
  visszaButton.type="button";
  visszaButton.value="Visszalépés";
  visszaButton.classList.add("gomb");
  visszaButton.addEventListener('click', LandingpageGen);
  navbar.appendChild(visszaButton);
  document.body.appendChild(navbar);
}






