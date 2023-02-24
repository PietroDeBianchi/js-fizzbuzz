const containerDom = document.querySelector('.container');

for (let i = 1; i <= 0; i++) {
    const boxDom = '<div class="numberBox">${i}</div>';
    containerDom.innerHTML +=  boxDom;

}
