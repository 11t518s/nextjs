import React from 'react';
import axios from 'axios';

function Test() {
  const onPostTestHandler = async () => {
    const response = await axios.get('https://apibora.shop/api/board');
    console.log(response);
  };
  const onImgTestHandler = async (url) => {
    const response = await axios.post('15.164.189.187:8080/', {
      title: 'string',
      category: 'free',
      content: 'string',
      user: 0,
    });

    console.log(response);
  };
  const onFileChagned = (data) => {
    console.log(data);
  };
  return (
    <div>
      <button onClick={onPostTestHandler}>postTestButton</button>
      <button onClick={onImgTestHandler}>ImgTestButton</button>
      <input type="file" onChange={(data) => onFileChagned(data)} />
    </div>
  );
}

export default Test;
