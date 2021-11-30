import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./ViewPersonal.css";
import dataLocal from '../../../data/dataDemo/local.json';
import Button from '../../../common/Button/Button';
import CardPerson from '../../../components/CardPerson/CardPerson';
import * as ACTIONS from '../../../redux/constants/viewPersonContant';

function ViewPersonal() {

    const dispatch = useDispatch();
    const { viewPerson } = useSelector(state => state);

    const handleChangeModeView = (s) => {
        if (s === 'table') {
            dispatch({type: ACTIONS.MODE_VIEW_TABLE});
        } else {
            dispatch({type: ACTIONS.MODE_VIEW_CARD});
        }
    }
    console.log(viewPerson);

    return (
        <div className="viewPersonal">
            <div className="viewPersonal-top">
                <h3>Bộ lọc</h3>
                <div className="viewPersonal-top-content">
                    <div className="viewPersonal-top-content-item">
                        <p>Tên tỉnh(thành phố)</p>
                        <input list="dataCity" />
                        <datalist id="dataCity">
                            { dataLocal.map((city, index) => (
                                <option key={index} value={city.Name}>{city.Name}</option>
                            ))}
                        </datalist>
                    </div>
                    <div className="viewPersonal-top-content-item">
                        <p>Tên huyện(quận)</p>
                        <input list="dataDistrict" />
                        <datalist id="dataDistrict">
                            { dataLocal.map((city, index) => (
                                <option key={index} value={city.Name}>{city.Name}</option>
                            ))}
                        </datalist>
                    </div>
                    <div className="viewPersonal-top-content-item">
                        <p>Tên xã(phường)</p>
                        <input list="dataWard" />
                        <datalist id="dataWard">
                            { dataLocal.map((city, index) => (
                                <option key={index} value={city.Name}>{city.Name}</option>
                            ))}
                        </datalist>
                    </div>
                    <div className="viewPersonal-top-content-button">
                        <div className="viewPersonal-top-content-button-content">
                            <Button
                                typeButton="search" 
                                width={100} 
                                height={40} 
                                fontSize={17} 
                                text="Duyệt" 
                            />
                        </div>
                    </div>
                </div>
                <h3>Tìm kiếm khác</h3>
                <div className="viewPersonal-top-search">
                    <div className="viewPersonal-top-input">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Tìm kiếm theo tên, email, số CCCD, số ĐT,..." />
                    </div>
                </div>
            </div>
            <div className="viewPersonal-bottom">
                <div className="viewPersonal-bottom-text">
                    <h3>Danh sách kết quả</h3>
                    <b>2345 kết quả</b>
                </div>
                <div className="viewPersonal-modeView">
                    <p>Chế độ xem</p>
                    <div className="viewPersonal-listModeView">
                        <div 
                            className={`viewPersonal-modeItem ${viewPerson.modeView === 'table' && 'viewPersonal-modeItem-isActive'}`} 
                            onClick={()=>handleChangeModeView("table")}
                        >
                            <i className="fas fa-table"></i>
                            <span>Dạng bảng</span>
                        </div>
                        <div 
                            className={`viewPersonal-modeItem ${viewPerson.modeView === 'card' && 'viewPersonal-modeItem-isActive'}`}  
                            onClick={()=>handleChangeModeView("card")}
                        >
                            <i className="fas fa-address-card"></i>
                            <span>Dạng thẻ</span>
                        </div>
                    </div>
                </div>
                <div className="viewPersonal-bottom-container">

                    {viewPerson.modeView === 'table' && 
                        <div className="viewPersonal-bottom-listPersonTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên</th>
                                        <th>Tuổi</th>
                                        <th>Số CCCD</th>
                                        <th>Quê quán</th>
                                        <th>SĐT</th>
                                        <th>Ngày khai báo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tạ Ngọc Trung</td>
                                        <td>21 tuổi</td>
                                        <td>01234567891011</td>
                                        <td>Tượng Lĩnh, Kim Bảng, Hà Nam</td>
                                        <td>0862982787</td>
                                        <td>21/11/2021</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Nguyễn Lê Bảo Nam</td>
                                        <td>21 tuổi</td>
                                        <td>01234567891011</td>
                                        <td>Tượng Lĩnh, Kim Bảng, Hà Nam</td>
                                        <td>0862982787</td>
                                        <td>21/11/2021</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Tạ Ngọc Trung</td>
                                        <td>21 tuổi</td>
                                        <td>01234567891011</td>
                                        <td>Tượng Lĩnh, Kim Bảng, Hà Nam</td>
                                        <td>0862982787</td>
                                        <td>21/11/2021</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Tạ Ngọc Trung</td>
                                        <td>21 tuổi</td>
                                        <td>01234567891011</td>
                                        <td>Tượng Lĩnh, Kim Bảng, Hà Nam</td>
                                        <td>0862982787</td>
                                        <td>21/11/2021</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Tạ Ngọc Trung</td>
                                        <td>21 tuổi</td>
                                        <td>01234567891011</td>
                                        <td>Tượng Lĩnh, Kim Bảng, Hà Nam</td>
                                        <td>0862982787</td>
                                        <td>21/11/2021</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    }

                    {viewPerson.modeView === 'card' &&
                        <div className="viewPersonal-bottom-listPerson">
                            <div className="viewPersonal-bottom-itemPerson">
                                <CardPerson />                        
                            </div>
                            <div className="viewPersonal-bottom-itemPerson">
                                <CardPerson />                        
                            </div>
                            <div className="viewPersonal-bottom-itemPerson">
                                <CardPerson />                        
                            </div>
                            <div className="viewPersonal-bottom-itemPerson">
                                <CardPerson />                        
                            </div>
                            <div className="viewPersonal-bottom-itemPerson">
                                <CardPerson />                        
                            </div>
                            <div className="viewPersonal-bottom-itemPerson">
                                <CardPerson />                        
                            </div>
                            <div className="viewPersonal-bottom-itemPerson">
                                <CardPerson />                        
                            </div>
                            <div className="viewPersonal-bottom-itemPerson">
                                <CardPerson />                        
                            </div>
                            <div className="viewPersonal-bottom-itemPerson">
                                <CardPerson />                        
                            </div>
                            <div className="viewPersonal-bottom-itemPerson">
                                <CardPerson />                        
                            </div>
                            <div className="viewPersonal-bottom-itemPerson">
                                <CardPerson />                        
                            </div>

                        </div>
                    }


                </div>
            </div>
        </div>
    )
}

export default ViewPersonal;
