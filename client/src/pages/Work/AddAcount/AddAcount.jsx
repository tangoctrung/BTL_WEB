import React, { useEffect, useRef, useState } from 'react';
import Button from '../../../common/Button/Button';
import Modal from '../../../common/Modal/Modal';
import generator from 'generate-password';
import "./AddAcount.css";
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../../../redux/actions/authAction";
import { getAllUser, getAllUserIsProvied } from "../../../redux/actions/userAction";
import moment from "moment";
import * as ACTIONS from "../../../redux/constants/authContant";
import { Link } from "react-router-dom";


function AddAcount() {

    const { auth, user } = useSelector(state => state);
    const dispatch = useDispatch();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [state, setState] = useState({
        accountName: "", 
        password: "", 
        typeAccount: "",
        providerAccount: auth?.user?._id,
        accountNameProvider: "",
    });
    // const {accountName, password, typeAccount, providerAccount} = state;
    const inputPasswordRef = useRef();

    useEffect(() => {
        switch (auth?.user?.typeAccount) {
            case "admin": 
                setState({
                    ...state,
                    typeAccount: "A1",
                    accountNameProvider: "A1",
                })
                break;
            case "A1": 
                setState({
                    ...state,
                    typeAccount: "A2",
                    accountNameProvider: auth?.user?.accountName,
                })
                break;
            case "A2": 
                setState({
                    ...state,
                    typeAccount: "A3",
                    accountNameProvider: auth?.user?.accountName,
                })
                break;
            case "A3": 
                setState({
                    ...state,
                    typeAccount: "B1",
                    accountNameProvider: auth?.user?.accountName,
                })
                break;
            case "B1": 
                setState({
                    ...state,
                    typeAccount: "B2",
                    accountNameProvider: auth?.user?.accountName,
                })
                break;
            default: 
                break;
        }
    }, [])

    const handleShowModal = () => {
        setIsOpenModal(true);
    }

    // get tất cả người dùng
    useEffect(() => {
        if (["admin", "A1"].includes(auth?.user?.typeAccount)) {
            dispatch(getAllUser(auth?.accessToken));
        } else {
            dispatch(getAllUserIsProvied(auth?.user?._id, auth?.accessToken));
        }
    }, [auth?.accessToken]);

    // khi người dùng bấm reload lại các tài khoản được cấp
    const handleReloadAddAccount = () => {
        if (["admin", "A1"].includes(auth?.user?.typeAccount)) {
            dispatch(getAllUser(auth?.accessToken));
        } else {
            dispatch(getAllUserIsProvied(auth?.user?._id, auth?.accessToken));
        }
    }

    // khi người dùng nhập dữ liệu sẽ cập nhật state
    const handleChane = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    // tự động tạo mk ngẫu nhiên
    const handleCreatePassword = () => {
        var password = generator.generate({
            length: 10,
            numbers: true
        });
        setState({
            ...state,
            password: password,
        })
        inputPasswordRef.current.value = password;
    }

    // khi người dùng focus sẽ clear thông báo lỗi 
    const handleFocus = () => {
        dispatch({type: ACTIONS.CLEAR_MESSAGE});
    }

    // khi submit tạo tài khoản
    const handleAddAccount = (e) => {
        e.preventDefault();
        dispatch(register(state))
    }

    return (
        <div className="addAcount">
            <div className="addAcount-top">
                <h3>Cấp tài khoản</h3>
                { <p>Chú ý: Bạn chỉ có thể cấp được tài khoản cho {state?.typeAccount}</p>}
                <div className="addAcount-top-container">
                    <form className="addAcount-top-content">
                        <div className="addAcount-top-content-username">
                            <p>Tài khoản :</p>
                            <input 
                                type="text" 
                                placeholder="Tên tài khoản chỉ bao gồm kí tự số" 
                                name="accountName" 
                                onChange={handleChane}
                                onFocus={handleFocus}
                            />
                        </div>
                        <div className="addAcount-top-content-password">
                            <p>Mật khẩu :</p>
                            <div className="addAcount-top-content-password-text">
                                <input 
                                    type="text" 
                                    placeholder="Mật khẩu ít nhất 8 kí tự" 
                                    name="password" 
                                    ref={inputPasswordRef}
                                    onChange={handleChane}
                                    onFocus={handleFocus}
                                />
                                <Button 
                                    typeButton="default" 
                                    width={50} 
                                    height={50} 
                                    title="Hệ thống sẽ tự động cấp mật khẩu" 
                                    onClick = {handleCreatePassword}
                                />
                            </div>
                        </div>
                        <div className="addAcount-top-content-button">
                            { auth?.messageRegister && <p>{auth?.messageRegister}<b onClick={handleShowModal}> Xem thêm</b></p>}
                            { auth?.messageSuccess && <p style={{color: "green"}}>{auth?.messageSuccess}</p>}
                            <Button 
                                width={140} 
                                height={44} 
                                typeButton="normal" 
                                text="Xác nhận" 
                                fontSize={18} 
                                onClick={handleAddAccount}
                            />
                        </div>
                        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                            <div className="modal-provideCode-text">
                                <h2>Chi tiết lỗi</h2>
                                <p>{auth?.messageDetail}</p>
                            </div>
                        </Modal>
                    </form>
                </div>
            </div>
            <div className="addAcount-bottom">
                <h3>Xem danh sách những tài khoản được cấp</h3>
                <div className="addAcount-bottom-button">
                    <Button typeButton="reload" width={120} height={40} text="Tải lại" onClick={handleReloadAddAccount} />
                </div>
                <div className="addAcount-bottom-container">
                    <table>
                        <thead>
                            <tr>
                               <th>STT</th>
                               <th>Cấp bậc - Tên tài khoản</th>
                               <th>Chức vụ</th>
                               <th>Cấp bậc - Tên người cấp</th>
                               <th>Ngày cấp</th>
                            </tr>
                        </thead>
                        <tbody>
                            { user?.listUser && user.listUser.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td><Link to={`/profile/${user._id}`} style={{color: 'black', textDecoration: "none"}} ><b>{user?.typeAccount} -</b> {user?.name ? `${user?.name}` : `${user?.accountName}`}</Link></td>
                                    <td>{ user?.position }</td>
                                    <td><Link to={`/profile/${user?.providerAccount?._id}`} style={{color: 'black', textDecoration: "none"}} ><b>{user?.providerAccount?.typeAccount} -</b> {user?.providerAccount?.name ? `${user?.providerAccount?.name}` : `${user?.providerAccount?.accountName}`}</Link></td>
                                    <td>{moment(user?.createdAt).format('DD/MM/YYYY')}</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
                { user?.listUser?.length===0 && 
                    (
                        <p>Bạn chưa cấp tài khoản nào.</p>
                    )
                }
            </div>
        </div>
    )
}

export default AddAcount;
