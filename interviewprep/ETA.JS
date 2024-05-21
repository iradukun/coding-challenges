function calculateETA(route, averageSpeed) {
    const ETAs = [];
    let currentTime = new Date().getTime();
    for (let i = 0; i < route.length - 1; i++) {
        const distance = haversineDistance(route[i].lat, route[i].lon, route[i + 1].lat, route[i + 1].lon);
        const time = distance / averageSpeed * 60 * 60 * 1000; // Convert hours to milliseconds
        currentTime += time;
        ETAs.push(new Date(currentTime));
    }
    return ETAs;
}
