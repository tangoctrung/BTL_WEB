import React, { useState } from 'react';
import Button from '../../../common/Button/Button';
import Modal from '../../../common/Modal/Modal';
import "./AddAcount.css";

function AddAcount() {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleShowModal = () => {
        setIsOpenModal(true);
    }

    return (
        <div className="addAcount">
            <div className="addAcount-top">
                <h3>Cấp tài khoản</h3>
                <div className="addAcount-top-container">
                    <div className="addAcount-top-content">
                        <div className="addAcount-top-content-username">
                            <p>Tài khoản :</p>
                            <input type="text" placeholder="Tên tài khoản chỉ bao gồm kí tự số"/>
                        </div>
                        <div className="addAcount-top-content-password">
                            <p>Mật khẩu :</p>
                            <div className="addAcount-top-content-password-text">
                                <input type="text" placeholder="Mật khẩu ít nhất 8 kí tự"/>
                                <Button 
                                    typeButton="default" 
                                    width={50} 
                                    height={50} 
                                    title="Hệ thống sẽ tự động cấp mật khẩu" 
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
                            />
                        </div>
                        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                            <div className="modal-provideCode-text">
                                <h2>Chi tiết lỗi</h2>
                                <p>Tên tài khoản đã được cấp vào ngày 22/12/2020 bởi Nguyễn Lâm Thành (cán bộ thành phố Hà Nội).</p>
                            </div>
                        </Modal>
                    </div>
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
