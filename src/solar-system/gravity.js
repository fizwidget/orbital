const square = x => x * x;

const distanceBetween = (p1, p2) =>
  Math.sqrt(square(p2.x - p1.x) + square(p2.y - p1.y));

const forEachPair = (items, callback) => {
  items.forEach(a =>
    items.forEach((b) => {
      if (a !== b) {
        callback(a, b);
      }
    }),
  );
};

const forceMultiplier = 2.5;

const calculateForce = (p1, p2, distance) => {
  const isWithinRepulsionThreshold = distance < 40;
  const force = (p1.radius * p2.radius * forceMultiplier) / (distance * distance);
  return isWithinRepulsionThreshold ? -force : force;
};

export default (planets) => {
  const newPlanets = [];
  forEachPair(planets, (p1, p2) => {
    const distance = distanceBetween(p1, p2);
    const force = calculateForce(p1, p2, distance);
    const deltaX = p1.x > p2.x ? -force : force;
    const deltaY = p1.y > p2.y ? -force : force;

    const newPlanet = { ...p1 };
    newPlanet.dx += deltaX;
    newPlanet.dy += deltaY;
    newPlanet.x += newPlanet.dx;
    newPlanet.y += newPlanet.dy;

    newPlanets.push(newPlanet);
  });
  return newPlanets;
};
