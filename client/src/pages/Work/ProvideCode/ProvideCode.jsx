import React, { useEffect, useState } from 'react';
import "./ProvideCode.css";
import dataLocal from '../../../data/dataDemo/local.json';
import Button from '../../../common/Button/Button';
import Modal from '../../../common/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { provideCode } from '../../../redux/actions/addCodeAction';
import * as ACTIONS from "../../../redux/constants/addCodeContant";

function ProvideCode() {

    const { auth, addCode } = useSelector(state => state);
    const dispatch = useDispatch();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [state, setState] = useState({
        code: '', name: '', 
        provider: auth?.user?._id, // người cấp
        level: '', 
        codeLength: 0});

    useEffect(() => {
        switch (auth?.user?.typeAccount){
            case "A1":
                setState({
                    ...state,
                    level: "Tỉnh",
                    codeLength: 2,
                });
                break;
            case "A2":
                setState({
                    ...state,
                    level: "Huyện",
                    codeLength: 4,
                });
                break;
            case "A3":
                setState({
                    ...state,
                    level: "Xã",
                    codeLength: 6,
                });
                break;
            case "B1":
                setState({
                    ...state,
                    level: "Thôn",
                    codeLength: 8,
                });
                break;

                
            default:
                break;
        }
    }, []);
    const handleShowModal = () => {
        setIsOpenModal(true);
    }

    // khi người dùng nhập tên địa phương hoặc mã
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        });
    }

    // khi người dùng focus input thì clear message lỗi
    const handleFocus = (e) => {
        dispatch({type: ACTIONS.CLEAR_MESSAGE})
    }

    // khi người dùng cấp mã
    const handleProvideCode = (e) => {
        e.preventDefault();
        // console.log(auth?.user?.accessToken);
        dispatch(provideCode(state, auth?.accessToken));
    }

    return (
        <div className="provideCode">
            <div className="provideCode-top">
                { auth?.user?.typeAccount ==="A1" &&  <h3>Khai báo cấp mã cho tỉnh/thành phố</h3>}
                { auth?.user?.typeAccount ==="A2" &&  <h3>Khai báo cấp mã cho huyện/ quận</h3>}
                { auth?.user?.typeAccount ==="A3" &&  <h3>Khai báo cấp mã cho xã/phường</h3>}
                { auth?.user?.typeAccount ==="B1" &&  <h3>Khai báo cấp mã cho thôn/phố/bản</h3>}
                <div className="provideCode-top-container">
                    <form className="provideCode-top-content">
                        <div className="provideCode-top-content-left">
                            { auth?.user?.typeAccount ==="A1" &&  <p>Tên tỉnh/thành phố</p>}
                            { auth?.user?.typeAccount ==="A2" &&  <p>Tên huyện/ quận</p>}
                            { auth?.user?.typeAccount ==="A3" &&  <p>Tên xã/phường</p>}
                            { auth?.user?.typeAccount ==="B1" &&  <p>Tên thôn/phố/bản</p>}
                            <input 
                                list="dataList" 
                                placeholder="Chọn tên địa phương ở đây" 
                                name="name"
                                onChange={handleChange}
                                onFocus={handleFocus}
                             />
                            <datalist id="dataList">
                                { dataLocal.map((city, index) => (
                                    <option key={index} value={city.Name}>{city.Name}</option>
                                ))}
                            </datalist>
                        </div>
                        <div className="provideCode-top-content-right">
                            <p>Cấp mã</p>
                            <div className="provideCode-top-content-right-info">
                                <input 
                                    type="text" 
                                    placeholder="Nhập mã ở đây" 
                                    name="code" 
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                />
                                <Button typeButton="default" width={50} height={50} title="Hệ thống sẽ tự động cấp một mã cho tỉnh/thành phố này" />
                            </div>
                        </div>
                        <div className="provideCode-top-content-button">
                            {addCode?.error && <p>{addCode?.error}<b onClick={handleShowModal}>Xem thêm</b></p>}
                            <button onClick={handleProvideCode}>Khai báo</button>
                        </div>
                        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} >
                            <div className="modal-provideCode-text">
                                <h2>Chi tiết lỗi</h2>
                                <p>{addCode?.errorDetail}</p>
                            </div>
                        </Modal>
                    </form>
                </div>
            </div>

            <div className="provideCode-bottom">
                <h3>Những tỉnh thành, địa phương đã được khai báo</h3>
                <div className="provideCode-bottom-listLocal">
                    { auth?.user?.typeAccount==="A1" && 
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
                        </div>}
                    { ["A1", "A2"].includes(auth?.user?.typeAccount) &&
                        <div className="provideCode-bottom-itemLocal">
                        <p>Huyện (Quận)</p>
                        <div className="listLocalName">
                            <span>Chọn tỉnh(thành phố) để xem thêm.</span>
                        </div>
                        </div>}
                    { ["A1", "A2", "A3"].includes(auth?.user?.typeAccount) &&
                        <div className="provideCode-bottom-itemLocal">
                            <p>Xã (Phường)</p>
                            <div className="listLocalName">
                                <span>Chọn huyện(quận) để xem thêm.</span>
                            </div>
                        </div>}

                    { ["A1", "A2", "A3", "B1"].includes(auth?.user?.typeAccount) &&
                        <div className="provideCode-bottom-itemLocal">
                            <p>Thôn (Tổ,Bản,Làng)</p>
                            <div className="listLocalName">
                                <span>Chọn xã(phường) để xem thêm.</span>
                            </div>
                        </div>}
                </div>
                <div className="provideCode-table">
                    
                </div>
            </div>
        </div>
    )
}

export default ProvideCode;
