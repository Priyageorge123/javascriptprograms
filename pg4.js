//Update the value of a property in object
const updateObject = (obj, property, value) => {
    obj[propertyToBeUpdated] = value;
    return JSON.stringify(obj, null, 2);
  }