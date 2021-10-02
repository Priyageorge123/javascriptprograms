//Add an element to array
const addToList = (list, value) => {
    if (!list.includes(value)) {
      list.push(value);
    }
    return list;
  }
  