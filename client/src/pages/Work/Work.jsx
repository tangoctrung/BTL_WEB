import React from 'react';
import Leftbar from './Leftbar/Leftbar';
import Mail from './Mail/Mail';
import AddAcount from './AddAcount/AddAcount';
import OpenCensus from './OpenCensus/OpenCensus';
import Overview from './Overview/Overview';
import ViewPersonal from './ViewPersonal/ViewPersonal';
import ProvideCode from './ProvideCode/ProvideCode';
import "./Work.css";
import { useSelector } from 'react-redux';
import Topbar from '../../components/Topbar/Topbar';

function Work() {

    const { user } = useSelector(state => state);

    return (
        <div className="work">
            <div className="work-top">
                <Topbar />
            </div>
            <div className="work-left">
                <Leftbar />
            </div>
            <div className="work-center">
                { user.workingMode === '0' && 
                    <div className="work-center-text">
                        <p>Hãy chọn công việc bạn cần làm</p>
                    </div> 
                }
                { user.workingMode === '1' && <div><Mail /></div> }
                { user.workingMode === '2' && <div><ProvideCode /></div> }
                { user.workingMode === '3' && <div><AddAcount /></div> }
                { user.workingMode === '4' && <div><OpenCensus /></div> }
                { user.workingMode === '5' && <div><Overview /></div> }
                { user.workingMode === '6' && <div><ViewPersonal /></div> }
                
            </div>
        </div>
    )
}

export default Work;
