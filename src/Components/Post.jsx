import React, { useState } from 'react';
import './post.css';
import axios from 'axios';

const Post = () => {
  const [gif, setGif] = useState([]);
  console.log('gif data', gif);

  const fetchData = async () => {
    const res = await axios.get(
      'https://api.giphy.com/v1/gifs/search?api_key=eWjPag1jis3sTZkXm5n2UGYWuu0sFbqd&q=hello&limit=25&offset=0&rating=g&lang=en'
    );
    // console.log("res", res);

    // console.log("res data", res.data.data)

    setGif(res.data.data);
  };

  return (
    <div>
      <div>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8NfrKHYJHjf3FxKhrD9OEO17wd6YXGzfs_j3lDUFz7JsGQZR09IyyD9EVo6Z3jxH3MQ&usqp=CAU'
          alt='user_img'
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
      </div>

      <div className='footer_div'>
        <select>
          <option value='only_me'>Only Me</option>
          <option value='friends'>Friends</option>
        </select>
        <button className='footer_btn'>Post</button>
      </div>

      {gif.map((item) => (
        <div className='git-container' key={item.id}>
           <img
            src={item.images.preview_gif.url}
            style={{ width: '100px', height: '100px' }}
            alt='user_img' />        
        </div>
      ))}
    </div>
  );
};

export default Post;
