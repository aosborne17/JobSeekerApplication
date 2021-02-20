import React, { useState } from 'react';
import './CreatePost.css';
import CloseIcon from '@material-ui/icons/Close';
import { uncreatePost } from '../actions/postActions';
import { useDispatch } from 'react-redux';
import { Avatar } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import DescriptionIcon from '@material-ui/icons/Description';
const CreatePost = () => {
  const dispatch = useDispatch();

  const [postContent, setPostContent] = useState('');

  const createPostHandler = () => {
    alert('Post Created');
  };

  return (
    <div className='createPostWrapper'>
      <div className='createPost'>
        <div className='createPost__titleSection'>
          <p>Create a post</p>
          <CloseIcon
            className='createPost__CloseIcon'
            onClick={() => dispatch(uncreatePost())}
          />
        </div>
        <div className='createPost__createSection'>
          <div className='createPost__userDetails'>
            <Avatar
              className='createPost__Avatar'
              onClick={() => alert('Routing to users page')}
              src='https://media-exp1.licdn.com/dms/image/C5603AQGv877kAllGJA/profile-displayphoto-shrink_100_100/0/1598308310113?e=1618444800&v=beta&t=dXGAdqk67iAQsfP2BaWeXiUdDazsTu2fM6GVcPG9LkM'
            />
            <div>
              <p>Andrew Osborne</p>
              <button>Anyone</button>
            </div>
          </div>
          <div className='createPost__inputArea'>
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className='createPost__textArea'
              placeholder='What do you want to talk about?'
              cols='30'
              rows='10'
            ></textarea>
            {/* <input
              type='file'
              // value={selectedFile}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            /> */}
            {/* <div
              contentEditable='true'
              data-placeholder='What do you want to talk about?'
            >
              <img src={selectedFile && URL.createObjectURL(selectedFile)} />
            </div> */}
          </div>
          <div className='createSection__postSection'>
            <div className='createPost__uploadFiles'>
              <ImageIcon />
              <SubscriptionsIcon />
              <DescriptionIcon />
            </div>
            <button
              className='createPost__postButton'
              disabled={postContent ? false : true}
              onClick={createPostHandler}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
