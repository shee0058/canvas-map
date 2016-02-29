//AIzaSyAsGyqsoDIkQHJ2Libf6TyRn-ncx_ljdcU - API KEY
//https://maps.googleapis.com/maps/api/staticmap?center= &zoom=14&size=400x400 &key=

"use strict";

window.addEventListener("load", attemptPosition() );

function attemptPosition(){
    console.dir(navigator);
    
    if(navigator.geolocation){
        
        let params = {enableHighAccuracy:true, timeout: 30000, maximumAge: 0};
        navigator.geolocation.getCurrentPosition(gotPosition, FailedPosition, params);
        
    }else{
        alert("zzz");
    }
}
function gotPosition(position){
    var apiKey = "AIzaSyAsGyqsoDIkQHJ2Libf6TyRn-ncx_ljdcU";
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&markers=color:blue%7Clabel:S%7C" + latitude + "," + longitude + "&zoom=14&size=400x400&key=" + apiKey;
    
    var output = document.createElement("p");
    document.querySelector("body").appendChild(output);
    
    var canvas = document.createElement("canvas");
    var context = canvas.getContext('2d');
    document.querySelector("body").appendChild(canvas);
    canvas.width = 400;
    canvas.height = 400;
    
    var imageObj = new Image();
    imageObj.onload = function(){
        context.drawImage(imageObj,0 ,0);
    }
    imageObj.src = url;
    
    output.innerHTML += "Latitude: " + position.coords.latitude + "</br>";
    output.innerHTML += "Longitude: " + position.coords.longitude + "</br>";
}

function FailedPosition(err){
    //this runs when the geolocation fails
    alert("Could not get your position");
}
