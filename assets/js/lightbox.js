/* ====================== LIGHTBOX ====================== */
const productItems = document.querySelectorAll('.product__img'),
    totalProductItems = productItems.length,
    lightbox = document.querySelector('.lightbox'),
    lightboxImg = lightbox.querySelector('.lightbox__img'),
    lightboxClose = lightbox.querySelector('.lightbox__close'),
    lightboxCounter = lightbox.querySelector('.caption__counter');
let itemIndex = 0;
for(let i=0; i<totalProductItems; i++){
    productItems[i].addEventListener('click', function(){
        itemIndex = i;
        changeItem()
        toggleLightbox()
        changeLightboxCounter()
    })
}


function changeItem(){
    let imgSrc = productItems[itemIndex].querySelector('.product__img img').getAttribute('src')
    lightboxImg.setAttribute('src', imgSrc)    
}

function toggleLightbox(){
    lightbox.classList.toggle('open')
}

function changeLightboxCounter(){
    lightboxCounter.innerHTML = ( (itemIndex + 1) + " of "+ totalProductItems )
}


// close lightbox
lightbox.addEventListener('click', function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox()
    }
})

lightboxClose.addEventListener('click',function(){
    lightbox.classList.remove('open')
})

document.body.addEventListener('keydown', function(e){
    if(e.key=="Escape")
    {
        lightbox.classList.remove('open')
    }
})



function prevItem(){
    if(itemIndex > 0)
    {
        itemIndex--
    }else{
        itemIndex = 3
    }
    changeItem()
    changeLightboxCounter()
}
function nextItem(){
    if(itemIndex < totalProductItems-1)
    {
        itemIndex++
    }else{
        itemIndex = 0
    }
    changeItem()
    changeLightboxCounter()
}


