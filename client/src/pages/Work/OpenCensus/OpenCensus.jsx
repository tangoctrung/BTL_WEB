import React from 'react';
import Button from '../../../common/Button/Button';
import "./OpenCensus.css";

function OpenCensus() {
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
                            <p>Thời gian đóng quyền không thể trước thời gian cấp quyền. <b>Xem thêm</b></p>
                            <div className="openCensus-content-listButton">
                                <Button 
                                    typeButton="normal" 
                                    width={120} 
                                    height={45} 
                                    text="Xác nhận" 
                                    borderRadius={30}
                                />
                                {/* <Button 
                                    typeButton="delete" 
                                    width={120} 
                                    height={45} 
                                    text="Đóng" 
                                    color="red"
                                    fontSize={18}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="openCensus-bottom">
                <h3>Theo dõi tiến độ</h3>
                <div className="openCensus-bottom-container">
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
                    </div>

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
                    </div>
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
                    </div>
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
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OpenCensus;
