import React from "react";
import {useSelector, useDispatch} from "react-redux";

function Profile() {
    const {name, age, status} = useSelector((state) => {
        return state;
    });

    const dispatch = useDispatch()

    const updateAge = (age) =>{
        dispatch({type: 'UPDATE_AGE', payload: age })
    }

    return (
        <div>
            <h2>i am = {name} </h2>
            <h2>My age is = {age} </h2>
            <h2>i am a = {status} </h2>
          <button onClick = {() => updateAge(40)}>Update Age</button>
        </div>
    );
}

export default Profile;
