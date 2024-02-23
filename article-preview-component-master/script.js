const shareBtn = document.querySelector(".shareBtn");
const profileinfo = document.querySelector(".profile_info");

const social_container = document.querySelector(".social_container");

let socialVisible = false;
shareBtn.addEventListener("click", function () {
  socialVisible = !socialVisible;

  if (socialVisible) {
    profileinfo.style.display = "flex";
    social_container.style.display = "none";
    social_container.style.visibility = "hidden";
  } else {
    profileinfo.style.display = "none";
    social_container.style.display = "flex";
    social_container.style.visibility = "visible";
  }
});
