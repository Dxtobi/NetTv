import React, { useState } from 'react';
import openai from 'openai';
import OpenAIAPI from 'react-openai-api';
import GenTwit from './GenTwiit';

const TwitApi = () => {
  const [tweet, setTweet] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    

  const handleChange = (event) => {
    setTweet(event.target.value);
  };

  const openAI = new OpenAIAPI({
    apiKey: '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',
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    //openai.apiKey = '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';

    openAI.image.create({
        model: 'image-alpha-001',
        prompt: tweet,
      }).then((response) => {
        setImageUrl(response.data.url);
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