// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

const loaderTogel = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

const getData = (resourse) => {
  return new Promise((resolve, rejects) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        loaderTogel(true);
      } else if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        resolve(data.results);
        loaderTogel(false);
      } else if (request.readyState == 4) {
        rejects("Error ");
        loaderTogel(false);
      }
    });
    request.open("GET", resourse);
    request.send();
  });
};

const reload = () => {
  getData(API)
    .then((data) => {
      UpdateUi(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
document.addEventListener("DOMContentLoaded", reload);
