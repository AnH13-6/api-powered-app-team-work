export default function mortysFunction () {

const apiUrls = ["https://rickandmortyapi.com/api/character/?name=morty", "https://rickandmortyapi.com/api/character/?page=2&name=morty ", "https://rickandmortyapi.com/api/character/?page=3&name=morty ", "https://rickandmortyapi.com/api/character/?page=4&name=morty "];

apiUrls.forEach(apiUrl => {
fetchMortys(apiUrl);
async function fetchMortys(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    createMortyList(data.results);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
})

function createMortyList(mortys) {
  const listElement = document.createElement('ul');
  listElement.className = '';
  document.body.append(listElement);

  mortys.forEach(({ image, name, status }) => {
    const item = document.createElement('li');
    item.innerHTML = `
    <h2>${name}</h2>
    <img src=${image}>
    <p>Status = ${status}</p>
    `;
    item.className = "Card Card__Morty";
    listElement.append(item);
  });
}
}

