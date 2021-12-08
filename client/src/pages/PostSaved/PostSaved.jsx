import React from 'react';
import Topbar from '../../components/Topbar/Topbar';
import "./PostSaved.css";
import { dataPost } from '../../data/dataDemo/dataPost';
import Post from '../../components/ListPost/Post/Post';

function PostSaved() {
    return (
        <div className="postSaved">
            <div className="postSaved-top">
                <Topbar />
            </div>
            <div className="postSaved-bottom">
                <div className="postSaved-listPost">
                    <h3>Danh sách bài viết đã lưu</h3>
                    {dataPost.map((post, index) => (
                        <Post post={post} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostSaved;
