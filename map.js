Mapscript.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDI1Bt5fcHnAeU5hc1Q6yswi6qwe3N0P3w&callback=initMap&v=weekly";
Mapscript.async = true;

document.body.appendChild(Mapscript);
//

const initMap = () => {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "99f215073d577b09",
    center: { lat: 48.85, lng: 2.35 },
    zoom: 12,
  });
};
