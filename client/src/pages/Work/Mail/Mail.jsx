import React from 'react';
import ListMail from '../../../components/ListMail/ListMail';
import ViewMail from '../../../components/ViewMail/ViewMail';
import "./Mail.css";
import { dataMail } from '../../../data/dataDemo/dataMail';
import { useDispatch, useSelector } from 'react-redux';
import SendMail from '../../../components/SendMail/SendMail';
import * as ACTIONS from "../../../redux/constants/mailContant";

function Mail() {

    const dispatch = useDispatch();
    const { mail } = useSelector(state => state);

    const handleOpenSendMail = () => {
        dispatch({type: ACTIONS.OPEN_SEND_MAIL});
    }

    return (
        <div className="mail">
            
            <div className="mail-content">
                { !mail.emailIsOpen && <div className="mail-content-left">
                    {dataMail.length > 0 
                        ? <ListMail data={dataMail} />
                        :   <div className="mail-content-text">
                                <p>Bạn không có thư nào.</p>
                            </div>
                    }
                </div>}
                { mail.emailIsOpen && 
                    <div className="mail-content-right">
                        <ViewMail mail = {mail.emailIsOpen} />
                    </div>
                }
            </div>

            <div className="iconSendMail">
                <div className="iconSendMail-content" onClick={handleOpenSendMail}>
                    <i className="fas fa-plus"></i>
                    <span>Soạn thư</span>
                </div>
                {mail.isOpenSendMail && 
                    <div className="iconSendMail-sendMail">
                        <SendMail />
                    </div>}
            </div>
        </div>
    )
}

export default Mail;
