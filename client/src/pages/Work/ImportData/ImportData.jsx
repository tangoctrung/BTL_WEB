import React from 'react';
import './ImportData.css';
import Button from '../../../common/Button/Button';
import { dataNation } from "../../../data/dataDemo/dataNation";
import { dataReligion } from "../../../data/dataDemo/dataReligion";
import { dataEducation } from '../../../data/dataDemo/dataEducation';
import { dataJob } from '../../../data/dataDemo/dataJob';
import dataLocal from "../../../data/dataDemo/local.json";

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
                            <p><b>Họ và tên:</b><input type="text" /></p>
                            <p><b>Ngày sinh:</b><input type="date" placeholder="DD/MM/YYYY" /></p>
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
                            <p>
                                <b>Học vấn: </b>
                                <input type="text" list="hocvan" />
                                <datalist id="hocvan">
                                    {dataEducation.map((item, index) => (
                                        <option key={index} value={item.name}></option>
                                    ))}
                                </datalist>
                            </p>
                            <p><b>SĐT: </b><input type="text" /></p>
                            <p><b>Số CCCD: </b><input type="text" /></p>
                            <p><b>Email: </b><input type="text" /></p>
                            <p>
                                <b>Học vấn: </b>
                                <input type="text" list="congviec" />
                                <datalist id="congviec">
                                    {dataJob.map((item, index) => (
                                        <option key={index} value={item.value}>{item.name}</option>
                                    ))}
                                </datalist>
                            </p>                          
                        </div>
                    </div>

                    <p>Nơi ở hiện tại</p>
                    <div className="importData-address">
                        <div className="importData-address-city">
                            <input type="text" list="addresscity" placeholder="Tỉnh/Thành phố" />
                            <datalist id="addresscity" >
                                { dataLocal.map((city, index) => (
                                    <option key={index} value={city.Name}>{city.Name}</option>
                                ))}
                            </datalist>
                        </div>  
                        <div className="importData-address-city">
                            <input type="text" list="addresshuyen" placeholder="Huyện/Quận" />
                            <datalist id="addresshuyen" >

                            </datalist>
                        </div>
                        <div className="importData-address-city">
                            <input type="text" list="addressxa" placeholder="Xã/Phường" />
                            <datalist id="addressxa" >

                            </datalist>
                        </div>     
                        <div className="importData-address-city">
                            <input type="text" list="addressxa" placeholder="Thôn/Phố/Bản" />
                            <datalist id="addressxa" >

                            </datalist>
                        </div>
                    </div>

                    <p>Quê quán</p>
                    <div className="importData-hometown">
                        <div className="importData-hometown-city">
                            <input type="text" list="hometowncity" placeholder="Tỉnh/Thành phố" />
                            <datalist id="hometowncity" >
                                { dataLocal.map((city, index) => (
                                    <option key={index} value={city.Name}>{city.Name}</option>
                                ))}
                            </datalist>
                        </div>  
                        <div className="importData-hometown-city">
                            <input type="text" list="hometownhuyen" placeholder="Huyện/Quận" />
                            <datalist id="hometownhuyen" >

                            </datalist>
                        </div>
                        <div className="importData-hometown-city">
                            <input type="text" list="hometownxa"  placeholder="Xã/Phường" />
                            <datalist id="hometownxa" >

                            </datalist>
                        </div>  
                        <div className="importData-hometown-city">
                            <input type="text" list="hometownthon"  placeholder="Thôn/Phố/Bản" />
                            <datalist id="hometownthon" >

                            </datalist>
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
