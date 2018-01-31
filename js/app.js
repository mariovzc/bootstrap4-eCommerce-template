const elements = [
  {
    name: 'Todos',
    value: 100
  },
  {
    name: 'Hombre',
    value: 4
  },
  {
    name: 'Mujer',
    value: 12
  },
  {
    name: 'Hipster',
    value: 24
  },
  {
    name: 'Metal',
    value: 6
  },
  {
    name: 'Universidad',
    value: 5
  },
  {
    name: 'Deportiva',
    value: 8
  },
  {
    name: 'Rayas',
    value: 11
  },
  {
    name: 'Apretada',
    value: 19
  }
]

function displayCategoriesList (categories) {
  let html = ''
  categories.forEach((category, index) => {
    let isActive = index === 0 ? 'active' : ''
    html += `
      <a href="javascript:void(0)" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ${isActive} ">
        ${category.name}
        <span class="badge badge-secondary badge-pill">${category.value}</span>
      </a>
    `
  })  
  document.getElementById('elements').innerHTML = html
}
displayCategoriesList(elements)
