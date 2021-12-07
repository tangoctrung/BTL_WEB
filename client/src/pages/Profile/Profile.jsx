import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import Topbar from '../../components/Topbar/Topbar';
import { dataNation } from '../../data/dataDemo/dataNation';
import { dataReligion } from '../../data/dataDemo/dataReligion';
import "./Profile.css";

function Profile() {

    const [isOpenModal, setIsOpenModal] = useState(false);
    
    return (
        <div className="profile">
            <div className="profile-top">
                <Topbar />
            </div>
            <div className="profile-bottom">
                <div className="profile-content">
                    <h1>Thông tin cá nhân</h1>
                    <i 
                        className="fas fa-user-edit" 
                        title="Sửa thông tin cá nhân"
                        onClick={()=> setIsOpenModal(true)}
                    ></i>
                    <div className="profile-infoBasic">
                        <h3>Thông tin cơ bản</h3>
                        <div className="profile-infoBasic-content">
                            <div className="profile-infoBasic-img">
                                <img src="https://cdn.tecotecshop.com/assets/img/avatar-author.png" alt="avatar" />
                            </div>
                            <div className="profile-infoBasic-listInfo">
                                <p><b>Họ và tên: </b> Tạ Ngọc Trung</p>
                                <p><b>Ngày sinh: </b> 13/06/1974</p>
                                <p><b>Giới tính: </b> Nam</p>
                                <p><b>Dân tộc: </b> Kinh</p>
                                <p><b>Tôn giáo: </b> Không</p>
                                <p><b>SĐT: </b> 01234567899</p>
                                <p><b>Nơi ở: </b>Tượng Lĩnh, Kim Bảng, Hà Nam</p>
                                <p><b>Quên quán: </b>Tượng Lĩnh, Kim Bảng, Hà Nam</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-infoOther">
                        <h3>Thông tin khác</h3>
                        <div className="profile-infoOther-content">
                            <p>Avatar - Thế thân là bộ phim khoa học viễn tưởng của Mỹ được ra mắt vào năm 2009, kịch bản và đạo diễn đều do phù thủy Hollywood James Cameron đảm nhiệm. Phim có sự tham gia của các diễn viên Sam Worthington, Zoe Saldana. Stephen Lang,..

Phim lấy bối cảnh vào năm 2154 khi con người đang khai thác một loại khoáng vật quý giá có tên là Unobtanium trên hành tinh Pandora, một hành tinh tươi tốt với khung cảnh huyền bí thuộc chòm sao Alpha Centauri. Việc khai thác được triển khai trên nhiều điểm khác nhau, và khi nó tiến đến làng của người bản địa có tên là Navi thì loài người đã tìm cách để đưa người trà trộn vào khu làng này để tìm hiểu thông tin. Tiêu đề của bộ phim cũng đề cập đến việc ứng dụng công nghệ gen trong quá trình lai ADN giữa người Navi và người trái đất của nhóm nghiên cứu sự tương tác với người bản địa ở Pandora.

Bộ phim được lên ý tưởng từ những năm 1994 khi Cameron đã tiết lộ 80 trang bản thảo cho bộ phim. Việc quay phim được cho là diễn ra sau bộ phim Titanic của ông năm 1988 và đã trở thành kế hoạch được triển khai chính thức vào năm 1999, tuy nhiên công nghệ thời bấy giờ không đáp ứng được những gì mà ông muốn hướng đến, về một thế giới hoàn toàn khác biệt.</p>
                        </div>
                    </div>
                </div>
            </div>

            {isOpenModal && 
                <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                    <div className="modal-profile">
                        <h2>Chỉnh sửa thông tin</h2>
                        <div className="modal-profile-content">
                            <div className="modal-profile-infoBasic">
                                <label htmlFor="chooseAvatar" className="modal-profile-img">
                                    <img src="https://cdn.tecotecshop.com/assets/img/avatar-author.png" alt="avatar" />
                                    <input type="file" hidden id="chooseAvatar" />
                                </label>
                                <div className="modal-profile-info">
                                    <p><b>Họ và tên:</b><input type="text" /></p>
                                    <p><b>Ngày sinh:</b><input type="date" /></p>
                                    <p>
                                        <b>Giới tính: </b>
                                        <input type="text" list="gioitinh" />
                                        <datalist id="gioitinh">
                                            <option key={1} value="Nam"></option>
                                            <option key={2} value="Nữ"></option>
                                            <option key={3} value="Khác"></option>
                                        </datalist>
                                    </p>
                                    <p>
                                        <b>Dân tộc: </b>
                                        <input type="text" list="dantoc" />
                                        <datalist id="dantoc">
                                            {dataNation.map((item, index) => (
                                                <option key={index} value={item.name}></option>
                                            ))}
                                        </datalist>
                                    </p>
                                    <p>
                                        <b>Tôn giáo: </b>
                                        <input type="text" list="tongiao" />
                                        <datalist id="tongiao">
                                            {dataReligion.map((item, index) => (
                                                <option key={index} value={item.name}></option>
                                            ))}
                                        </datalist>
                                    </p>
                                    <p><b>SĐT:</b><input type="text" /></p>
                                    <p><b>Nơi ở:</b><input type="text" /></p>
                                    <p><b>Quê quán:</b><input type="text" /></p>
                                </div>
                            </div>
                            <div className="modal-profile-infoOther">
                                <p>
                                    <b>Thông tin khác</b>
                                    <textarea></textarea>
                                </p>
                            </div>
                        </div>
                        <div className="modal-profile-button">
                            <Button typeButton="normal" height={45} width={130} text="Xác nhận" />
                        </div>
                    </div>
                </Modal>}
        </div>
    )
}

export default Profile;
