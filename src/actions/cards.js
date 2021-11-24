import * as api from '../api/index';

export const getCards = () => async(dispatch) => {
    try {
        const {data} = await api.fetchCards();
        console.log(data.saved);

        dispatch({type: "FETCH_ALL",payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createCard = (card) => async(dispatch) => {
    try {
        const {data} = await api.createCard(card);

        if(data.statusCode==422){

        } else {
            dispatch({type: "CREATE", payload: data});
        }  
    } catch (error) {
        console.log(error + "err");
    }
}

export const deleteCard = (id) => async (dispatch) => {
    try {
      await await api.deleteCard(id);
  
      dispatch({ type: "DELETE", payload: id });
    } catch (error) {
      console.log(error);
    }
  };
