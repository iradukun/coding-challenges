const haversineDistance = (lat1, long1, lat2, long2) => {
  const toRadians = degrees => {
    return (degrees * Math.PI) / 180
  }
  const R = 6371 // radius of earth in km

  const dLat = toRadians(lat2 - lat1)
  const dLong = toRadians(long2 - long1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c //Distance in km;
}

const nycLat = 40.7128
const nycLon = -74.006
const londonLat = 51.5074
const londonLon = -0.1278

const distance = haversineDistance(nycLat, nycLon, londonLat, londonLon)
console.log(
  `Distance between New York City and London: ${distance.toFixed(2)} km`
)
