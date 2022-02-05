import React, { useState } from 'react';
import axios from 'axios';

function Test() {
  const [apiTest, setApiTest] = useState({});

  const onPostTestHandler = async () => {
    const response = await axios.get('http://15.164.189.187:8080/api/board/14');
    console.log(response);
  };

  const test = () => {
    console.log('test');
  };

  const onFileChagned = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    const img = await e.target.files[0];
    await formData.append('image', img);
    formData.append('title', 'asdasdasd');
    formData.append('category', 'free');
    formData.append('user', '1');
    formData.append('tag', 'ENFP');
    formData.append('content', 'asdf');
    console.log(formData);

    await axios.post('http://15.164.189.187:8080/api/board', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  return (
    <>
      {/*<form>*/}
      <button>asdfasdf</button>
      <input type="file" onChange={(data) => onFileChagned(data)} />
      <input type="submit" />
      {/*</form>*/}
      <button onClick={onPostTestHandler}>111111111</button>
    </>
  );
}

export default Test;
