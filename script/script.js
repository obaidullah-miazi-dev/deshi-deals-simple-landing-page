// function to get id
function getId(id) {
    return document.getElementById(id);

}

const cartBtn = document.getElementsByClassName('cart-btn')

getId('product-box').addEventListener('click', function (e) {
    const cartBtn = e.target
    if (e.target.className.includes('cart-btn')) {
        const productImg = cartBtn.parentNode.parentNode.parentNode.children[0].children[0].children[0].src;

        const productTitle = cartBtn.parentNode.parentNode.children[0].innerText;

        const productPrice = cartBtn.parentNode.parentNode.children[2].children[0].innerText;

        const totalPrice = getId('total-price').innerText;

        const currentPrice = Number(productPrice) + Number(totalPrice);

        getId('total-price').innerText = currentPrice;

        const totalQuantity = getId('total-quantity').innerText;

        const currentQuantity = Number(totalQuantity) + 1;

        getId('total-quantity').innerText = currentQuantity;

        const cartContainer = getId('cart-container');

        const newCart = document.createElement('div')
        newCart.innerHTML = `
        <div class="flex justify-between bg-[#F4F1F1] p-2 items-center md:pr-4 rounded-lg mb-5">
                            <img class="md:w-[80px] w-[60px]" src="${productImg}" alt="">
                            <div>
                                <h3 class="font-semibold">${productTitle}</h3>
                                <p>${productPrice} Tk</p>
                            </div>
                        </div>

        `

        cartContainer.append(newCart);
    }
})





//-------------------------------------------------------------------------------------------------------------------------

// another way

// for (const btn of cartBtn) {
//     btn.addEventListener('click', function () {
//         const productImg = btn.parentNode.parentNode.parentNode.children[0].children[0].children[0].src;

//         const productTitle = btn.parentNode.parentNode.children[0].innerText;

//         const productPrice = btn.parentNode.parentNode.children[2].children[0].innerText;

//         const totalPrice = getId('total-price').innerText;

//         const currentPrice = Number(productPrice) + Number(totalPrice);

//         getId('total-price').innerText = currentPrice;

//         const totalQuantity = getId('total-quantity').innerText;

//         const currentQuantity = Number(totalQuantity) + 1;

//         getId('total-quantity').innerText = currentQuantity;

//         const cartContainer = getId('cart-container');

//         const newCart = document.createElement('div')
//         newCart.innerHTML = `
//         <div class="flex justify-between bg-[#F4F1F1] p-2 items-center pr-4 rounded-lg mb-5">
//                             <img class="w-[80px]" src="${productImg}" alt="">
//                             <div>
//                                 <h3 class="font-semibold">${productTitle}</h3>
//                                 <p>${productPrice} Tk</p>
//                             </div>
//                         </div>

//         `

//         cartContainer.append(newCart);
//     })
// }