function success(pos) {
    var coordinates = pos.coords;

    console.log(`Latitude: ${coordinates.latitude}`);
    console.log(`Longitude: ${coordinates.longitude}`);
    console.log(`Accuracy: ${coordinates.accuracy} meters.`);
    
    document.getElementById("demo").innerHTML = `Latitude: ${coordinates.latitude} \n Longitude: ${coordinates.longitude} \n Accuracy: ${coordinates.accuracy} meters.`

    return pos.coords;
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}


navigator.geolocation.getCurrentPosition(success, error);