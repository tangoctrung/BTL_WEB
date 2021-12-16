import React, { useState } from 'react';

import "./Overview.css";
import dataLocal from '../../../data/dataDemo/local.json';
import {dataViewMode} from '../../../data/dataDemo/dataViewMode';
import Button from '../../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import PieChart from '../../../Chart/PieChart/PieChart';
import { overViewTieuChi } from '../../../redux/actions/overViewAction';
import * as ACTIONS from "../../../redux/constants/overViewContant";
  


function Overview() {

    const { auth, overView } = useSelector(state => state);
    const dispatch = useDispatch();
    const [state, setState] = useState({ nameCity: '', nameDistrict: '', nameWard: '', nameVillage: '', tieuChi: ''});
    // khi người dùng nhập tên vùng
    const handleChange = (e) => {
        setState({ 
            ...state,
            [e.target.name] : e.target.value,
        });
        dispatch({type: ACTIONS.CLEAR_DATA});
    }
    
    // khi người dùng submit việc xem 
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(overViewTieuChi(state, auth?.accessToken));
    }

    return (
        <div className="overview">
            <div className="overview-top">
                <h3>Chọn địa phương/tiêu chí muốn xem</h3>
                <div className="overview-country">

                    { auth?.user?.typeAccount==="A1" &&
                        <div className="overview-itemCountry">
                            <p>Tên tỉnh(thành phố)</p>
                            <input type="email" list="dataCity" multiple name="nameCity" onChange={handleChange}/>
                            <datalist id="dataCity">
                                { dataLocal.map((city, index) => (
                                    <option key={index} value={city.Name}>{city.Name}</option>
                                ))}
                            </datalist>
                        </div>}

                    { ["A1", "A2"].includes(auth?.user?.typeAccount) &&
                        <div className="overview-itemCountry">
                            <p>Tên huyện(quận)</p>
                            <input list="dataDistrict" type="email" multiple name="nameDistrict" onChange={handleChange}/>
                            <datalist id="dataDistrict">
                                { dataLocal.map((city, index) => (
                                    <option key={index} value={city.Name}>{city.Name}</option>
                                ))}
                            </datalist>
                        </div>}

                    { ["A1", "A2", "A3"].includes(auth?.user?.typeAccount) &&
                        <div className="overview-itemCountry">
                            <p>Tên xã(phường)</p>
                            <input list="dataWard" type="email" multiple name="nameWard" onChange={handleChange}/>
                            <datalist id="dataWard">
                                { dataLocal.map((city, index) => (
                                    <option key={index} value={city.Name}>{city.Name}</option>
                                ))}
                            </datalist>
                        </div>}

                    { ["A1", "A2", "A3", "B1"].includes(auth?.user?.typeAccount) &&
                        <div className="overview-itemCountry">
                            <p>Tên thôn(phố, bản, làng)</p>
                            <input list="dataVillage" type="email" multiple name="nameVillage" onChange={handleChange} />
                            <datalist id="dataVillage">
                                { dataLocal.map((city, index) => (
                                    <option key={index} value={city.Name}>{city.Name}</option>
                                ))}
                            </datalist>
                        </div>}

                    <div className="overview-itemCountry">
                        <p>Chọn tiêu chí xem</p>
                        <input list="dataViewMode" name="tieuChi" onChange={handleChange} />
                        <datalist id="dataViewMode">
                            { dataViewMode.map((item, index) => (
                                <option key={index} value={item.name}>{item.value}</option>
                            ))}
                        </datalist>
                    </div>
                </div>
                
                <div className="overview-button">
                    <Button typeButton="success" width={120} height={40} text="Xem" onClick={handleSubmit} />
                </div>
            </div>
            <div className="overview-bottom">
                <h3>Biểu đồ</h3>
                <div className="overview-bottom-listChart">
                    {overView?.dataPie ? 
                        <div className="overviewPieChart">
                            <PieChart dataPie={overView?.dataPie} tieuChi={state.tieuChi} />
                        </div> : 
                        <p>{overView.messageError}</p>
                        }        
                </div>
            </div>
        </div>
    )
}


export default Overview;
