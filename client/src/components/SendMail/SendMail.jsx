import React from 'react';
import './SendMail.css';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import * as ACTIONS from "../../redux/constants/mailContant";

function SendMail() {


    const dispatch = useDispatch();
    const handleCloseSendMail = () => {
        dispatch({type: ACTIONS.CLOSE_SEND_MAIL});
    }

    return (
        <div className="sendMail">
            <div className="sendMail-top">
                <b>Soạn thư mới</b>
                <i className="fas fa-times" onClick={handleCloseSendMail}></i>
            </div>
            <div className="sendMail-receiver">
                <input type="email" placeholder="Nhập email của người nhận" required />
            </div>
            <div className="sendMail-body">
                <div className="sendMail-title">
                    <input type="text" placeholder="Nhập tiêu đề của thư" />
                </div>
                <div className="sendMail-content">
                    <textarea placeholder="Nhập nội dung thư" />

                </div>
                <div className="sendMail-file">
                    <label htmlFor="chooseFile">
                        <i className="fas fa-plus"></i>
                        <span>Bấm hoặc Kéo thả</span>
                        <input 
                            type="file" 
                            style={{display: "none"}}
                            accept="image/*"
                            id="chooseFile"
                        />

                    </label>
                </div>
            </div>
            <div className="sendMail-buttonSend">
                <Button typeButton="upload" width={100} height={40} text="Gửi" />
            </div>
        </div>
    )
}

export default SendMail;
