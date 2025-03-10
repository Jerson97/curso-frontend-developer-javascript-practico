const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const mobilMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu() {
    const isDesktopMenuClose = shoppingCartContainer.classList.contains('inactive');

    if (!isDesktopMenuClose) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobilMenu.classList.toggle('inactive');
}

function toggleCarAside() {
    const isMobileMenuClosed = mobilMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobilMenu.classList.add('inactive');
    } else if (!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pantalla',
    price: 202,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/


function renderproducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} ->product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderproducts(productList);