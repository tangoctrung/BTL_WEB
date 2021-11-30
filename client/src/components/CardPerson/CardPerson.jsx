import React from 'react';
import './CardPerson.css';

function CardPerson() {
    return (
        <div className="cardPerson">
            <div className="cardPerson-img">
                <img src="https://i.pinimg.com/474x/23/7f/51/237f51c86475553f36d2037a11fb997e.jpg" alt="avatar" />
            </div>
            <div className="cardPerson-info">
                <h4>Tạ Ngọc Trung</h4>
                <p>20 tuổi</p>
                <p>Quê quán: Tượng Lĩnh, Kim Bảng, Hà Nam</p>
                <p>Ngày khai báo: 22/11/2021</p>
            </div>
        </div>
    )
}

export default CardPerson;
