let vpHeight = document.documentElement.clientHeight;

let layer1 = document.getElementById('l1');
let layer2 = document.getElementById('l2');
let layer3 = document.getElementById('l3');

window.addEventListener('scroll', function() {
    let scroll = window.scrollX;

    layer1.style.left = scroll - (scroll / 8) + 'px';
    layer2.style.left = scroll - (scroll / 4) + 'px';
    layer3.style.left = scroll - (scroll / 2) + 'px';
});