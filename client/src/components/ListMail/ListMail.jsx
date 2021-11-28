import React from 'react';
import './ListMail.css';
import { useDispatch } from 'react-redux';
import * as ACTIONS from "../../redux/constants/mailContant";

function ListMail({data}) {

    const dispatch = useDispatch();

    const handleOpenMail = (mail) => {
        dispatch({type: ACTIONS.EMAIL_IS_OPEN, payload: {
            mail: mail,
        }});
    }

    return (
        <div className="listMail">
            {data.map((mail, index) => (
                <div key={index} className="itemMail">
                    <div className="itemMail-content" onClick={() => handleOpenMail(mail)}>
                        <div className="itemMail-sender">
                            <b>{mail.sender.name}</b>
                            <span>{`(${mail.sender.email})`}</span>
                        </div>
                        <div className="itemMail-content">              
                            <span>
                                {mail.body.length > 100 ? mail.body.slice(0, 100) + '...' : mail.body}
                            </span>
                        </div>
                        <div className="itemMail-time">              
                            <b>{mail.time}</b>
                        </div>
                    </div>
                    <div className="itemMail-delete">
                        <i className="fas fa-trash" title="Xóa thư này"></i>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListMail;
