let currentId = 0;

const createPlanet = ({ x, y, dx = 0, dy = 0, radius = 10 }) => {
  currentId += 1;
  return {
    id: `${currentId}`,
    x,
    y,
    dx,
    dy,
    radius,
  };
};

export const createGrid = () => {
  const planets = [];

  for (let x = 50; x < 500; x += 150) {
    for (let y = 50; y < 500; y += 150) {
      planets.push(createPlanet({ x, y }));
    }
  }

  return planets;
};
