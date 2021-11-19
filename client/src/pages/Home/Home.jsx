import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Home.css";
import { logout } from '../../redux/actions/authAction';


function Home() {
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);

    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <div className="home">
            <h1>Home</h1>
            <p>Xin chào <b>{auth.user?.email}</b></p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home;
