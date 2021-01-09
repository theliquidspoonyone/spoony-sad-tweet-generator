export function getRandomIntBetween(min, max) {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (flooredMax - ceiledMin) + ceiledMin);
}
