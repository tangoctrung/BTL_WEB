import React from 'react';
import "./ProvideCode.css";
import { dataCity } from '../../../data/dataDemo/dataCity';

function ProvideCode() {
    return (
        <div className="provideCode">
            <div className="provideCode-top">
                <h3>Khai báo cấp mã cho tỉnh/thành phố</h3>
                <div className="provideCode-top-content">
                    <div className="provideCode-top-content1">
                        <div className="provideCode-top-content-left">
                            <p>Tên tỉnh/thành phố</p>
                            <input list="dataList" />
                            <dataList id="dataList">
                                { dataCity.map((city, index) => (
                                    <option key={index} value={city.name} >{city.name}</option>
                                ))}
                            </dataList>
                        </div>
                        <div className="provideCode-top-content-right">
                            <p>Cấp mã</p>
                            <input placeholder="Mã này là số từ 01 -> 63" />
                            <button>Mã mặc định</button>
                        </div>
                    </div>
                    <div className="provideCode-top-content-button">
                        <p>Tỉnh/thành phố <b>Điện Biên</b> đã được khai báo. Không khai báo lại.</p>
                        <button>Khai báo</button>
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
                    </div>
                    <div className="provideCode-bottom-itemLocal">
                        <p>Xã (Phường)</p>
                    </div>
                    <div className="provideCode-bottom-itemLocal">
                        <p>Thôn (Tổ,Bản,Làng)</p>
                    </div>
                </div>
                <div className="provideCode-table">
                    
                </div>
            </div>
        </div>
    )
}

export default ProvideCode;
