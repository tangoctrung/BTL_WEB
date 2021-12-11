import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../common/Button/Button';
import Modal from '../../../common/Modal/Modal';
import "./OpenCensus.css";

function OpenCensus() {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const { auth } = useSelector(state => state);
    const handleShowModal = () => {
        setIsOpenModal(true);
    }

    return (
        <div className="openCensus">
            <div className="openCensus-top">
                <h3>Cấp quyền khai báo dân số</h3>
                <div className="openCensus-top-container">
                    <div className="openCensus-top-content">
                        <div className="openCensus-content-timeOpen">
                            <label>Thời gian mở :</label>
                            <input type="datetime-local" />
                        </div>
                        <div className="openCensus-content-timeClose">
                            <label>Thời gian đóng :</label>
                            <input type="datetime-local" />
                        </div>
                        <div className="openCensus-content-buttonText">
                            <p>Thời gian đóng quyền không thể trước thời gian cấp quyền. <b onClick={handleShowModal} >Xem thêm</b></p>
                            <div className="openCensus-content-listButton">
                                <Button 
                                    typeButton="normal" 
                                    width={120} 
                                    height={45} 
                                    text="Xác nhận" 
                                    borderRadius={30}
                                />
                            </div>
                        </div>
                        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                            <div className="modal-provideCode-text">
                                <h2>Chi tiết lỗi</h2>
                                <p>Thời gian mở cuộc khảo sát của bạn phải diễn ra trước thời gian đóng cuộc khảo sát.</p>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="openCensus-bottom">
                <h3>Theo dõi tiến độ</h3>
                <div className="openCensus-bottom-container">

                    { auth?.user?.typeAccount ==="A1" &&
                        <div className="openCensus-bottom-itemTable">
                            <div className="openCensus-bottom-itemTable-title">
                                <p>Tỉnh (Thành phố)</p>
                            </div>
                            <div className="openCensus-listLocalName">
                                <div className="openCensus-itemLocalName">
                                    <div className="openCensus-itemLocalName-content">
                                        <b>Hà Nội - 00</b>
                                        <p>Tính đến hiện tại: <b>234 người</b> được khai báo</p>
                                    </div>
                                    <b>Chi tiết</b>
                                </div>  
                                <div className="openCensus-itemLocalName">
                                    <div className="openCensus-itemLocalName-content">
                                        <b>Hà Nam - 01</b>
                                        <p>Tính đến hiện tại: <b>356 người</b> được khai báo</p>
                                    </div>
                                    <b>Chi tiết</b>
                                </div>  
                                <div className="openCensus-itemLocalName">
                                    <div className="openCensus-itemLocalName-content">
                                        <b>Quảng Ninh - 02</b>
                                        <p>Tính đến hiện tại: <b>492 người</b> được khai báo</p>
                                    </div>
                                    <b>Chi tiết</b>
                                </div>                                         
                            </div>
                            <div className="openCensus-bottom-itemTable-total">
                                <p>Tổng cộng: <b>23 tỉnh(thành)</b> và <b>10034 người </b>được khai báo</p>
                            </div>
                        </div>}

                    { ["A1", "A2"].includes(auth?.user?.typeAccount) &&
                        <div className="openCensus-bottom-itemTable">
                            <div className="openCensus-bottom-itemTable-title">
                                <p>Huyện (Quận)</p>
                            </div>
                            <div className="openCensus-listLocalName">
                                <div className="openCensus-listLocalName-text">
                                    <p>Chọn tỉnh(thành phố) để xem thêm</p>
                                </div>                                         
                            </div>
                            <div className="openCensus-bottom-itemTable-total">
                                <div className="openCensus-bottom-itemTable-total-text">
                                    <p>Chưa có thông tin</p>
                                </div>                       
                            </div>
                        </div>}

                    { ["A1", "A2", "A3"].includes(auth?.user?.typeAccount) &&
                        <div className="openCensus-bottom-itemTable">
                            <div className="openCensus-bottom-itemTable-title">
                                <p>Xã (Phường)</p>
                            </div>
                            <div className="openCensus-listLocalName">
                                <div className="openCensus-listLocalName-text">
                                    <p>Chọn huyện(quận) để xem thêm</p>
                                </div>                                         
                            </div>
                            <div className="openCensus-bottom-itemTable-total">
                                <div className="openCensus-bottom-itemTable-total-text">
                                    <p>Chưa có thông tin</p>
                                </div>                       
                            </div>
                        </div>}

                    { ["A1", "A2", "A3", "B1"].includes(auth?.user?.typeAccount) &&
                        <div className="openCensus-bottom-itemTable">
                            <div className="openCensus-bottom-itemTable-title">
                                <p>Thôn (Bản, Làng)</p>
                            </div>
                            <div className="openCensus-listLocalName">
                                <div className="openCensus-listLocalName-text">
                                    <p>Chọn xã(phường) để xem thêm</p>
                                </div>                                         
                            </div>
                            <div className="openCensus-bottom-itemTable-total">
                                <div className="openCensus-bottom-itemTable-total-text">
                                    <p>Chưa có thông tin</p>
                                </div>                       
                            </div>
                        </div>}

                </div>
            </div>
        </div>
    )
}

export default OpenCensus;
