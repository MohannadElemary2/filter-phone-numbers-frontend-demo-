import axios from 'axios';

export const getProducts = (params) => async (dispatch) => {

    axios.get(`http://jumia.test/api/v1/customers`, {
        params: params
    })
      .then(res => {
          dispatch({
            type: "customers/getCustomers",
            payload: res.data,
        });    
      });
};
