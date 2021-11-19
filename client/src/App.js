import './App.css';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { useEffect } from 'react';
import { getUser } from './redux/actions/authAction';

function App() {

    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();
    
    // mỗi lần reload trang WEB gọi API lấy thông tin user
    useEffect(() => {
        if (auth.accessToken) {
            dispatch(getUser(auth.accessToken));
        }
    }, [dispatch, auth.accessToken])


    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" exact element={ !auth.accessToken ? <Login /> : <Navigate to="/" /> } />
                    <Route path="/register" exact element={ !auth.accessToken ? <Register /> : <Navigate to="/" /> } />
                    <Route path="/" exact element={ auth.accessToken ? <Home /> : <Navigate to="/login" /> } />
                    <Route path="*" exact element={ auth.accessToken ? <PageNotFound /> : <Navigate to="/login" /> } />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
