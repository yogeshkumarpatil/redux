import { createAction } from '@reduxjs/toolkit';

export const updateStatus = createAction('UPDATE_STATUS');

export const fetchName = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await res.json();
      dispatch({ type: 'UPDATE_NAME', payload: result[0].name });
    } catch (error) {      
      console.error('Error fetching data:', error);
    }
  };
};



//code that use in video
// import {createAction} from '@reduxjs/toolkit'
// export const updateStatus = createAction('UPDATE_STATUS')


// export const fetchName = () =>{
//     return asnyc (dispatch) => {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         const result = await res.json()
//         dispatch({type: "UPDATE_NAME", payload: result[0].name})
//     }
// }


