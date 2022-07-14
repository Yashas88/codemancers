import React, { useState } from 'react';
import './post.css';
import axios from 'axios';

const Post = () => {
  const [gifs, setGifs] = useState([]);
  const [gif, setGif] = useState('');

  const fetchData = async () => {
    const res = await axios.get(
      'https://api.giphy.com/v1/gifs/search?api_key=eWjPag1jis3sTZkXm5n2UGYWuu0sFbqd&q=hello'
    );
    // console.log("res", res);
    // console.log("res data", res.data.data)
    setGifs(res.data.data);
  };

  const handleSelect = (key) => {
    console.log('select', key);

    console.log(key.images.preview_gif.url);
    setGif(key.images.preview_gif.url);
  };

  return (
    <div>
      <div>
        <img
          alt='gif_image'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8NfrKHYJHjf3FxKhrD9OEO17wd6YXGzfs_j3lDUFz7JsGQZR09IyyD9EVo6Z3jxH3MQ&usqp=CAU'
        ></img>
        <input
          type='text'
          placeholder='Write something here...ಇಲ್ಲಿ ಏನಾದರೂ ಬರೆಯಿರಿ...'
          id='input_text'
        />
      </div>

      <div className='btn_div'>
        <button className='btn_gif'>Tag Friends</button>
        <button className='btn_gif'>Check in</button>
        <button className='btn_gif' onClick={fetchData}>
          GIF
        </button>
        <button className='btn_gif'>Tag Event</button>
        {gif ? (
          <>
            <img
              src={gif}
              alt='gif_image'
              style={{ width: '100px', height: '100px', cursor: 'pointer' }}
            />
          </>
        ) : null}
      </div>

      <div className='footer_div'>
        <select>
          <option value='only_me'>Only Me</option>
          <option value='friends'>Friends</option>
        </select>
        <button className='footer_btn'>Post</button>
      </div>

      <div className='git_con'>
        {gifs.map((item, index) => (
          <div className='git-conatiner' key={item.id}>
            <img
              src={item.images.preview_gif.url}
              style={{ width: '100px', height: '100px', cursor: 'pointer' }}
              alt='gif_image'
              onClick={(key) => {
                handleSelect(item);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
