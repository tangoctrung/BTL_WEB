import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./ViewPersonal.css";
import dataLocal from '../../../data/dataDemo/local.json';
import Button from '../../../common/Button/Button';
import CardPerson from '../../../components/CardPerson/CardPerson';
import * as ACTIONS from '../../../redux/constants/viewPersonContant';
import { urlClient } from '../../../api/urlApi';
import Modal from '../../../common/Modal/Modal';
import EditCitizen from '../../../components/EditCitizen/EditCitizen';
import { getAllCitizenCodename, deleteCitizen, getCitizenNumCCCD, getAllCitizen, getAllCitizenCodenameDefault } from '../../../redux/actions/userAction';
import moment from 'moment';

function ViewPersonal() {

    const dispatch = useDispatch();
    const { viewPerson, auth, user } = useSelector(state => state);
    const [isOpenModalEditCitizen, setIsOpenModalEditCitizen ] = useState(false);
    const [isOpenModalDeleteCitizen, setIsOpenModalDeleteCitizen ] = useState(false);
    const [citizenCurrent, setCitizenCurrent] = useState();
    const [indexCitizen, setIndexCitizen] = useState();
    const [citizenId, setCitizenId] = useState();
    const [numCCCD, setNumCCCD] = useState();
    const [state, setState] = useState({ nameCity: '', nameDistrict: '', nameWard: '', nameVillage: ''});

    useEffect(()=> {
        if (auth?.user?.typeAccount !== "A1") {
            let codeName = auth?.user?.position.split("tế ")[1];
            let level = codeName.split(" ")[0];
            dispatch(getAllCitizenCodenameDefault({codeName, level}, auth?.accessToken));
        } else {
            dispatch(getAllCitizen(auth?.accessToken));
        }
        
    }, [])
    const handleChangeModeView = (s) => {
        if (s === 'table') {
            dispatch({type: ACTIONS.MODE_VIEW_TABLE});
        } else {
            dispatch({type: ACTIONS.MODE_VIEW_CARD});
        }
    }

    // khi người dùng xem 1 citizen
    const handleClickPerson = (id) => {
        window.open(urlClient + `viewpersondetail/${id}`);
    }

    // khi người dùng xóa 1 citizen
    const handleDeleteCitizen = () => {
        dispatch(deleteCitizen(citizenId, auth?.accessToken ));
        setIsOpenModalDeleteCitizen(false);
    }

    // khi người dùng nhập numCCCD citizen 
    const handleTypeNumCCCD = (e) => {
        setNumCCCD(e.target.value);
    }
    // khi người dùng tìm kiếm citizen theo numCCCD
    const handleSearchCitizenNumCCCD = (e) => {
        e.preventDefault();
        if (numCCCD !== "" && numCCCD !== undefined) {
            dispatch(getCitizenNumCCCD(numCCCD, auth?.accessToken));
        }
    }

    // khi người dùng nhập tên vùng để tìm kiếm citizen 
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    // khi người dùng bấm tìm kiếm citizen theo vùng
    const handleSubmitSearchCitizen = (e) => {
        e.preventDefault();
        dispatch(getAllCitizenCodename(state, auth?.accessToken));
    }

    return (
        <div className="viewPersonal">
            <div className="viewPersonal-top">
                { ["A1", "A2", "A3", "B1"].includes(auth?.user?.typeAccount) &&
                    <>
                        <h3>Bộ lọc</h3>
                        <div className="viewPersonal-top-content">

                            { auth?.user?.typeAccount==="A1" &&
                                <div className="viewPersonal-top-content-item">
                                    <p>Tên tỉnh(thành phố)</p>
                                    <input list="dataCity" name="nameCity" onChange={handleChange} />
                                    <datalist id="dataCity">
                                        { dataLocal.map((city, index) => (
                                            <option key={index} value={city.Name}>{city.Name}</option>
                                        ))}
                                    </datalist>
                                </div>}

                            { ["A1", "A2"].includes(auth?.user?.typeAccount) &&
                                <div className="viewPersonal-top-content-item">
                                    <p>Tên huyện(quận)</p>
                                    <input list="dataDistrict" name="nameDistrict" onChange={handleChange}  />
                                    <datalist id="dataDistrict">
                                        { dataLocal.map((city, index) => (
                                            <option key={index} value={city.Name}>{city.Name}</option>
                                        ))}
                                    </datalist>
                                </div>}

                            { ["A1", "A2", "A3"].includes(auth?.user?.typeAccount) &&
                                <div className="viewPersonal-top-content-item">
                                    <p>Tên xã(phường)</p>
                                    <input list="dataWard" name="nameWard" onChange={handleChange} />
                                    <datalist id="dataWard">
                                        { dataLocal.map((city, index) => (
                                            <option key={index} value={city.Name}>{city.Name}</option>
                                        ))}
                                    </datalist>
                                </div>}

                            { ["A1", "A2", "A3", "B1"].includes(auth?.user?.typeAccount) &&
                                <div className="viewPersonal-top-content-item">
                                    <p>Tên thôn(phố, bản, làng)</p>
                                    <input list="dataVillage" name="nameVillage" onChange={handleChange}  />
                                    <datalist id="dataVillage">
                                        { dataLocal.map((city, index) => (
                                            <option key={index} value={city.Name}>{city.Name}</option>
                                        ))}
                                    </datalist>
                                </div>}

                            <div className="viewPersonal-top-content-button">
                                <div className="viewPersonal-top-content-button-content">
                                    <Button
                                        typeButton="search" 
                                        width={100} 
                                        height={40} 
                                        fontSize={17} 
                                        text="Duyệt" 
                                        onClick={handleSubmitSearchCitizen}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                }
                <h3>Tìm kiếm theo điều kiện</h3>
                <div className="viewPersonal-top-search">
                    <form className="viewPersonal-top-input" onSubmit={handleSearchCitizenNumCCCD}>
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Tìm kiếm theo số CCCD,..." onChange={handleTypeNumCCCD} />
                    </form>
                </div>
            </div>
            <div className="viewPersonal-bottom">
                <div className="viewPersonal-bottom-text">
                    <h3>Danh sách kết quả</h3>
                    <b>{user?.listCitizen?.length || 0} kết quả</b>
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

                    {(viewPerson.modeView === 'table' && user?.listCitizen?.length > 0) && 
                        <div className="viewPersonal-bottom-listPersonTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên</th>
                                        <th>Ngày sinh</th>
                                        <th>SĐT</th>
                                        <th>Số CCCD</th>
                                        <th>Quê quán</th>
                                        <th>Ngày khai báo</th>
                                        <th>Xem</th>
                                        <th>Sửa</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user?.listCitizen && user?.listCitizen.map((citizen, index) => (
                                        <tr key={index}> 
                                            <td>{index + 1}</td>
                                            <td>{citizen?.name}</td>
                                            <td>{moment(citizen?.date).format("DD-MM-YYYY")}</td>
                                            <td>{citizen?.phone}</td>
                                            <td>{citizen?.numCCCD}</td>
                                            <td>{citizen?.hometownVillage + ", " + citizen?.hometownWard + ", " + citizen?.hometownDistrict + ", " + citizen?.hometownCity}</td>
                                            <td>{moment(citizen?.createdAt).format("DD-MM-YYYY")}</td>
                                            <td>
                                                <div onClick={() => handleClickPerson(citizen?._id)}>
                                                    <i className="fas fa-eye"></i>
                                                    <span> Xem</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div onClick={()=> {setIsOpenModalEditCitizen(true); setCitizenCurrent(citizen); setIndexCitizen(index)}}>
                                                    <i className="fas fa-edit"></i>
                                                    <span> Sửa</span>                                                  
                                                </div>
                                            </td>
                                            <td>
                                                <div onClick={()=> {setIsOpenModalDeleteCitizen(true); setCitizenId(citizen?._id); setIndexCitizen(index)}}>
                                                    <i className="fas fa-trash"></i>
                                                    <span> Xóa</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }

                    {(viewPerson.modeView === 'card' && user?.listCitizen?.length > 0) &&
                        <div className="viewPersonal-bottom-listPerson">
                            {user?.listCitizen && user?.listCitizen.map((citizen, index) => (
                                <div className="viewPersonal-bottom-itemPerson" onClick={() => handleClickPerson(citizen?._id)} key={index}>
                                    <CardPerson citizen={citizen} />    
                                </div>  
                            ))}
                        </div>
                    }

                    {(user?.listCitizen?.length === 0 || !user?.listCitizen) && 
                        <div className="viewPersonal-bottom-notFound">
                            <p>Không có dữ liệu.</p>
                        </div>}


                </div>
            </div>

            <Modal isOpenModal={isOpenModalEditCitizen} setIsOpenModal={setIsOpenModalEditCitizen}>
                <div className="modal-viewPersonal-edit">
                        <EditCitizen citizen={citizenCurrent} index={indexCitizen} setIsOpenModal={setIsOpenModalEditCitizen} />
                </div>
            </Modal> 

            <Modal isOpenModal={isOpenModalDeleteCitizen} setIsOpenModal={setIsOpenModalDeleteCitizen}>
                    <div className="modal-viewPersonal-delete">
                        <div className="modal-delete-content">
                            <p>Bạn có chắc chắn muốn xóa không?</p>
                            <div className="modal-delete-listButton">
                                <button onClick={handleDeleteCitizen} >Muốn xóa</button>
                                <button onClick={()=> setIsOpenModalDeleteCitizen(false)}>Hủy xóa</button>
                            </div>
                        </div>
                    </div>
            </Modal>

        </div>
    )
}

export default ViewPersonal;
