const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const toRadians = degrees => {
    return (degrees * Math.PI) / 180
  }
  const R = 6371 // Radius of the Earth in km

  const dLat = toRadians(lat2 - lat1)
  const dLon = toRadians(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c // Distance in km
}

const optimizeRoute = stops => {
  const route = [stops[0]]
  const remainingStops = stops.slice(1)
  while (remainingStops.length) {
    let nearestStopIndex = 0
    let minDistance = Infinity
    for (let i = 0; i < remainingStops.length; i++) {
      const distance = haversineDistance(
        route[route.length - 1].lat,
        route[route.length - 1].lon,
        remainingStops[i].lat,
        remainingStops[i].lon
      )
      if (distance < minDistance) {
        minDistance = distance
        nearestStopIndex = i
      }
    }
    route.push(remainingStops.splice(nearestStopIndex, 1)[0])
  }
  return route
}

// Sample test
const stops = [
  { name: 'Stop 1', lat: 40.7128, lon: -74.006 }, // New York City
  { name: 'Stop 2', lat: 42.3601, lon: -71.0589 }, // Boston
  { name: 'Stop 3', lat: 39.9526, lon: -75.1652 }, // Philadelphia
  { name: 'Stop 4', lat: 38.9072, lon: -77.0369 } // Washington, D.C.
]

const optimizedRoute = optimizeRoute(stops)
optimizedRoute.forEach(stop => {
  console.log(stop.name)
})
