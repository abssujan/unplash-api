const galleryApi = () => {
    const url = `https://api.unsplash.com/photos/?client_id=FT69P4qqFtte1G4gM9ybt4lnHaYOA5A-WIJmSAns1pI`;
    fetch(url)
    .then(res => res.json())
    .then(data => loadGalleryData(data))
}
const loadGalleryData = (images) => {
    console.log(images)
    const galleryDiv = document.getElementById('gallery');
    galleryDiv.innerHTML = ``;
    images.forEach(image => {
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
        <img class=" max-w-full rounded-lg" src="${image.urls.regular}" alt="">
        `;
        galleryDiv.appendChild(createDiv);
    })
}
galleryApi()
