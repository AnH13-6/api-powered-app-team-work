const apiUrls = ["https://rickandmortyapi.com/api/character/?name=rick", "https://rickandmortyapi.com/api/character/?page=2&name=rick", "https://rickandmortyapi.com/api/character/?page=3&name=rick", "https://rickandmortyapi.com/api/character/?page=4&name=rick", "https://rickandmortyapi.com/api/character/?page=5&name=rick", "https://rickandmortyapi.com/api/character/?page=6&name=rick"];

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

function createMortyList(ricks) {
  const listElement = document.createElement('ul');
  listElement.className = '';
  document.body.append(listElement);

  ricks.forEach(({ image, name, status }) => {
    const item = document.createElement('li class="Card" "Card__Morty"');
    item.innerHTML = `
    <h2>${name}</h2>
    <img src=${image}>
    <p>Status = ${status}</p>
    `;
    listElement.append(item);
  });
}
