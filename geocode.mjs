  function formatLocation(place) {
    return `${place.coordinates.lat}, ${place.coordinates.lng}`;   
  }
  export function mapPins(places) {
    return places.map((p) => `${p.name}: ${formatLocation(p)}`).join("\n");
  }
  setTimeout(() => console.log(mapPins([
    { name: "HQ", coordinates: { lat: 37.77, lng: -122.41 } },
    { name: "Remote Site" },                                 
  ])), 400);
