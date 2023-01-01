import React, { useState } from 'react';
import { Configuration, OpenAIApi } from "openai"

//import OpenAIAPI from 'react-openai-api';

const GenTwit = () => {
  const [imageFile, setImageFile] = useState(null);
  const [tweetNature, setTweetNature] = useState('');
  const [tweet, setTweet] = useState('');

  const configuration = new Configuration({
    apiKey:process.env.OPEN_AI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleNatureChange = (event) => {
    setTweetNature(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('prompt', tweetNature);

    openai.createImage({
      model: 'image-alpha-001',
      formData,
    }).then((response) => {
      setTweet(response.data.tweet);
    }).catch((error) => {
        console.log(error)
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Image:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <label>
          Tweet Nature:
          <select value={tweetNature} onChange={handleNatureChange}>
            <option value="">Select one</option>
            <option value="funny">Funny</option>
            <option value="serious">Serious</option>
            <option value="inspirational">Inspirational</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Generate Tweet" />
      </form>
          {tweet && <div className='twit-container'>
              <div className='twit-body'>
                  <div className='twit-header'>
                      <img className='w-20 h-20' alt='' src='https://pbs.twimg.com/profile_images/1580661255739670530/rt1v0Pm6_400x400.jpg' />
                      <div className='text-gray-800'>@programer_dex</div>
                  </div>
                  <p className='twit-text'>{tweet}</p>
              </div>
      </div>}
    </div>
  );
};

export default GenTwit;
