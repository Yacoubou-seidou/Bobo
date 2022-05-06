const quoteEl = document.getElementById("quote-el");
const quoteGene = document.getElementById("quote-gene");
const myQuotes = [
  { quote: "Bonzour les zamis", author: "Kailo" },
  {
    quote: "Le crocodile n'attend pas que le gorille accouche",
    author: "President BOBO",
  },
  {
    quote: "On as pas besoin d'eau potable pour eteindre un incendie",
    author: "President H.B",
  },
  {
    quote:
      "La France nous a souvent volé nos richesses... vous allez aussi nous voler nos footballeur ?",
    author: "President BOBO",
  },
  {
    quote:
      "L'oiseau sur le baobab ne doit pas oublier qu'il a porté des lunettes !",
    author: "President BOBO",
  },
  {
    quote:
      "Il est tombé comme du n'importe quoi, on dirait la girafe qui s'emmêle les pattes.",
    author: "President BOBO",
  },
];
// myQuotes.forEach((item, index, arr) => {
//   index = Math.floor(Math.random() * arr.length);
//   item = arr[index];
//   console.log(item);
// });
quoteGene.addEventListener("click", function () {
  i = Math.floor(Math.random() * myQuotes.length);
  quoteEl.innerHTML = `<h1>${myQuotes[i].quote}</h1>
        <p>- ${myQuotes[i].author}</p>`;
});
