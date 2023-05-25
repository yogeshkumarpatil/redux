import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {updateStatus} from '../reducers/actions'

function Profile() {
    const {name, age, status} = useSelector((state) => state);

    const dispatch = useDispatch()

    const updateAge = (age) =>{
        dispatch({type: 'UPDATE_AGE', payload: age })
    }
    const updateName = (name) =>{
        dispatch({type:'UPDATE_NAME',payload: name})
    }
    const changeStatus = (status) =>{
        dispatch(updateStatus(status))
    }

    return (
        <div>
            <h2>i am = {name} </h2>
            <h2>My age is = {age} </h2>
            <h2>i am a = {status} </h2>
          <button onClick = {() => updateAge(40)}>Update Age</button>
          <button onClick = {() => updateName("Suresh")}>Update Name</button>
          <button onClick = {() => changeStatus("Single")}>Update Status</button>
        </div>
    );
}

export default Profile;
