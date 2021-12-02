import React from 'react';
import './ImportData.css';
import Button from '../../../common/Button/Button';

function ImportData() {
    return (
        <div className="importData">
            <div className="importData">
                <div className="importData-content">
                    <div className="importData-info">
                        <div className="importData-img">
                            <label htmlFor="choooseImage" title="Bấm vào để chọn ảnh" >
                                <input type="file" id="choooseImage" hidden />
                                <img src="http://fundrrdotcom.herokuapp.com/assets/missing_avatar-348050bb1afb592123424a3d3bffab29.jpg" alt="avatar" />
                            </label>
                        </div>
                        <div className="importData-infoBasic">
                            <input type="text" placeholder="Họ" />
                            <input type="text" placeholder="Tên đệm" />
                            <input type="text" placeholder="Tên thật" />
                            <p><b>Ngày sinh:</b><input type="date" /></p>
                            <p><b>Giới tính: </b><input type="text" /></p>
                            <p><b>Dân tộc: </b><input type="text" /></p>
                            <p><b>Tôn giáo: </b><input type="text" /></p>
                            <p><b>Học vấn: </b><input type="text" /></p>
                            <p><b>Số điện thoại: </b><input type="text" /></p>
                            <p><b>Số CCCD: </b><input type="text" /></p>
                            <p><b>Email: </b><input type="text" /></p>
                            <p><b>Công việc: </b><input type="text" /></p>
                            <p><b>Quê quán: </b><input type="text" /></p>
                            <p><b>Nơi ở hiện tại: </b><input type="text" /></p>
                        </div>
                    </div>
                    <div className="importData-infoDetail">
                        <h3>Thông tin chi tiết hơn</h3>
                        <div className="importData-infoDetailPerson">
                            <textarea placeholder="Nhập thông tin chi tiết hơn, ví dụ: chiều cao, cân nặng, đặc điểm nhận dạng, hoạt động trong cuộc đời,..." >

                            </textarea>
                        </div>
                    </div>
                    <div className="importData-infoFamily">
                        <h3>Thông tin về gia đình</h3>
                        <div className="importData-infoFamilyDetail">
                            <textarea placeholder="Thông tin của bố mẹ anh chị em: Tên, tuổi nghề nghiệp,...">

                            </textarea>
                        </div>
                    </div>
                    <div className="importData-button">
                        <Button typeButton="normal" text="Nhập" width={130} height={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImportData;
