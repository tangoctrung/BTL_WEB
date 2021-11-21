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
                    <div className="itemMail-sender">
                        <input type="checkbox" />
                        <b onClick={() => handleOpenMail(mail)}>{mail.sender.name}</b>
                        <span onClick={() => handleOpenMail(mail)}>{`(${mail.sender.email})`}</span>
                    </div>
                    <div className="itemMail-content">              
                        <span onClick={() => handleOpenMail(mail)}>
                            {mail.body.length > 100 ? mail.body.slice(0, 100) + '...' : mail.body}
                        </span>
                        <i className="fas fa-trash" title="Xóa thư này"></i>
                    </div>
                    <div className="itemMail-time">              
                        <b>{mail.time}</b>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListMail;
