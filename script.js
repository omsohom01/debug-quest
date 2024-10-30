let challengesCompleted = 0;

function startWhispering() {
    setInterval(() => {
        console.log('Whispers in the void...');
    }, 1000);
}

function createMemory() {
    const memory = document.createElement('button');
    memory.innerHTML = 'Stored Memory';
    memory.addEventListener('click', () => {
        console.log('Memory accessed...');
    });
    document.body.appendChild(memory);
}

function jumpThroughTime() {
    setTimeout(() => {
        const futureElement = document.getElementById('future-message');
        if (futureElement) {
            futureElement.style.color = 'red';
            futureElement.innerHTML = "Welcome to the future!";
        }
    }, 1000);
}

function triggerFullScreenImage() {
    const image = document.createElement('img');
    image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bsodwindows10.png/1200px-Bsodwindows10.png'; 
    image.style.width = '100vw';
    image.style.height = '100vh';
    image.style.objectFit = 'cover';

    document.body.appendChild(image);
    image.requestFullscreen();

    image.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            image.remove();
        }
    });
}

document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Button clicked');
    });
});

const adImages = [
    'https://example.com/ad1.png',
    'https://example.com/ad2.png',
    'https://example.com/ad3.png'
];

function showPopupAd() {
    const randomImage = adImages[Math.floor(Math.random() * adImages.length)];
    const popupAd = document.getElementById('popup-ad');
    const popupImage = document.getElementById('popup-image');

    if (popupImage && popupAd) {
        popupImage.src = randomImage;
        popupAd.style.display = 'flex';
    }
}

function closePopup() {
    const popupAd = document.getElementById('popup-ad');
    if (popupAd) popupAd.style.display = 'none';
}

// Show popup ad every 15 seconds
setInterval(showPopupAd, 15000);
