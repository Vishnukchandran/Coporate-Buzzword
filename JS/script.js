const btnElement = document.getElementsByClassName("btn_custom")[0]; 
const buzzWord = document.getElementsByClassName("facts")[0];

const apiURL = "https://corporatebs-generator.sameerkumar.website/";


// Getting the data from API using a function with new promise.
function randomData() {
  return new Promise((resolve, reject) => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network was not okay");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
          buzzWord.innerText = data.phrase;
      })
      .catch((error) => {
        reject(error);
      });
  });
}

//addEventlistener
btnElement.addEventListener("click", function () {
    randomData();
});

