import { WIDTH, HEIGHT } from '../constants';

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

const forceMultiplier = 0.3;
const dragFactor = 1;

const calculateForce = (p1, p2, distance) => {
  const isWithinRepulsionThreshold = distance < ((p1.radius + p2.radius) * 2);
  const force = (p1.radius * p2.radius * forceMultiplier) / (distance * distance);
  return isWithinRepulsionThreshold ? -force : force;
};

const minX = 0;
const maxX = WIDTH;
const minY = 0;
const maxY = HEIGHT;

export default (planets) => {
  const newPlanets = planets.map(planet => ({ ...planet }));
  forEachPair(newPlanets, (p1, p2) => {
    const distance = distanceBetween(p1, p2);
    const force = calculateForce(p1, p2, distance);
    const deltaX = p1.x > p2.x ? -force : force;
    const deltaY = p1.y > p2.y ? -force : force;

    p1.dx += deltaX; // eslint-disable-line
    p1.dy += deltaY; // eslint-disable-line

    p1.dx *= dragFactor;
    p1.dy *= dragFactor;

    if (p1.x < minX || p1.x + p1.radius > maxX) {
      p1.dx = -p1.dx;
    }
    if (p1.y < minY || p1.y + (p1.radius * 2) > maxY) {
      p1.dy = -p1.dy;
    }

    p1.x += p1.dx; // eslint-disable-line
    p1.y += p1.dy; // eslint-disable-line
  });
  return newPlanets;
};
