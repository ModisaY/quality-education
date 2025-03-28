// Getting references to HTML elements.
const closeBtn = document.getElementById("close-btn");
const imagePreviewWrapper = document.getElementById("image-preview-wrapper");
const imagePreview = document.getElementById("image-preview").querySelector("img");
const previewDetails = document.getElementById("preview-details");
const gallery = document.getElementById("gallery");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

const image = document.getElementById("img");

const details = document.getElementById("preview-details");

// insialize current image index
let currentImageIndex = 0;

// Array to contain image data
var images = [
  { id: 1, url: "images/img1.jpg", title: "Quality Education", desc: "Quality education is a fundamental goal that ensures inclusive and equitable learning opportunities for all." },
  { id: 2, url: "images/img2.jpg", title: "Library Facilities", desc: "Libraries play a vital role in students life to develop critical thinking,fostering literacy and research skills. libraries should provide a diverse collection of resources, including books, e-books, audiobooks, and digital databases, to support various learning styles and interests. " },
  { id: 3, url: "images/img3.jpg", title: "Sports", desc: "Sports are essential to education as they promote physical health,teach teamwork and disipline,Develop confidence and foster social relationship among students." },
  { id: 4, url: "images/img4.jpg", title: "Environment", desc: "The educational environment in schools have to be inclusive supportive and conducive to learning.Classrooms should be comfortable and safe facilities and resources to meet diffrent learning styles and needs." },
  { id: 5, url: "images/img5.jpg", title: "Technology", desc: "Providing access to new technology in underprivileged schools is crucial for creating equal educational opportunities. By providing resources such as computers,tablets, and internet connectivity, these schools can reduce digital divide and provide  students with opportunities for enhanced learning experiences." },
  { id: 6, url: "images/img6.jpg", title: "Unity", desc: "Unity in learning plays a major role in shaping the quality of education.Its promotes collobaration among educators,parents,students and communities to enhance education quality.This collective effort leads to academic achievement, personal growth and holistic development." },
  { id: 7, url: "images/img9.jpg", title: "underprivileged Schools", desc: "Underprivileged schools struggles withproviding quality education due to limited resources,funding ,facilities, and qualified teachers.By addressing these inequities, underprivileged schools can provide a quality education that enables students to succeed academically and gain opportunities beyond their circumstances." },
  { id: 8, url: "images/img8.jpg", title: "Higher Education", desc: "By ensure equal access for all students to affordable technical,vocational and higher education boosts the quality of education by giving more  individuals to gain advanced skills and knowledge, thereby enhancing opportunities for their personal and professional development. " },
];

// Event listner for close button
closeBtn.addEventListener("click", () => {
  details.style.display = "none";
  imagePreviewWrapper.style.display = "none";
});

// Function to add items (images) to the gallery
function addImg(item) {
  let galleryCard = document.createElement("div");
  galleryCard.classList.add("gallery-card");
  galleryCard.dataset.id = item.id;

  // HTML  structure for each gallery card
  galleryCard.innerHTML = `
        <img src="${item.url}" class="gallery-card-img" />
        <div class="details">
            <h1>${item.title}</h1>
            <h2>${item.desc}</h2>
        </div>
    `;
  // Event listner for display image preview when image clicked 
  galleryCard.addEventListener("click", () => {
    displayImagePreview(item.url, item.title, item.desc); // Pass title and desc
  });
  
  // Append gallery card to the gallery
  gallery.appendChild(galleryCard);
}

// Looping through images array to add them to the gallery
images.forEach((item) => {
  addImg(item);
});

//  Event listner for back button
backBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  displayImagePreview(images[currentImageIndex].url, images[currentImageIndex].title, images[currentImageIndex].desc); // Pass title and desc
});

nextBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  currentImageIndex = (currentImageIndex + 1) % images.length;
  displayImagePreview(images[currentImageIndex].url, images[currentImageIndex].title, images[currentImageIndex].desc); // Pass title and desc
});

// Function to display image preview
function displayImagePreview(imageUrl, title, desc) {
  console.log("Title:", title);
  console.log("Description:", desc);

  // Updating image source and the details
  imagePreview.src = imageUrl;
  imagePreviewWrapper.style.display = "flex";

  previewDetails.querySelector("h1").textContent = title;
  previewDetails.querySelector("h2").textContent = desc;
}


// Event listener to display preview details on mouseleave
document.getElementById("image-wrapper").addEventListener("mouseover", () => {
  details.style.display = "block";
});

// Event listener to hide preview details on mouseleave
document.getElementById("image-wrapper").addEventListener("mouseleave", () => {
  details.style.display = "none";
});

// to navigate through images using mouse wheel , used event listeners
imagePreviewWrapper.addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  } else {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  displayImagePreview(images[currentImageIndex].url, images[currentImageIndex].title, images[currentImageIndex].desc); // Pass title and desc
});

// Event listener to close preview image when clicked outside of the image.
imagePreviewWrapper.addEventListener("click", (event) => {
  if (!imagePreview.contains(event.target)) {
    imagePreviewWrapper.style.display = "none";
  }
});
