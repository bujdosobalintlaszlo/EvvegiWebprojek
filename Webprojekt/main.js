var num = 0;
function BejelentkezesGen()
{
  document.body.innerHTML="";
  BejelentkezesNavGen();
  BejelenkezesDobozGen();
  num++;
  console.log(num);
}

function BejelentkezesNavGen() {
  let nav = document.createElement("nav");
  let svgElement = createXCircleSVG();
  nav.style.padding="10px"
  svgElement.addEventListener('click',Fooldalra);
  nav.appendChild(svgElement);
  document.body.appendChild(nav);
}

function createXCircleSVG() {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "40");
  svg.setAttribute("height", "40");
  svg.setAttribute("fill", "currentColor");
  svg.setAttribute("class", "bi bi-x-circle");
  svg.setAttribute("viewBox", "0 0 16 16");
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16");
  var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708");
  svg.appendChild(path1);
  svg.appendChild(path2);
  return svg;
}

function BejelenkezesDobozGen() {
  let div = document.createElement("div");
  div.id = "doboz";
  div.style.background = "grey";
  div.style.position = "absolute";
  div.style.top = "50%";
  div.style.left = "50%";
  div.style.transform = "translate(-50%, -50%)";
  div.style.height = "60%";
  div.style.width = "60%";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center"; // középre vízszintesen igazítás
  div.style.justifyContent = "center"; // középre függőlegesen igazítás
  div.style.border="2px solid black";
  div.style.borderRadius="15px";

  let nevInput = createInput("text", "nev", "Név");
  let emailInput = createInput("email", "email", "E-mail");
  let jelszoInput = createInput("password", "jelszo", "Jelszó");

  div.appendChild(createInputLabel("Név"));
  div.appendChild(nevInput);

  div.appendChild(createInputLabel("E-mail"));
  div.appendChild(emailInput);

  div.appendChild(createInputLabel("Jelszó"));
  div.appendChild(jelszoInput);
  let button = document.createElement("input");
  button.type="button";
  button.value="Bejelentkezés";
  div.appendChild(button);
  document.body.appendChild(div);
}

function createInput(type, id, placeholder) {
  let input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.className = "inpbox";
  input.placeholder = placeholder;

  return input;
}

function createInputLabel(text) {
  let label = document.createElement("label");
  label.innerHTML = text;

  return label;
}


function Fooldalra()
{

}










