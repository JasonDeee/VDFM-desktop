const Map_Header = document.querySelector("#Map_Header");

const Mapscript = Map_Header.createElement("script");

Mapscript.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDI1Bt5fcHnAeU5hc1Q6yswi6qwe3N0P3w&callback=initMap&v=weekly";
Mapscript.async = true;

Map_Header.body.appendChild(Mapscript);
//

const initMap = () => {
  new google.maps.Map(document.getElementById("VDFM_map"), {
    mapId: "99f215073d577b09",
    center: { lat: 48.85, lng: 2.35 },
    zoom: 12,
  });
};
