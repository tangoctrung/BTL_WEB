import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import Topbar from '../../components/Topbar/Topbar';
import { dataNation } from '../../data/dataDemo/dataNation';
import { dataReligion } from '../../data/dataDemo/dataReligion';
import { updateUser } from "../../redux/actions/authAction";
import { changePassword } from "../../redux/actions/userAction";
import {storage} from '../../firebase';
import "./Profile.css";
import { noAvatar, urlApi } from "../../api/urlApi";
import moment from 'moment';
import { useLocation } from 'react-router';
import axios from 'axios';

function Profile() {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalPassword, setIsOpenModalPassword] = useState(false);
    const { auth, user } = useSelector(state => state);
    const location = useLocation();
    const [userId, setUserId] = useState(location?.pathname?.split("/")[2]);
    const [dataUser, setDataUser] = useState();
    const dispatch = useDispatch();
    const [state, setState] = useState({name: auth?.user?.name ? auth?.user?.name : '', phone: auth?.user?.phone ? auth?.user?.phone : '', 
        avatar: auth?.user?.avatar ? auth?.user?.avatar : noAvatar, date: auth?.user?.date ? moment(auth?.user?.date).format("YYYY-MM-DD") : '', 
        nation: auth?.user?.nation ? auth?.user?.nation : '', religion: auth?.user?.religion ? auth?.user?.religion : '', 
        gender: auth?.user?.gender ? auth?.user?.gender : '', address: auth?.user?.address ? auth?.user?.address : '', 
        hometown: auth?.user?.hometown ? auth?.user?.hometown : '', infoOther: auth?.user?.infoOther ? auth?.user?.infoOther : ''}); 
    const [file, setFile] = useState();
    const [statePass, setStatePass] = useState({
        password: '', oldPassword: '', confirmPassword: '',
        userId: auth?.user?._id,
    });
    
    useEffect(() =>{
        setState({name: auth?.user?.name ? auth?.user?.name : '', phone: auth?.user?.phone ? auth?.user?.phone : '', 
        avatar: auth?.user?.avatar ? auth?.user?.avatar : noAvatar, date: auth?.user?.date ? moment(auth?.user?.date).format("YYYY-MM-DD") : '', 
        nation: auth?.user?.nation ? auth?.user?.nation : '', religion: auth?.user?.religion ? auth?.user?.religion : '', 
        gender: auth?.user?.gender ? auth?.user?.gender : '', address: auth?.user?.address ? auth?.user?.address : '', 
        hometown: auth?.user?.hometown ? auth?.user?.hometown : '', infoOther: auth?.user?.infoOther ? auth?.user?.infoOther : ''});
    }, [ auth?.user])

    // l???y info user t??? userId
    useEffect(() => {
        if (auth?.user?._id === userId) {
            setDataUser(auth?.user);
        } else {
            const fetchUser = async () => {
                const res = await axios.get(urlApi + `/getauser/${userId}`, {
                    headers: {
                        Authorization: 'Bearer ' + auth?.accessToken
                    }
                })
                if (res.data.status) {
                    setDataUser(res.data.user);
                }
            }
            fetchUser();
        }
    }, [userId, location]);

    // khi ng?????i d??ng ch???n avatar
    const handleChooseAvatar = (e) => {
        const file = e.target.files[0];
        setFile(file);
        if (file) {
            const uploadTask = storage.ref(`avatar/${auth?.user?._id}/${file.name}`).put(file);
            console.log("loading");
            uploadTask.on('state_changed', 
                (snapshot) => {}, 
                (error) => { alert(error)}, 
                () => {
                    // complete function ....
                    storage.ref(`avatar/${auth?.user?._id}`).child(file.name).getDownloadURL().then(url => {
                        console.log(url);
                        setState({
                            ...state,
                            avatar: url,
                        });
                    })
                });
        }
    }

    // khi ng?????i d??ng thay ?????i th??ng tin 
    const handleChangeInfo = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    // khi ng?????i d??ng submit
    const handleUpdateInfo = (e) => {
        e.preventDefault();
        dispatch(updateUser(state, auth?.user?._id, auth.accessToken));
    }

    // khi ng?????i d??ng thay ?????i m???t kh???u 
    const handleChange = (e) => {
        setStatePass({
            ...statePass,
            [e.target.name]: e.target.value,
        })
    }

    // khi ng?????i d??ng x??c nh???n thay ?????i password
    const handleClickChangePassword = (e) => {
        e.preventDefault();
        dispatch(changePassword(statePass, auth?.accessToken));
    }
    
    return (
        <div className="profile">
            <div className="profile-top">
                <Topbar />
            </div>
            <div className="profile-bottom">
                <div className="profile-content">
                    <h1>Th??ng tin c?? nh??n</h1>
                    {auth?.user?._id === userId && 
                        <div className="profile-optionEdit">
                            <i className="fas fa-cog" title="Ch???nh s???a"></i>
                            <div className="profile-optionList">
                                <div className="profile-optionItem" onClick={()=> setIsOpenModalPassword(true)}>
                                    <i className="fas fa-key" 
                                    ></i>
                                    <span> Thay ?????i m???t kh???u</span>
                                </div>
                                <div className="profile-optionItem" onClick={()=> setIsOpenModal(true)}>
                                    <i 
                                        className="fas fa-user-edit"                            
                                    ></i>
                                    <span> S???a th??ng tin</span>
                                </div>
                            </div>
                        </div>}
                    <div className="profile-infoBasic">
                        <h3>Th??ng tin c?? b???n</h3>
                        <div className="profile-infoBasic-content">
                            <div className="profile-infoBasic-img">
                                <img src={dataUser?.avatar ? dataUser?.avatar : noAvatar} alt="avatar" />
                            </div>
                            <div className="profile-infoBasic-listInfo">
                                <p><b>H??? v?? t??n: </b> {dataUser?.name ? dataUser?.name : "Anonymous"}</p>
                                <p><b>Ch???c v???: </b> {dataUser?.position ? dataUser?.position : "Anonymous"}</p>
                                <p><b>Ng??y sinh: </b> {dataUser?.date ? moment(dataUser?.date).format("DD-MM-YYYY") : "Anonymous"}</p>
                                <p><b>Gi???i t??nh: </b> {dataUser?.gender ? dataUser?.gender : "Anonymous"}</p>
                                <p><b>D??n t???c: </b> {dataUser?.nation ? dataUser?.nation : "Anonymous"}</p>
                                <p><b>T??n gi??o: </b> {dataUser?.religion ? dataUser?.religion : "Anonymous"}</p>
                                <p><b>S??T: </b> {dataUser?.phone ? dataUser?.phone : "Anonymous"}</p>
                                <p><b>N??i ???: </b>{dataUser?.address ? dataUser?.address : "Anonymous"}</p>
                                <p><b>Qu??n qu??n: </b>{dataUser?.hometown ? dataUser?.hometown : "Anonymous"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-infoOther">
                        <h3>Th??ng tin kh??c</h3>
                        <div className="profile-infoOther-content">
                            <p>{dataUser?.infoOther ? dataUser?.infoOther : "Anonymous"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                <form className="modal-profile" onSubmit={handleUpdateInfo}>
                    <h2>Ch???nh s???a th??ng tin</h2>
                    <div className="modal-profile-content">
                        <div className="modal-profile-infoBasic">
                            <label htmlFor="chooseAvatar" className="modal-profile-img">
                                {/* <img src={noAvatar} alt="avatar" /> */}
                                {auth?.user?.avatar && <img src={state.avatar ? state.avatar : (auth?.user?.avatar)} alt="avatar" title="B???m v??o ????y ????? thay ?????i avatar"/>}
                                {!auth?.user?.avatar && <img src={state.avatar ? state.avatar : noAvatar} alt="avatar" title="B???m v??o ????y ????? thay ?????i avatar"/>}
                                <input type="file" hidden id="chooseAvatar" onChange={handleChooseAvatar} />
                            </label>
                            <div className="modal-profile-info">
                                <p><b>H??? v?? t??n:</b><input type="text" name="name" value={state.name} onChange={handleChangeInfo} /></p>
                                <p><b>Ng??y sinh:</b><input type="date" name="date" value={state.date} onChange={handleChangeInfo} /></p>
                                <p>
                                    <b>Gi???i t??nh: </b>
                                    <input type="text" list="gioitinh" name="gender" value={state.gender} onChange={handleChangeInfo} />
                                    <datalist id="gioitinh">
                                        <option key={1} value="Nam"></option>
                                        <option key={2} value="N???"></option>
                                        <option key={3} value="Kh??c"></option>
                                    </datalist>
                                </p>
                                <p>
                                    <b>D??n t???c: </b>
                                    <input type="text" list="dantoc" name="nation" value={state.nation} onChange={handleChangeInfo} />
                                    <datalist id="dantoc">
                                        {dataNation.map((item, index) => (
                                            <option key={index} value={item.name}></option>
                                        ))}
                                    </datalist>
                                </p>
                                <p>
                                    <b>T??n gi??o: </b>
                                    <input type="text" list="tongiao" name="religion" value={state.religion} onChange={handleChangeInfo} />
                                    <datalist id="tongiao">
                                        {dataReligion.map((item, index) => (
                                            <option key={index} value={item.name}></option>
                                        ))}
                                    </datalist>
                                </p>
                                <p><b>S??T:</b><input type="text" name="phone" value={state.phone} onChange={handleChangeInfo} /></p>
                                <p><b>N??i ???:</b><input type="text" name="address" value={state.address} onChange={handleChangeInfo} /></p>
                                <p><b>Qu?? qu??n:</b><input type="text" name="hometown" value={state.hometown} onChange={handleChangeInfo} /></p>
                            </div>
                        </div>
                        <div className="modal-profile-infoOther">
                            <p>
                                <b>Th??ng tin kh??c</b>
                                <textarea name="infoOther" value={state.infoOther} onChange={handleChangeInfo} ></textarea>
                            </p>
                        </div>
                    </div>
                    <div className="modal-profile-button">
                        <Button 
                            typeButton="normal" 
                            height={45} width={130} 
                            text="X??c nh???n" 
                            onClick={handleUpdateInfo} 
                        />
                    </div>
                </form>
            </Modal>

            <Modal isOpenModal={isOpenModalPassword} setIsOpenModal={setIsOpenModalPassword}>
                <div className="profile-modalPassword">
                    <h3>Thay ?????i m???t kh???u</h3>
                    <input 
                        type="password" 
                        placeholder="M???t kh???u c??" 
                        autoComplete="off" 
                        name="oldPassword" 
                        onChange={handleChange}
                    />
                    <input 
                        type="password" 
                        placeholder="M???t kh???u m???i" 
                        autoComplete="off" 
                        name="password" 
                        onChange={handleChange}
                        />
                    <input 
                        type="password" 
                        placeholder="Nh???p l???i m???t kh???u m???i" 
                        autoComplete="off" 
                        name="confirmPassword" 
                        onChange={handleChange}
                        />
                    <p>{user?.messageError ? user.messageError : ""}</p>
                    <div className="profile-modalButton">
                        <Button typeButton="normal" width={120} height={45} text="X??c nh???n" onClick={handleClickChangePassword} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Profile;
