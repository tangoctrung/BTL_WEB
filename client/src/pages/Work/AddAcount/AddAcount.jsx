import React, { useRef, useState } from 'react';
import Button from '../../../common/Button/Button';
import Modal from '../../../common/Modal/Modal';
import generator from 'generate-password';
import "./AddAcount.css";
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../../../redux/actions/authAction";

function AddAcount() {

    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [state, setState] = useState({
        accountName: "", 
        password: "", 
        typeAccount: "",
        providerAccount: auth?.user?._id,
    });
    // const {accountName, password, typeAccount, providerAccount} = state;
    const inputPasswordRef = useRef();

    const handleShowModal = () => {
        setIsOpenModal(true);
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

    // khi submit tạo tài khoản
    const handleAddAccount = (e) => {
        e.preventDefault();
        dispatch(register(state))
        // console.log(state);
    }

    return (
        <div className="addAcount">
            <div className="addAcount-top">
                <h3>Cấp tài khoản</h3>
                <div className="addAcount-top-container">
                    <form className="addAcount-top-content">
                        <div className="addAcount-top-content-username">
                            <p>Tài khoản :</p>
                            <input 
                                type="text" 
                                placeholder="Tên tài khoản chỉ bao gồm kí tự số" 
                                name="accountName" 
                                onChange={handleChane}
                            />
                            <select name="typeAccount" onChange={handleChane} required >
                                <option value="">Loại tài khoản</option>
                                <option value="A1">A1</option>
                                <option value="A2">A2</option>
                                <option value="A3">A3</option>
                                <option value="B1">B1</option>
                                <option value="B2">B2</option>
                            </select>
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
                            <p>Tài khoản này đã được cấp phép, bạn không thể cấp lại.<b onClick={handleShowModal} >Xem thêm</b></p>
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
                                <p>Tên tài khoản đã được cấp vào ngày 22/12/2020 bởi Nguyễn Lâm Thành (cán bộ thành phố Hà Nội).</p>
                            </div>
                        </Modal>
                    </form>
                </div>
            </div>
            <div className="addAcount-bottom">
                <h3>Xem danh sách những tài khoản được cấp</h3>
                <div className="addAcount-bottom-container">
                    <table>
                        <thead>
                            <tr>
                               <th>STT</th>
                               <th>Tên tài khoản</th>
                               <th>Chức vụ</th>
                               <th>Người cấp</th>
                               <th>Ngày cấp</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                               <td>1</td>
                               <td><b>01</b> (Nguyễn Văn Vinh)</td>
                               <td>Cán bộ thành phố Hà Nội</td>
                               <td><b>TW</b> (Lê Mạnh Lâm)</td>
                               <td>22/11/2020</td>
                            </tr>
                            <tr>
                               <td>2</td>
                               <td><b>0101</b> (Nguyễn Ngọc Hà)</td>
                               <td>Cán bộ quận Cầu Giấy</td>
                               <td><b>01</b> (Nguyễn Văn Vinh)</td>
                               <td>3/1/2021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AddAcount;
