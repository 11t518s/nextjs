import React from 'react';
import axios from 'axios';

function Oauth() {
  const REST_API_KEY = process.env.NEXT_PUBLIC_RESTAPI_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const kakaoAccessCodeUri = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <a href={kakaoAccessCodeUri}>kakaoLogin here</a>

      <div>login here</div>
    </>
  );
}
export default Oauth;
