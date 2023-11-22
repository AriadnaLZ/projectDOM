
const products = [
  {
    id: 1,
    name: 'Bexident Colutorio Encías Uso Diario',
    price: 9,
    seller: 'Bexident',
    tipe: 'colutorio',
    image: './assets/BexidentEnciasColutorio.jpg'
  },
  {
    id: 2,
    name: 'Bexident Colutorio Dientes Sensibles',
    price: 8,
    seller: 'Bexident',
    tipe: 'colutorio',
    image: './assets/bexidentesDientesSensiblesColutoio.jpg'
  },
  {
    id: 3,
    name: 'Vitis Pasta Dental Aloe Vera',
    price: 4,
    seller: 'Vitis',
    tipe: 'pasta',
    image: './assets/VitisPastaAloeVera.jpg'
  },
  {
    id: 4,
    name: 'Vitis Pasta Dental Encías',
    price: 7,
    seller: 'Vitis',
    tipe: 'pasta',
    image: './assets/VitisPastaEncias.png'
  },
  {
    id: 5,
    name: 'Vitis Pasta Dental Kids',
    price: 3,
    seller: 'Vitis',
    tipe: 'pasta',
    image: './assets/vitis-kids-pasta.jpg'
  },
  {
    id: 6,
    name: 'Sensodyne Pasta Dental Repara y Protege',
    price: 4,
    seller: 'Sensodyne',
    tipe: 'pasta',
    image: './assets/SensodynePastaRepara.jpg'
  },
  {
    id: 7,
    name: 'Sensodyne Colutorio Cool Mint',
    price: 5,
    seller: 'Sensodyne',
    tipe: 'colutorio',
    image: './assets/SensodyneColutorio.jpg'
  },
  {
    id: 8,
    name: 'Parodontax Pasta Dentífrica Complete Protection',
    price: 6,
    seller: 'Parodontax',
    tipe: 'pasta',
    image: './assets/ParodontaxPasta.jpg'
  },
  {
    id: 9,
    name: 'Parodontax Colutorio Complete Protection',
    price: 6,
    seller: 'Parodontax',
    tipe: 'colutorio',
    image: './assets/Parodontax-Complete-Protection-Colutorio-500-ml.jpg'
  },
  {
    id: 10,
    name: 'Parodontax Pasta Original',
    price: 5,
    seller: 'Parodontax',
    tipe: 'pasta',
    image: './assets/parodontax-original.jpg'
  },
];

const sellers = []

let seller = ''

let priceMax = ''

const boxFilters = document.querySelector('.box-filters')
const formFilters = document.createElement('form')
boxFilters.appendChild(formFilters)

const filterSeller = () => {
  const filtered = []
  for (const product of products) {
    if(seller === product.seller){
      filtered.push(product)
    }
  }
  printProducts(filtered)
}

const filterPrice = () => {
  const filtered = []
  for (const product of products) {
    if (product.price <= priceMax) {
      filtered.push(product)
    }
  }
  printProducts(filtered)
}



const introduceSeller = (products) => {

  sellers.splice(0);
  sellers.push('Todos los productos')
  for (const product  of products) {
    if (!sellers.includes(product.seller)) {
      sellers.push(product.seller)
    }
  }
  }

  

const selectSeller =  (sellers) => {
  const selectFilters = document.createElement('select')
  selectFilters.className = 'categoryFilter'
 
  for (const seller of sellers) {
    const option = document.createElement('option')
    option.value = seller
    option.textContent = seller
    selectFilters.appendChild(option)
  }
  formFilters.appendChild(selectFilters)
  selectFilters.addEventListener('change', (event) => {
    seller = event.target.value
    filterSeller()
    if (seller === 'Todos los productos') {
      printProducts(products)
    }
  })
}

const selectPriceMax = (products) => {
  const selectFilters = document.createElement('input')
  selectFilters.className = 'priceFilter'
  selectFilters.placeholder = 'Precio máximo'
  formFilters.appendChild(selectFilters)
  selectFilters.addEventListener('input', (event) => {
    priceMax = parseInt(event.target.value)
    filterPrice(products)
  })
}

const printProducts = (products) => {
  const sectionProducts = document.querySelector('.products')
  sectionProducts.innerHTML = ""
  
  for (const product of products) {
    const articleProduct = document.createElement('article')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h3')
    const price = document.createElement('p')
    const button = document.createElement('button')
    button.textContent = 'Añadir al carrito'
    articleProduct.classList.add('box-product')

    divImg.className = 'container-img'
    img.src = product.image
    name.textContent = product.name
    price.textContent = `Precio: ${product.price}€` 

    articleProduct.appendChild(divImg)
    divImg.appendChild(img)
    articleProduct.appendChild(name)
    articleProduct.appendChild(price)
    articleProduct.appendChild(button)
    sectionProducts.appendChild(articleProduct)
  }

}


const deleteFilters = () => {
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Limpiar filtros'
  deleteButton.type = 'reset'
  formFilters.appendChild(deleteButton)
  deleteButton.addEventListener('click', (event) => {
        // formFilters.reset();
        document.querySelector('.categoryFilter  > option').value = 'Todos los productos'
        document.getElementsByClassName('priceFilter').value = ' '
        printProducts(products)
  }) 
  
}


printProducts(products)
introduceSeller(products)
selectSeller(sellers)
selectPriceMax()
deleteFilters(products)

