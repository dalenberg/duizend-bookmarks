export const asArray = (object) => Object.keys(object).map((item) => object[item]);

export const appendToObject = (object, items) => {
  const newObject = Object.assign({}, object);

  items.forEach(item => {
    if (item.id === object[item.id]) {
      return;
    }

    newObject[item.id] = item;
  });

  return newObject;
};
