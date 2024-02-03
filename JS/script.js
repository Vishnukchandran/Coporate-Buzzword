const btnElement = document.getElementsByClassName("btn_custom")[0]; 
const buzzWord = document.getElementsByClassName("facts")[0];

const apiURL = "https://corporatebs-generator.sameerkumar.website/";


// Getting the data from API using a function and promise was used here
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

//Calling the data using addEventlistener to browser window
btnElement.addEventListener("click", function () {
    randomData();
});

