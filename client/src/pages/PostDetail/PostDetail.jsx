import React from 'react';
import Topbar from '../../components/Topbar/Topbar';
import "./PostDetail.css";

function PostDetail() {
    return (
        <div className="postDetail">
            <div className="postDetail-top">
                <Topbar />
            </div>
            <div className="postDetail-bottom">
                <div className="postDetail-content">
                    <div className="postDetail-content-top">
                        <div className="postDetail-top-imgName">
                            <div className="postDetail-top-img">
                                <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="avatar" />
                            </div>
                            <div className="postDetail-top-name">
                                <strong>Hà Minh Tuấn</strong>
                                <p>Tổng cục Dân số thuộc Bộ Y tế</p>
                            </div>
                        </div>
                        <div className="postDetail-top-menu">
                            <div className="postDetail-top-item">
                                <i className="far fa-bookmark" title="Lưu lại xem sau"></i>
                            </div>
                            <div className="postDetail-top-item postDetail-top-itemMenu">
                                <i className="fas fa-ellipsis-h"></i>
                                <div className="postDetail-top-item-options">
                                    <div className="postDetail-top-item-options-item">
                                        <i className="fab fa-facebook"></i>
                                        <span>Chia sẻ lên Facebook</span>
                                    </div>
                                    <div className="postDetail-top-item-options-item">
                                        <i className="fas fa-link"></i>
                                        <span>Sao chép liên kết</span>
                                    </div>
                                    <div className="postDetail-top-item-options-item">
                                        <i className="fas fa-flag"></i>
                                        <span>Báo cáo bài viết</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="postDetail-content-body">
                        <p><i className="far fa-clock"></i> 13/11/2021</p>
                        <h3>Tình hình dân số Hà Nam</h3>
                        <div className="postDetail-text">
                            <p>
                            Điều kiện tự nhiên
Diện tích: 860,5 km², là tỉnh có diện tích đứng thứ 62/63 tỉnh, thành phố trong cả nước
Lượng mưa trung bình hàng năm: 1.900 mm
Nhiệt độ trung bình: 23-24 °C
Số giờ nắng trong năm: 1.300-1.500 giờ
Độ ẩm tương đối trung bình: 85%
Địa hình thấp dần từ tây sang đông. Địa hình đồi núi phía tây của tỉnh (chủ yếu ở phía Tây huyện Kim Bảng và phần phía Tây của huyện Thanh Liêm phần khu vực hữu ngạn sông Đáy). Phần đồi núi phía Tây huyện Kim Bảng có điểm cao nhất là 459,4 mét so với mực nước biển thuộc vùng núi xã Thanh Sơn, đây cũng là điểm cao nhất của huyện Kim Bảng cũng như tỉnh Hà Nam. Phần đồi núi tập trung phía Tây huyện Thanh Liêm với điểm cao nhất là 385 mét thuộc xã Thanh Thủy và đây cũng là điểm cao nhất của huyện Thanh Liêm. Phía đông là đồng bằng với nhiều điểm trũng. Có một số dãy núi thấp, đồi sót giữa đồng bằng thuộc các xã Liêm Cần, Thanh Hương, Thanh Tâm, Liêm Sơn và thị trấn Tân Thanh (thuộc phía Đông huyện Thanh Liêm) với điểm cao nhất là 113 mét nằm ở giáp khu dân cư hai thôn là Trình Núi và Trè Núi thuộc xã Thanh Tâm); và núi sót ở thôn An Lão, xã An Lão (phía Nam huyện Bình Lục) với điểm cao nhất là 90 mét. Đèo Bông Bong là con đèo ngắn và thấp trên quốc lộ 21 nằm giữa địa giới hai tỉnh Hà Nam và Hòa Bình (liền kề khu dân cư xóm 6, thị trấn Ba Sao, huyện Kim Bảng).
                            </p>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/UBND_t%E1%BB%89nh_H%C3%A0_Nam_2.jpeg/300px-UBND_t%E1%BB%89nh_H%C3%A0_Nam_2.jpeg" />
                            <p>Theo kết quả khảo cổ thì người nguyên thuỷ đã xuất hiện ở Hà Nam trên dưới 1 vạn năm vào buổi đầu thời kỳ đồ đá mới và đồ gốm thuộc nền văn hóa Hòa Bình, văn hóa Bắc Sơn. Cũng có thể do sự bùng nổ dân số từ sơ thời kỳ đại kim khí nên bắt đầu đã có cư dân xuống trồng lúa nước ở vùng chiêm trũng. Họ được xem như những người tiên phong khai thác châu thổ Bắc bộ.

Từ thời các vua Hùng, đất Hà Nam ngày nay nằm trong quận Vũ Bình thuộc bộ Giao Chỉ; đến thời nhà Trần đổi là châu Lỵ Nhân, thuộc lộ Đông Đô.

Dưới thời Lê vào khoảng năm 1624, Thượng thư Nguyễn Khải đã cho chuyển thủ phủ trấn Sơn Nam từ thôn Tường Lân (xã Trác Văn) huyện Duy Tiên, phủ Lỵ Nhân đến đóng ở thôn Châu Cầu (nay là trung tâm thành phố Phủ Lý) thuộc tổng Phù Đạm, huyện Kim Bảng, phủ Lỵ Nhân, trấn Sơn Nam Thượng. Đến năm 1832 dưới thời Nguyễn, vua Minh Mạng quyết định bỏ đơn vị trấn thành lập đơn vị hành chính tỉnh, phủ Lỵ Nhân được đổi là phủ Lý Nhân thuộc tỉnh Hà Nội.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetail;
