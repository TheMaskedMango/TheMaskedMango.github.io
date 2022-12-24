var counter

function count() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/themaskedmango.github.io/websiteVisits");
    xhr.responseType = "json";
    xhr.onload = function() {
        // document.getElementById('visits').innerText = this.response.value;
    }
    xhr.send();
}

function getCount(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/get/themaskedmango.github.io/websiteVisits");
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
fetch("http://ip-api.com/json", requestOptions)
.then(function(response) { return response.json(); })
.then(function(json) {
  document.querySelector("#city").textContent = json.city;
  document.querySelector("#ip").textContent = json.query;
  document.querySelector("#lat").textContent = json.lat;
  document.querySelector("#long").textContent = json.lon;
  document.querySelector("#isp").textContent = json.isp;
  console.log(json);
});