var counter

function count() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/themaskedmango.github.io/9eecc73f-d9da-4f84-81e6-0b6bf33ce22d");
    xhr.responseType = "json";
    xhr.onload = function() {
        // document.getElementById('visits').innerText = this.response.value;
    }
    xhr.send();
}

function getCount(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/get/themaskedmango.github.io/9eecc73f-d9da-4f84-81e6-0b6bf33ce22d");
    xhr.responseType = "json";
    xhr.onload = function() {
        // document.getElementById('visits').innerText = this.response.value;
        console.log(this.response.value);
        document.querySelector("#visits").textContent = this.response.value;
    }
    xhr.send();
    
}




var requestOptions = {
    method: 'GET',
};
var json;
fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=e142098e9dde469cb76c3a8af5d2b1d8", requestOptions)
.then(function(response) { return response.json(); })
.then(function(json) {
  document.querySelector("#city").textContent = json.city.name;
  document.querySelector("#ip").textContent = json.ip;
  document.querySelector("#lat").textContent = json.location.latitude;
  document.querySelector("#long").textContent = json.location.longitude;
});