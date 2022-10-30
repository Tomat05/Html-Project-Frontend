let width = document.documentElement.clientWidth;

let layer0 = document.getElementById('l0');
let layer1 = document.getElementById('l1');
let layer2 = document.getElementById('l2');
let layer3 = document.getElementById('l3');
let layer4 = document.getElementById('l4');
let titles = document.getElementsByClassName('title');

let containers = document.getElementsByClassName('content');

// Fade panels in
function fadeIn(container) {
    let duration = 0.3;
    let interval = 5; //ms
    let op = 0;
    let iop = 1;
    let timer = setInterval(function() {
        if (op >= iop) {
            op = iop;
            clearInterval(timer)
        }
        container.style.opacity = op;
        op += iop/((1000 / interval) * duration)
    }, interval)
}

// Array of whether each panel is fading
let fading = []
for (let i = 0; i < containers.length; i++) {
    fading[i] = false;
}

let page = 0;
numPages = 2;

// Scroll stuff
window.addEventListener('scroll', function() {
    let scroll = window.scrollX;;

    layer1.style.left = scroll - (scroll / 32) + 'px';
    layer2.style.left = scroll - (scroll / 16) + 'px';
    layer3.style.left = scroll - (scroll / 8) + 'px';
    layer4.style.left = scroll - (scroll / 4) + 'px';

    for (let i = 0; i < containers.length; i++) {
        let bound = containers[i].getBoundingClientRect();

        if (bound.right <= width && !fading[i] && (page - 1) == i) {
            fading[i] = true;
            fadeIn(containers[i]);
        // } else if (bound.left >= width) {
        //     // fading[i] = false;
        //     containers[i].style.opacity = 0;
        // }
        // console.log(fading[i]);
        }
    }
});

// Change backgrounds on refresh for *spice*
function pic() {
    let seasons = ["spring", "summer", "autumn", "winter"];
    
    // let season = seasons[Math.floor(Math.random()*seasons.length)];
    let season = 'autumn';

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
            break
    
        default:
            break;
    }
}

pic();