// Initialize Variables

let img_html = '';
let searchField = document.getElementById('search-bar');
let picList = document.getElementsByTagName('a');

// Create map for picture titles

let picTitle = new Map([
  [1, 'Hay Bales'],
  [2, 'Lake'],
  [3, 'Canyon'],
  [4, 'Iceberg'],
  [5, 'Desert'],
  [6, 'Fall'],
  [7, 'Plantation'],
  [8, 'Dunes'],
  [9, 'Countryside Lane'],
  [10, 'Sunset'],
  [11, 'Cave'],
  [12, 'Bluebells'],
]);

// Add anchor and image tags to HTML

for (let i of picTitle) {
  img_html += `
        <a href="photos/${i[0]}.jpg" title="${i[1]}">
          <img src="photos/thumbnails/${i[0]}.jpg" alt="${i[1]}" />
        </a>`;
}

document.querySelector('div').innerHTML = img_html;

// Search filter function

function searchFilter() {
  for (let i = 0; i < picTitle.size; i++) {
    let searchInput = searchField.value.toLowerCase();
    let caption = picTitle.get(i + 1).toLowerCase();

    if (caption.includes(searchInput)) {
      picList[i].style.display = ``;
    } else {
      picList[i].style.display = `none`;
    }
  }
}

searchField.addEventListener('keyup', searchFilter);
