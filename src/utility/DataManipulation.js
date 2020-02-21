export const restoreCity = city => {
  let cityCopy = { ...city };
  if (cityCopy.housing !== undefined) {
    const greater = 2;
    cityCopy["housing"][greater] = undefined;
    cityCopy["costOfLiving"][greater] = undefined;
    cityCopy["travelConnectivity"][greater] = undefined;
    cityCopy["safety"][greater] = undefined;
    cityCopy["internetAccess"][greater] = undefined;
    cityCopy["environmentalQuality"][greater] = undefined;
    cityCopy["leisureAndCulture"][greater] = undefined;
    delete cityCopy.compared;
  }
  return cityCopy;
};
