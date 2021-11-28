import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ViewMail.css';
import * as ACTIONS from "../../redux/constants/mailContant";

function ViewMail() {

    const dispatch = useDispatch();
    const { mail } = useSelector(state => state);
    const mailOpen = mail.emailIsOpen;

    const handleBackListMail = () => {
        dispatch({type: ACTIONS.CLEAR_EMAIL_IS_OPEN});
    }

    return (
        <div className="viewMail">
            <div className="viewMail-top">
                <div className="viewMail-top-left">
                    <i 
                        className="fas fa-arrow-left" 
                        title="Quay lại"
                        onClick={handleBackListMail}
                    ></i>
                    <div className="viewMail-avatar">
                        <img src={mailOpen.sender.avatar} alt="avatar" />
                    </div>
                    <div className="viewMail-name">
                        <b>{mailOpen.sender.name}</b>
                        <p>{mailOpen.sender.email}</p>
                    </div>
                </div>
                <div className="viewMail-top-right">
                    <span>{mailOpen.time}</span>
                </div>
            </div>
            <div className="viewMail-bottom">
                <div className="viewMail-title">
                    <h2>{mailOpen.title}</h2>
                </div>
                <div className="viewMail-body">
                    <p>{mailOpen.body}</p>
                </div>
                <div className="viewMail-file">
                    {mailOpen.urlFile.map((file, index) =>(
                        <div key={index}>
                            {file.type==="image" && 
                                <div className="viewMail-file-image">
                                    <img src={file.url} alt="anh" />
                                </div>}                          
                        </div>
                    ))}
                    {mailOpen.urlFile.map((file, index) =>(
                        <div key={index}>                 
                            {file.type==="file" && 
                                <div className="viewMail-file-file">
                                    <i className="fas fa-file-alt"></i>
                                    <span>{file.name.length > 15 ? file.name.slice(0, 15) + '...': file.name}</span>
                                </div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewMail;
