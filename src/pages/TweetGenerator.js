import React, { useState } from 'react';
//import openai from 'openai';
//import OpenAIAPI from 'react-openai-api';
import GenTwit from './GenTwiit';
import { Configuration, OpenAIApi } from "openai"

const TwitApi = () => {
  const [tweet, setTweet] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    

  const handleChange = (event) => {
    setTweet(event.target.value);
  };

  

  const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const handleSubmit = (event) => {
    event.preventDefault();

    

    openai.createCompletion({
        model: 'image-alpha-001',
        prompt: tweet,
      }).then((response) => {
        setImageUrl(response.data.url);
      }).catch((error) => {
          console.log(error)
      });
  };

  return (
    <div className='pt-[100px] -z-10 flex flex-col m-auto twitter-api-div'>
        <div className='page-header-twit'>
            Get A Photo for your twit
        </div>
      <form className='twitter-form' onSubmit={handleSubmit}>
        <div className='form-input-div'>
         <div>Your Twit idea</div>
          <input type="text" value={tweet} onChange={handleChange} className='twit-idea-input'/>
        </div>
        <input type="submit" value="Generate Image"  className='twit-img-generate-btn'/>
      </form>
          {imageUrl && <img src={imageUrl} alt="Generated" className='twit-generated-img' />}
        
          <div className='divider' />
          <GenTwit/>
    </div>
  );
};

export default TwitApi;