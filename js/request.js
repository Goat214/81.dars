// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");

const getData = (resourse) => {
  return new Promise((resolve, rejects) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        console.log("loading !");
      } else if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        console.log(data.results);
      } else if (request.readyState == 4) {
        console.log("Error ");
      }
    });
    request.open("GET", resourse);
    request.send();
  });
};
getData(API);
