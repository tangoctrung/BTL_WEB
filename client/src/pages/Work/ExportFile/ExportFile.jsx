import React from 'react';
import './ExportFile.css';

function ExportFile() {
    return (
        <div className="exportFile">
            <div className="exportFile-top">
                <div className="exportFile-list">
                    <div className="exportFile-item">
                        <p>
                            <i className="fas fa-print"></i> In phiếu
                        </p>
                    </div>
                </div>
            </div>
            <div className="exportFile-bottom">
                <div className="exportFile-content">
                    <h1>Phiếu khảo sát dân số</h1>
                    <i>Hãy điển đầy đủ thông tin(nếu có) vào form dưới đây.</i>
                    <h3>Thông tin cơ bản</h3>
                    <div className="exportFile-infoBasic">
                        <div className="exportFile-img">
                            <div className="exportFile-img-content">
                                <p>Ảnh 4x6</p>
                            </div>
                        </div>
                        <div className="exportFile-listInfo">
                            <div className="exportFile-itemInfo">
                                <b>Họ và tên: </b> 
                                <span></span>
                            </div>
                            <div className="exportFile-itemInfo">
                                <b>Ngày sinh: </b> 
                                <span></span>
                            </div>
                            <div className="exportFile-itemInfo">
                                <b>Giới tính</b> 
                                <span></span>
                            </div>
                            <div className="exportFile-itemInfo">
                                <b>Dân tộc: </b> 
                                <span></span>
                            </div>
                            <div className="exportFile-itemInfo">
                                <b>Tôn giáo: </b> 
                                <span></span>
                            </div>
                            <div className="exportFile-itemInfo">
                                <b>Học vấn</b> 
                                <span></span>
                            </div>
                            <div className="exportFile-itemInfo">
                                <b>SĐT: </b> 
                                <span></span>
                            </div>
                            <div className="exportFile-itemInfo">
                                <b>Số CCCD: </b> 
                                <span></span>
                            </div>
                            <div className="exportFile-itemInfo">
                                <b>Email</b> 
                                <span></span>
                            </div>
                            <div className="exportFile-itemInfo">
                                <b>Công việc: </b> 
                                <span></span>
                            </div>
                            <div className="exportFile-itemInfo">
                                <b>Quê quán: </b> 
                                <span></span>
                            </div>
                            <div className="exportFile-itemInfo">
                                <b>Nơi ở: </b> 
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <h3>Thông tin chi tiết hơn <i>(Ví dụ như: chiều cao, cân nặng, hoạt động trong những năm gần đây, đặc điểm nhận dạng,...)</i></h3>
                    <div className="exportFile-infoDetail">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <h3>Thông tin gia đình <i>(Thông tin về bố mẹ, anh chị em(nếu có): bao gồm tên, tuổi, công việc,...)</i></h3>
                    <div className="exportFile-infoDetail">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <p>--Hết--</p>
                </div>
            </div>
        </div>
    )
}

export default ExportFile;
