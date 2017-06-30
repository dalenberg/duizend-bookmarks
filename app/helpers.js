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


export const move = (array, from, to) => {
  if (to >= array.length) {
      var k = to - array.length;
      while ((k--) + 1) {
          array.push(undefined);
      }
  }
  array.splice(to, 0, array.splice(from, 1)[0]);
  return array;
};
