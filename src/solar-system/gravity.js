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

const forceMultiplier = 1;

const gravityReversalThreshold = 60;

const calculateForce = (p1, p2, distance) => {
  const isWithinRepulsionThreshold = distance < gravityReversalThreshold;
  const force = (p1.radius * p2.radius * forceMultiplier) / (distance * distance);
  return isWithinRepulsionThreshold ? -force : force;
};

const minX = 0;
const maxX = 600;
const minY = 0;
const maxY = 600;

export default (planets) => {
  const newPlanets = planets.map(planet => ({ ...planet }));
  forEachPair(newPlanets, (p1, p2) => {
    const distance = distanceBetween(p1, p2);
    const force = calculateForce(p1, p2, distance);
    const deltaX = p1.x > p2.x ? -force : force;
    const deltaY = p1.y > p2.y ? -force : force;

    p1.dx += deltaX; // eslint-disable-line
    p1.dy += deltaY; // eslint-disable-line

    if (p1.x < minX || p1.x > maxX) {
      p1.dx = -p1.dx;
    }
    if (p1.y < minY || p1.y > maxY) {
      p1.dy = -p1.dy;
    }

    p1.x += p1.dx; // eslint-disable-line
    p1.y += p1.dy; // eslint-disable-line
  });
  return newPlanets;
};
