import React from "react";
import MyPosts from './MyPosts.jsx'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/contentReducer.js";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return { 
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return { 
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text)
        dispatch(action);
    },
    addPost: () => {dispatch(addPostActionCreator())}
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;