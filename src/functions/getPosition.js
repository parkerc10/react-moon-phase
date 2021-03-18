const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, err => {
      alert(`${err.message}: Please enable location services for your browser`);
    });
  });
};

let latitude, longitude;
const getCoords = async function () {
  try {
    const pos = await getPosition();
    latitude = pos.coords.latitude;
    longitude = pos.coords.longitude;
  } catch (err) {
    console.error(err);
  }
};
getCoords();

export { latitude, longitude };
