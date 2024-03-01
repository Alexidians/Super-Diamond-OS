LogWriteInfo("Starting Task: system/process/geolocation.js")
logWriteInfo("Initalizing Coordinate updater")
function updateCoords() {
  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted") {
     navigator.geolocation.getCurrentPosition(function(position) {
      Latitude = position.coords.latitude;
      Longitude = position.coords.longitude;
     });
    } else if (result.state === "prompt") {
      Latitute = "ERROR: None Perm Answer"
      Longtitute = "ERROR: None Perm Answer"
    } else if (result.state === "denied") {
     Latitute = "ERROR: Non Perms"
     Longtitute = "ERROR: Non Perms"
    }
  });
}
logWriteInfo("Coordinate updater initalized")
logWriteInfo("initalizing automatic coordinate updater")
setInterval(updateCoords, 0)
logWriteInfo("automatic coordinate updater initalized")
