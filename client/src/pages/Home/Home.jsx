import React from 'react';
import "./Home.css";
import Topbar from '../../components/Topbar/Topbar';
// import Slider from 'react-slick';
import ListPost from '../../components/ListPost/ListPost';


function Home() {

    // const settings = {
    //     autoplay: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

    return (
        <div className="home">
            {/* <div className="home-slider">
                <div className="home-slider-content">
                    <Slider {...settings}>
                        <div className="home-slider-img">
                            <img src="https://i.ytimg.com/vi/TOgdues56tE/maxresdefault.jpg" alt="img" />
                        </div>
                        <div className="home-slider-img">
                            <img src="https://img.hoidap247.com/picture/answer/20191010/large_1570709516610.png" alt="img" />
                        </div>
                        <div className="home-slider-img">
                            <img src="https://i.ytimg.com/vi/AgibziVdNfc/maxresdefault.jpg" alt="img" />
                        </div>
                        <div className="home-slider-img">
                            <img src="https://media.thethaovanhoa.vn/Upload/3uPkfvAxvuOpUQrmKeiDaA/files/2019/07/A/29/danso_top.jpg" alt="img" />
                        </div>
                        <div className="home-slider-img">
                            <img src="https://honghunghospital.com.vn/wp-content/uploads/2021/07/ng%C3%A0y-dna6-s%E1%BB%91.jpg" alt="img" />
                        </div>
                    </Slider>
                </div>
            </div> */}

            <div className="home-news">
                <h1>Tin tức</h1>
                <div className="home-news-content">
                    <div className="home-news-menu">
                        <div className="home-news-item">
                            <span title="Tin tức đăng gần đây">Mới nhất</span>
                        </div>
                        <div className="home-news-item">
                            <span title="Tin tức được nhiều người xem nhất">Hot nhất</span>
                        </div>
                        <div className="home-news-item">
                            <span title="Tin tức liên quan đến địa phương của bạn">Liên quan nhất</span>
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
