import React from 'react';
import "./ProvideCode.css";
import dataLocal from '../../../data/dataDemo/local.json';
import Button from '../../../common/Button/Button';

function ProvideCode() {
    return (
        <div className="provideCode">
            <div className="provideCode-top">
                <h3>Khai báo cấp mã cho tỉnh/thành phố</h3>
                <div className="provideCode-top-container">
                    <div className="provideCode-top-content">
                        <div className="provideCode-top-content-left">
                            <p>Tên tỉnh/thành phố</p>
                            <input list="dataList" />
                            <dataList id="dataList">
                                { dataLocal.map((city, index) => (
                                    <option key={index} value={city.Name}>{city.Name}</option>
                                ))}
                            </dataList>
                        </div>
                        <div className="provideCode-top-content-right">
                            <p>Cấp mã</p>
                            <div className="provideCode-top-content-right-info">
                                <input placeholder="Mã này là số từ 01 -> 63" />
                                <Button typeButton="default" width={50} height={50} title="Hệ thống sẽ tự động cấp một mã cho tỉnh/thành phố này" />
                            </div>
                        </div>
                        <div className="provideCode-top-content-button">
                            <p>Tỉnh/thành phố <b>Điện Biên</b> đã được khai báo. Không khai báo lại.<b>Xem thêm</b></p>
                            <button>Khai báo</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="provideCode-bottom">
                <h3>Những tỉnh thành, địa phương đã được khai báo</h3>
                <div className="provideCode-bottom-listLocal">
                    <div className="provideCode-bottom-itemLocal">
                        <p>Tỉnh (Thành phố)</p>
                        <div className="listLocalName">
                            <div className="itemLocalName">
                                <b>Hà Nội - <b>00</b></b>
                                <address>Thời gian khai báo: 22/11/2021</address>
                            </div>
                            <div className="itemLocalName">
                                <b>Hà Nam - <b>01</b></b>
                                <address>Thời gian khai báo: 22/11/2021</address>
                            </div>
                            <div className="itemLocalName">
                                <b>Hà Nội - <b>00</b></b>
                                <address>Thời gian khai báo: 22/11/2021</address>
                            </div>
                            
                        </div>
                    </div>
                    <div className="provideCode-bottom-itemLocal">
                        <p>Huyện (Quận)</p>
                        <div className="listLocalName">
                            <span>Chọn tỉnh(thành phố) để xem thêm.</span>
                        </div>
                    </div>
                    <div className="provideCode-bottom-itemLocal">
                        <p>Xã (Phường)</p>
                        <div className="listLocalName">
                            <span>Chọn huyện(quận) để xem thêm.</span>
                        </div>
                    </div>
                    <div className="provideCode-bottom-itemLocal">
                        <p>Thôn (Tổ,Bản,Làng)</p>
                        <div className="listLocalName">
                            <span>Chọn xã(phường) để xem thêm.</span>
                        </div>
                    </div>
                </div>
                <div className="provideCode-table">
                    
                </div>
            </div>
        </div>
    )
}

export default ProvideCode;
