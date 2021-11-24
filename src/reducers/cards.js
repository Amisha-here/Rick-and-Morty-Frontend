export default (cards = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...cards, action.payload];
    case "DELETE":
      return cards.filter((card) => card._id !== action.payload);
    default:
      return cards;
  }
};

