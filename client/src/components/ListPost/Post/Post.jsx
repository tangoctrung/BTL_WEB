import React from 'react';
import { Link } from 'react-router-dom';
import "../ListPost.css";

function Post({post}) {
    return (
        <div className="post">
            <div className="post-top">
                <div className="post-top-imgName">
                    <div className="post-top-img">
                        <img src={post.avatar} alt="avatar" />
                    </div>
                    <div className="post-top-name">
                        <strong>{post.author}</strong>
                        <p>{post.position}</p>
                    </div>
                </div>
                <div className="post-top-menu">
                    <div className="post-top-item">
                        <i className="far fa-bookmark" title="Lưu lại xem sau"></i>
                    </div>
                    <div className="post-top-item post-top-itemMenu">
                        <i className="fas fa-ellipsis-h"></i>
                        <div className="post-top-item-options">
                            <div className="post-top-item-options-item">
                                <i className="fab fa-facebook"></i>
                                <span>Chia sẻ lên Facebook</span>
                            </div>
                            <div className="post-top-item-options-item">
                                <i className="fas fa-link"></i>
                                <span>Sao chép liên kết</span>
                            </div>
                            <div className="post-top-item-options-item">
                                <i className="fas fa-flag"></i>
                                <span>Báo cáo bài viết</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post-body">
                <div className="post-body-text">
                    <div className="post-top-title">
                        <Link to="/postdetail/123" className="post-top-title-link">
                            <h2>{post.title}</h2>
                        </Link>
                    </div>
                    <div className="post-top-content">
                        <p>{post.body}</p>
                    </div>
                    <div className="post-top-time">
                        <p>{post.time}</p>
                    </div>
                </div>
                <div className="post-body-img">
                    <img src={post.image} alt="post" />
                </div>
            </div>
        </div>
    )
}

export default Post;
