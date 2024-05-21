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

const findNearestAgency = (city, agencies) => {
  let nearestAgency = null
  let minDistance = Infinity
  agencies.forEach(agency => {
    const distance = haversineDistance(
      city.lat,
      city.lon,
      agency.lat,
      agency.lon
    )
    if (distance < minDistance) {
      minDistance = distance
      nearestAgency = agency
    }
  })
  return nearestAgency
}

// Sample data
const cities = [
  { name: 'Kigali', lat: -1.9706, lon: 30.1044 },
  { name: 'Musanze', lat: -1.5012, lon: 29.6329 },
  { name: 'Rubavu', lat: -1.6764, lon: 29.2214 }
]

const agencies = [
  { name: 'Agency A', lat: -1.945, lon: 30.0586 },
  { name: 'Agency B', lat: -1.4875, lon: 29.6142 },
  { name: 'Agency C', lat: -1.6743, lon: 29.2536 }
]

// Test the function
cities.forEach(city => {
  const nearestAgency = findNearestAgency(city, agencies)
  console.log(`The nearest agency to ${city.name} is ${nearestAgency.name}`)
})

console.log('jfdbf')
