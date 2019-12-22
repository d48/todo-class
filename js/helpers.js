const listBuilder = ({ fn, list }) => {
  let listElement = document.createElement('ul');
  let listHTML = list.length > 0
    ? list.reduce((acc, currValue) => {
      return acc += fn(currValue);
    }, '')
    : '';

  listElement.innerHTML = listHTML;
  return listElement;
};

export default listBuilder;
