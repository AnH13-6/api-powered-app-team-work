export const apiUrl = 'https://rickandmortyapi.com/api/character/';

fetchRicks(apiUrl);
async function fetchRicks(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    createRickList(data.results);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

function createRickList(ricks) {
  const listElement = document.createElement('ul');
  listElement.className = '';
  document.body.append(listElement);

  rick.forEach(({ image, name }) => {
    const item = document.createElement('li');
    item.innerHTML = `
    <h2>${name}</h2>
    <img src=${image}
    `;
    listElement.append(item);
  });
}
