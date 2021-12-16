import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../common/Button/Button';
import Modal from '../../../common/Modal/Modal';
import "./OpenCensus.css";
import { getCodeNameOpenCensus, getCitizenCodename } from "../../../redux/actions/openCensusAction";
import moment from "moment";
import { urlClient } from '../../../api/urlApi';

function OpenCensus() {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const dispatch = useDispatch();
    const { auth, openCensus } = useSelector(state => state);
    const [isOpenModalDetail, setIsOpenModalDetail] = useState(false); 
    const [codeName, setCodeName] = useState();

    const handleShowModal = () => {
        setIsOpenModal(true);
    }

    useEffect(() => {
        if (auth?.user?.typeAccount==="A1") {
            dispatch(getCodeNameOpenCensus("00", auth?.accessToken));
        } else {
            dispatch(getCodeNameOpenCensus(auth?.user?.accountName, auth?.accessToken));
        }
    }, [])

    // khi người dùng click vào xem địa phương được khai báo 
    const handleChooseCode = (codeId) => {
        dispatch(getCodeNameOpenCensus(codeId, auth?.accessToken));
    }

    // khi người dùng bấm reload lại xem tiến độ khai báo dân số
    const handleReload = () => {
        if (auth?.user?.typeAccount==="A1") {
            dispatch(getCodeNameOpenCensus("00", auth?.accessToken));
        } else {
            dispatch(getCodeNameOpenCensus(auth?.user?.accountName, auth?.accessToken));
        }
    }

    // khi người dùng click xem chi tiết từng vùng
    const handleClickDetail = (codeName, level) => {
        setCodeName(codeName);
        setIsOpenModalDetail(true);
        dispatch(getCitizenCodename(codeName, level, auth?.accessToken));
    }

    // khi người dùng xem 1 citizen
    const handleClickPerson = (id) => {
        window.open(urlClient + `viewpersondetail/${id}`);
    }

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
                            <p>Thời gian đóng quyền không thể trước thời gian cấp quyền. <b onClick={handleShowModal} >Xem thêm</b></p>
                            <div className="openCensus-content-listButton">
                                <Button 
                                    typeButton="normal" 
                                    width={120} 
                                    height={45} 
                                    text="Xác nhận" 
                                    borderRadius={30}
                                />
                            </div>
                        </div>
                        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                            <div className="modal-provideCode-text">
                                <h2>Chi tiết lỗi</h2>
                                <p>Thời gian mở cuộc khảo sát của bạn phải diễn ra trước thời gian đóng cuộc khảo sát.</p>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
            <div className="openCensus-bottom">
                <h3>Theo dõi tiến độ</h3>
                <div className="openCensus-bottom-button">
                    <Button typeButton="reload" width={120} height={40} text="Tải lại" onClick={handleReload} />
                </div>
                <div className="openCensus-bottom-container">

                    { auth?.user?.typeAccount ==="A1" &&
                        <div className="openCensus-bottom-itemTable">
                            <div className="openCensus-bottom-itemTable-title">
                                <p>Tỉnh (Thành phố)</p>
                            </div>
                            <div className="openCensus-listLocalName">
                                { openCensus?.city.length > 0   && openCensus?.city.map((city, index) => (
                                    <div className="openCensus-itemLocalName" key={index}>
                                        <div className="openCensus-itemLocalName-content" onClick={()=> handleChooseCode(city?.code)} >
                                            <b>{index+1}. {city?.name} - {city?.code}</b>
                                        </div>
                                        <b onClick={()=> handleClickDetail(city?.name, "Tỉnh")}>Chi tiết</b>
                                    </div>
                                )) }                                                                    
                            </div>
                            
                        </div>}

                    { ["A1", "A2"].includes(auth?.user?.typeAccount) &&
                        <div className="openCensus-bottom-itemTable">
                            <div className="openCensus-bottom-itemTable-title">
                                <p>Huyện (Quận)</p>
                            </div>
                            <div className="openCensus-listLocalName">
                                { openCensus?.district.length > 0   ? openCensus?.district.map((district, index) => (
                                    <div className="openCensus-itemLocalName" key={index}>
                                        <div className="openCensus-itemLocalName-content" onClick={()=> handleChooseCode(district?.code)} >
                                            <b>{index+1}. {district?.name} - {district?.code}</b>
                                        </div>
                                        <b onClick={()=> handleClickDetail(district?.name, "Huyện")}>Chi tiết</b>
                                    </div>
                                )) : <p>Không có dữ liệu.</p>}                                   
                            </div>
                            
                        </div>}

                    { ["A1", "A2", "A3"].includes(auth?.user?.typeAccount) &&
                        <div className="openCensus-bottom-itemTable">
                            <div className="openCensus-bottom-itemTable-title">
                                <p>Xã (Phường)</p>
                            </div>
                            <div className="openCensus-listLocalName">
                                { openCensus?.ward.length > 0   ? openCensus?.ward.map((ward, index) => (
                                    <div className="openCensus-itemLocalName" key={index}>
                                        <div className="openCensus-itemLocalName-content" onClick={()=> handleChooseCode(ward?.code)} >
                                            <b>{index+1}. {ward?.name} - {ward?.code}</b>
                                        </div>
                                        <b onClick={()=> handleClickDetail(ward?.name, "Xã")}>Chi tiết</b>
                                    </div>
                                )) : <p>Không có dữ liệu.</p>} 
                            </div>
                            
                        </div>}

                    { ["A1", "A2", "A3", "B1"].includes(auth?.user?.typeAccount) &&
                        <div className="openCensus-bottom-itemTable">
                            <div className="openCensus-bottom-itemTable-title">
                                <p>Thôn (Bản, Làng)</p>
                            </div>
                            <div className="openCensus-listLocalName">
                                { openCensus?.village.length > 0   ? openCensus?.village.map((village, index) => (
                                    <div className="openCensus-itemLocalName" key={index}>
                                        <div className="openCensus-itemLocalName-content" onClick={()=> handleChooseCode(village?.code)} >
                                            <b>{index+1}. {village?.name} - {village?.code}</b>
                                        </div>
                                        <b onClick={()=> handleClickDetail(village?.name, "Thôn")}>Chi tiết</b>
                                    </div>
                                )) : <p>Không có dữ liệu.</p>} 
                            </div>
                            
                        </div>}

                </div>
            </div>

            <Modal isOpenModal={isOpenModalDetail} setIsOpenModal={setIsOpenModalDetail}>
                <div className="openCensus-modal-content">
                    <h2>Tình hình khảo sát dân số của {codeName}</h2>
                    {openCensus?.listCitizen?.length > 0 ? 
                        <>
                            <div className="openCensus-modal-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên</th>
                                            <th>Ngày sinh</th>
                                            <th>Số CCCD</th>
                                            <th>Quê quán</th>
                                            <th>Ngày khai báo</th>
                                            <th>Xem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {openCensus?.listCitizen && openCensus?.listCitizen.map((citizen, index) => (
                                            <tr key={index}> 
                                                <td>{index + 1}</td>
                                                <td>{citizen?.name}</td>
                                                <td>{moment(citizen?.date).format("DD-MM-YYYY")}</td>
                                                <td>{citizen?.numCCCD}</td>
                                                <td>{citizen?.hometownVillage + ", " + citizen?.hometownWard + ", " + citizen?.hometownDistrict + ", " + citizen?.hometownCity}</td>
                                                <td>{moment(citizen?.createdAt).format("DD-MM-YYYY")}</td>
                                                <td>
                                                    <div onClick={() => handleClickPerson(citizen?._id)} className="iconView" >
                                                        <i className="fas fa-eye"></i>
                                                        <span> Xem</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <span>Tổng cộng có <b>{openCensus?.listCitizen?.length}</b> người dân được khai báo.</span>
                        </>
                        : <p>Không có dữ liệu.</p>}
                    
                </div>
            </Modal>
        </div>
    )
}

export default OpenCensus;
