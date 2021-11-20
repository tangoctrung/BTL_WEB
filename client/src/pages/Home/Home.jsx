import React from 'react';
import "./Home.css";
import ListPost from '../../components/ListPost/ListPost';
import * as ACTIONS from "../../redux/constants/userContant";
import { useDispatch, useSelector } from 'react-redux';
import Topbar from '../../components/Topbar/Topbar';


function Home() {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state);

    const handleChangeArticleView = (s) => {
        dispatch({type: ACTIONS.ARTICLE_VIEW, payload: {
            articleView: s,
        }});
    }

    return (
        <div className="home">
            <div className="home-top">
                <Topbar />
            </div>
            <div className="home-news">
                <h1>Tin tức</h1>
                <div className="home-news-content">
                    <div className="home-news-menu">
                        <div className="home-news-item">
                            <span 
                                title="Tin tức đăng gần đây"
                                className={user.articleView==='1' ? "home-news-item-isActive" : ""}
                                onClick={() => handleChangeArticleView('1')}
                            >
                                Mới nhất
                            </span>
                        </div>
                        <div className="home-news-item">
                            <span 
                                title="Tin tức được nhiều người xem nhất"
                                className={user.articleView==='2' ? "home-news-item-isActive" : ""}
                                onClick={() => handleChangeArticleView('2')}
                            >
                                Hot nhất
                            </span>
                        </div>
                        <div className="home-news-item">
                            <span 
                                title="Tin tức liên quan đến địa phương của bạn"
                                className={user.articleView==='3' ? "home-news-item-isActive" : ""}
                                onClick={() => handleChangeArticleView('3')}
                            >
                                Liên quan nhất
                            </span>
                        </div>
                    </div>
                    <div className="home-news-listPost">
                        <ListPost />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
