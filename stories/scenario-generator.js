let currentId = 0;

const generateColor = () => {
  const c = () => Math.round(Math.random() * 255);
  return `rgb(${c()}, ${c()}, ${c()})`;
};

const defaultRadius = 20;

const createPlanet = ({ x, y, dx = 0, dy = 0, radius = defaultRadius }) => {
  currentId += 1;
  return {
    id: `${currentId}`,
    x,
    y,
    dx,
    dy,
    radius,
    color: generateColor(),
  };
};

const distanceBetweenPlanets = 170;

export const createGrid = () => {
  const planets = [];

  for (let x = 50; x < 500; x += distanceBetweenPlanets) {
    for (let y = 50; y < 500; y += distanceBetweenPlanets) {
      planets.push(createPlanet({ x, y }));
    }
  }

  return planets;
};
