let weigth = Number(prompt("Entrez votre poids(Kg)"));
let heigth = Number(prompt("Entrez votre hauteur (M)"));

function imc(a, b) {
  a = Math.pow(heigth, 2);
  b = weigth;
  let result = b / a;
  return result;
}
alert(imc() + " Regarder sur le tableau ci-dessous pour voir votre catégorie");
