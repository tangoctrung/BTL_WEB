import React from 'react';
import './ViewPersonDetail.css';

function ViewPersonDetail() {
    return (
        <div className="viewPersonDetail">
            <div className="viewPersonDetail-content">
                <div className="viewPersonDetail-info">
                    <div className="viewPersonDetail-img">
                        <img src="https://i.pinimg.com/originals/5c/02/b0/5c02b0822f34b309bb0881d5ad57e27c.jpg" alt="avatar" />
                    </div>
                    <div className="viewPersonDetail-infoBasic">
                        <b>Tạ Ngọc Trung</b>
                        <p><b>Ngày sinh:</b> 23-07-2001 (21 tuổi)</p>
                        <p><b>Giới tính: </b>Nam</p>
                        <p><b>Dân tộc: </b>Kinh</p>
                        <p><b>Tôn giáo: </b>Không</p>
                        <p><b>Học vấn: </b>Trung học phổ thông</p>
                        <p><b>Số điện thoại: </b>0862982787</p>
                        <p><b>Số CCCD: </b>01234567891011</p>
                        <p><b>Email: </b>trung@gmail.com</p>
                        <p><b>Công việc: </b>Sinh viên Đại học Công Nghệ (UET)</p>
                        <p><b>Quê quán: </b>Tượng Lĩnh, Kim Bảng, Hà Nam</p>
                        <p><b>Nơi ở hiện tại: </b>Mai Dịch, Cầu Giấy, Hà Nội</p>
                    </div>
                </div>
                <div className="viewPersonDetail-infoDetail">
                    <h3>Thông tin chi tiết hơn</h3>
                    <div className="viewPersonDetail-infoDetailPerson">
                        <p>Chiều cao: 163cm 
                        Cân nặng: 50kg 
                        Đặc điểm nhận dạng: Có nốt rồi ở mắt trải, vết sẹo nhỏ, khó nhìn ở sống mũi. 
                        Hoạt động: 2007-20019: Đi học và hoàn thành các cấp Tiểu học, Trung học cơ sở và Trung học phổ thông
                        2019-nay: đang theo học tại Đại học Công Nghệ (UET) </p>
                    </div>
                </div>
                <div className="viewPersonDetail-infoFamily">
                    <h3>Thông tin về gia đình</h3>
                    <div className="viewPersonDetail-infoFamilyDetail">
                        <p>Họ tên bố: Tạ Văn Đức, năm sinh: 1969, số CCCD: 02389457938457
                        Họ tên mẹ: Nguyễn Thị Hòa, năm sinh: 1972, số CCCD: 02389457938457
                        Anh trai: Tạ Việt Anh, năm sinh: 1996, số CCCD: 02389457938457
                        Em gái: Tạ Thị Thanh Hiền, năm sinh: 2003, số CCCD: 02389457938457</p>
                    </div>
                </div>
                <p>--Hết--</p>
            </div>
        </div>
    )
}

export default ViewPersonDetail;
