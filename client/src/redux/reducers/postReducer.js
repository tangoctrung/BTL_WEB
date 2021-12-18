import * as ACTIONS from '../constants/postContant';


const initialState = {
    allPosts: [],  // tất cả bài viết
    hotPosts: [],  // bài viết mới nhất
    codenamePosts: [], // bài viết thuộc tỉnh của người dùng
    savedPosts: [], // bài viết đã lưu
    messagePost: "Không tìm thấy bài viết nào.", // message thông báo không tìm thấy bài post nào.
};


const post = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_POST: 
            return {
                ...state,
                allPosts:  allPosts.unshift(action.payload.post),
            }
        case ACTIONS.GET_POST_ALL: 
            return {
                ...state,
                allPosts: action.payload.listPost,
            }
        case ACTIONS.GET_POST_HOT: 
            return {
                ...state,
                hotPosts: action.payload.listPost,
            }
        case ACTIONS.GET_POST_CODENAME: 
            return {
                ...state,
                codenamePosts: action.payload.listPost,
            }
        case ACTIONS.GET_POST_SAVED: 
            return {
                ...state,
                savedPosts: action.payload.listPost,
            }
        case ACTIONS.MESSAGE_POST:
            return {
                ...state,
                messagePost: action.payload.message,
            }
        case ACTIONS.EDIT_POST:
            return {
                ...state,
                savedPosts: [...state.savedPosts.slice(0, action.payload.index), action.payload.postSaved, ...state.savedPosts.slice(action.payload.index + 1)],
            }
        case ACTIONS.DELETE_POST:
            return {
                ...state,
                allPosts: state.allPosts.filter(
                    (post) => post._id !== action.payload.postId
                ),
            }
        case ACTIONS.CANCEL_SAVE_POST:
            return {
                ...state,
                savedPosts: state.savedPosts.filter(
                    (post) => post._id !== action.payload.postId
                ),
            }
        default:
            return state;
    }
}
export default post;