import React from 'react';
import './Topbar.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import { Link } from 'react-router-dom';
import { noAvatar } from '../../api/urlApi';

function Topbar() {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className="topbar">
            <div className="topbar-left">
                <Link to="/" className="">
                    <div className="topbar-left-text">
                        <h1 title="CitizenV">CV</h1>
                    </div>
                </Link>
            </div>
            <div className="topbar-center">
                <div className="topbar-center-input">
                    <div className="topbar-center-inputSearch">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Tìm kiếm bài báo..." />
                    </div>
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-right-info">
                    <div className="topbar-right-img">
                        <img src={noAvatar} alt="avatar" />
                    </div>
                    <div className="topbar-menu">
                        <Link to="/profile" className="topbar-item topbar-profile">
                            <i className="fas fa-id-card-alt"></i>
                            <span>Thông tin cá nhân</span>
                        </Link>
                        <Link to="/witerpost" className="topbar-item topbar-blog">
                            <i className="fas fa-marker"></i>
                            <span>Viết báo</span>
                        </Link>
                        <Link to="/saved"className="topbar-item topbar-saved">
                            <i className="fas fa-save"></i>
                            <span>Bài viết đã lưu</span>
                        </Link>
                        <Link to="/work" className="topbar-item topbar-worker">
                            <i className="fas fa-th-list"></i>
                            <span>Công việc</span>
                        </Link>
                        <div className="topbar-item topbar-logout" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Đăng xuất</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
