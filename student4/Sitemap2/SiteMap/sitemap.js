document.addEventListener("DOMContentLoaded", function () {
  var svgObject = document.getElementById("svg-object");

  svgObject.addEventListener("load", function () {
    var svgDoc = svgObject.contentDocument;

    var rects = svgDoc.querySelectorAll("rect");

    rects.forEach(function (rect) {
      rect.addEventListener("mouseenter", function () {
        this.setAttribute("fill", "#e6e6e6"); // Change fill color on hover
      });

      rect.addEventListener("mouseleave", function () {
        this.setAttribute("fill", "#B3B3B3"); // Change back to original color on mouse leave
      });
    });

    // Your existing click event listeners for buttons

    var profileBtn = svgDoc.getElementById("profile-btn");
    var splashBtn = svgDoc.getElementById("splash-screen-btn");
    var homeBtn = svgDoc.getElementById("home-btn");
    var sitemapBtn = svgDoc.getElementById("sitemap-btn");
    var feedbackBtn = svgDoc.getElementById("feedback-btn");
    var galleryBtn = svgDoc.getElementById("gallery-btn");
    var shopBtn = svgDoc.getElementById("shop-btn");
    var homeBtn2 = svgDoc.getElementById("home-btn2");
    var resourceBtn = svgDoc.getElementById("resources-btn");
    var benefitsBtn = svgDoc.getElementById("benefits-btn");
    var oppBtn = svgDoc.getElementById("oppurtunities-btn");
    var courseBtn = svgDoc.getElementById("course-btn");

    profileBtn.addEventListener("click", function () {
      window.location.href = "/student3/profile.html";
    });
    splashBtn.addEventListener("click", function () {
      window.location.href = "/student1/splashScreen.html";
    });
    homeBtn.addEventListener("click", function () {
      window.location.href = "/student2/home.html";
    });
    sitemapBtn.addEventListener("click", function () {
      window.location.href = "/student4/Sitemap2/SiteMap/sitemap.html";
    });
    feedbackBtn.addEventListener("click", function () {
      window.location.href = "/student2/feedback.html";
    });
    galleryBtn.addEventListener("click", function () {
      window.location.href = "/student4/gallery (2)/gallery/gallery.html";
    });
    shopBtn.addEventListener("click", function () {
      window.location.href = "/student1/shop.html";
    });
    homeBtn2.addEventListener("click", function () {
      window.location.href = "/student2/home.html";
    });
    resourceBtn.addEventListener("click", function () {
      window.location.href = "/student3/cotent.html";
    });
    benefitsBtn.addEventListener("click", function () {
      window.location.href = "/student4/contentPage/content.html";
    });
    oppBtn.addEventListener("click", function () {
      window.location.href = "/student1/contentPage/content.html";
    });
    courseBtn.addEventListener("click", function () {
      window.location.href = "/student2/contentPage/content.html";
    });
  });
});
