import React from 'react';
import Topbar from '../../components/Topbar/Topbar';
import "./WritePost.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '../../common/Button/Button';

function WritePost() {
    return (
        <div className="writePost">
            <div className="writePost-top">
                <Topbar />
            </div>
            <div className="writePost-bottom">
                <h1>Viết báo</h1>
                <div className="writePost-button">
                    <Button typeButton="normal" width={130} height={46} text="Xuất bản" />
                </div>
                <div className="writePost-content">
                    <CKEditor
                        editor={ ClassicEditor }
                        data="<p>Hello from CKEditor 5!</p>"
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default WritePost;
