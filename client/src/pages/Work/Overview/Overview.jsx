import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./Overview.css";
import dataLocal from '../../../data/dataDemo/local.json';
import {dataViewMode} from '../../../data/dataDemo/dataViewMode';
import Button from '../../../common/Button/Button';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Black'],
    datasets: [
        {
            label: '# of Votes',
            data: [0.12, 0.19, 0.3, 0.5, 0.2, 0.3, 0.3],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

  
function Overview() {
    return (
        <div className="overview">
            <div className="overview-top">
                <h3>Chọn địa phương muốn xem</h3>
                <div className="overview-country">
                    <div className="overview-itemCountry">
                        <p>Tên tỉnh(thành phố)</p>
                        <input list="dataCity" />
                        <datalist id="dataCity">
                            { dataLocal.map((city, index) => (
                                <option key={index} value={city.Name}>{city.Name}</option>
                            ))}
                        </datalist>
                    </div>
                    <div className="overview-itemCountry">
                        <p>Tên huyện(quận)</p>
                        <input list="dataDistrict" />
                        <datalist id="dataDistrict">
                            { dataLocal.map((city, index) => (
                                <option key={index} value={city.Name}>{city.Name}</option>
                            ))}
                        </datalist>
                    </div>
                    <div className="overview-itemCountry">
                        <p>Tên xã(phường)</p>
                        <input list="dataWard" />
                        <datalist id="dataWard">
                            { dataLocal.map((city, index) => (
                                <option key={index} value={city.Name}>{city.Name}</option>
                            ))}
                        </datalist>
                    </div>
                    <div className="overview-itemCountry">
                        <p>Chọn tiêu chí xem</p>
                        <input list="dataViewMode" />
                        <datalist id="dataViewMode">
                            { dataViewMode.map((item, index) => (
                                <option key={index} value={item.name}>{item.value}</option>
                            ))}
                        </datalist>
                    </div>
                </div>
                
                <div className="overview-button">
                    <Button typeButton="success" width={120} height={40} text="Xem" />
                </div>
            </div>
            <div className="overview-bottom">
                <h3>Biểu đồ</h3>
                <div className="overview-bottom-listChart">
                    <div className="overviewTest">
                        <Pie data={data} />;
                    </div>
                    <div className="overviewTest">
                        <Pie data={data} />;
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Overview;
