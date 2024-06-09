const searchBar = document.getElementById("searchBar");
const resultsContainer = document.getElementById("results");

searchBar.addEventListener("input", function () {
  const query = searchBar.value;

  if (query.length > 3) {
    fetchResults(query);
  } else {
    resultsContainer.innerHTML = "";
  }
});

// function fetchResults(query) {
//   const url = `http://localhost:3000/api/${encodeURIComponent(query)}`;

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       displayResults(data);
//     })
//     .catch((error) => console.error("Error fetching results:", error));
// }

function fetchResults(query) {
  const url = `http://localhost:3000/api/search?query=${encodeURIComponent(query)}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayResults(data);
    })
    .catch((error) => console.error("Error fetching results:", error));
}

function displayResults(items) {
  resultsContainer.innerHTML = "";

  items.forEach((item) => {
    // console.log(item);
    console.log(item.image);

    const itemElement = document.createElement('div');
    itemElement.className = 'bg-white p-4 shadow rounded';

    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.alt = item.title;
    itemImage.className = 'w-full h-48 object-cover mb-4';

    const itemName = document.createElement('h2');
    itemName.className = 'text-lg font-bold mb-2';
    itemName.textContent = item.title;

    const itemPrice = document.createElement('p');
    itemPrice.className = 'text-gray-600';
    itemPrice.textContent = `$${item.price.toFixed(2)}`;

    itemElement.appendChild(itemImage);
    itemElement.appendChild(itemName);
    itemElement.appendChild(itemPrice);

    resultsContainer.appendChild(itemElement);
  });
}
