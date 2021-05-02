// variables
const submitBtn = document.querySelector(".get-bpi");
const currencyList = document.querySelector(".get-currency");
const listItemUIUS = document.querySelector(".list-item-us");
const listItemUIEUR = document.querySelector(".list-item-eur");
const listItemUIGBP = document.querySelector(".list-item-gbp");
let uiImage = document.createElement("img");
let dataListItemUS = document.querySelector(".usd-info");
let dataListItemEU = document.querySelector(".eur-info");
let dataListItemGB = document.querySelector(".gbp-info");

// event listener
submitBtn.addEventListener("click", getBpi);

// bpi function
function getBpi(e) {
  let selections = document.querySelector("#select-currency").value;
  //   console.log(selections);

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response.time.updated);

      let updateTime = response.time.updated;
      const usdData = response.bpi.USD;
      const eurData = response.bpi.EUR;
      const gbpData = response.bpi.GBP;

      let updateDate = document.querySelector(".update");
      updateDate.textContent = updateTime;

      if (selections == "usd") {
        // console.log(usdData.rate);
        uiImage.setAttribute("src", "../img/usd.jpg");
        listItemUIUS.appendChild(uiImage);
        dataListItemUS.textContent = usdData.rate;
      } else if (selections == "eur") {
        uiImage.setAttribute("src", "../img/euro.jpg");
        listItemUIEUR.appendChild(uiImage);
        dataListItemEU.textContent = eurData.rate;
      } else if (selections == "gbp") {
        uiImage.setAttribute("src", "../img/gbp.jpg");
        listItemUIGBP.appendChild(uiImage);
        dataListItemGB.textContent = gbpData.rate;
      } else {
        console.log("error");
      }
    }
  };
  xhr.send();
  e.preventDefault();
}
