let vpHeight = document.documentElement.clientHeight;

let layer0 = document.getElementById('l0');
let layer1 = document.getElementById('l1');
let layer2 = document.getElementById('l2');
let layer3 = document.getElementById('l3');
let layer4 = document.getElementById('l4');
let titles = document.getElementsByClassName('title');


window.addEventListener('scroll', function() {
    let scroll = window.scrollX;

    layer1.style.left = scroll - (scroll / 32) + 'px';
    layer2.style.left = scroll - (scroll / 16) + 'px';
    layer3.style.left = scroll - (scroll / 8) + 'px';
    layer4.style.left = scroll - (scroll / 4) + 'px';
});

function pic() {
    let seasons = ["spring", "summer", "autumn", "winter"];
    
    let season = seasons[Math.floor(Math.random()*seasons.length)];
    // let season = 'winter';

    layer1.style.background = "url(img/" + season + "/layer1.png)";
    layer1.style.backgroundSize = 'auto 100vh';
    layer2.style.background = "url(img/" + season + "/layer2.png)";
    layer2.style.backgroundSize = 'auto 100vh';
    layer3.style.background = "url(img/" + season + "/layer3.png)";
    layer3.style.backgroundSize = 'auto 100vh';
    layer4.style.background = "url(img/" + season + "/trees.png)";
    layer4.style.backgroundSize = 'auto 100vh';

    switch (season) {
        case 'spring':
            layer0.style.background = '#48b0be';
            break;

        case 'autumn':
            layer0.style.background = '#CFCFEA';
            break;

        case 'winter':
            layer0.style.background = '#b5c2d3';
            // for (let i = 0; i < titles.length; i++) {
            //     titles[i].style.color = '#000';
            // }
            break
    
        default:
            // for (let i = 0; i < titles.length; i++) {
            //     titles[i].style.color = '#000';
            // }
            break;
    }
}

pic();