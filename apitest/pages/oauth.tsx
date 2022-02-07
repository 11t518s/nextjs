import React, { useEffect } from 'react';
import axios from 'axios';

function Oauth() {
  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_RESTAPI_KEY;
  const KAKAO_CLIENT_SECRET = process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET;

  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const GOOGLE_CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET;

  const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

  const kakaoAccessCodeUri = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // 카카오 인가 코드를 받고 나서 회원가입 or 로그인 진행
  const getKakaoToken = async () => {
    const kakaoAccessCode = await new URL(
      window.location.href,
    ).searchParams.get('code');

    if (kakaoAccessCode) {
      const kakaoAccessToken = await axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&code=${kakaoAccessCode}&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&client_secret=${KAKAO_CLIENT_SECRET}`,
      );

      console.log(kakaoAccessToken);
      const {
        data: { access_token },
      } = kakaoAccessToken;
      await axios
        .post(
          'http://15.164.189.187:8080/api/login/kakao',
          {
            access_token,
          },
          { withCredentials: true },
        )
        .then((res) => console.log(res));
    }
  };
  const getGoogleToken = async () => {
    const googleAccessCode = await new URL(
      window.location.href,
    ).searchParams.get('code');
    console.log(googleAccessCode);
    if (googleAccessCode) {
      const googleAccessToken = await axios.post(
        `https://oauth2.googleapis.com/token?code=${googleAccessCode}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&grant_type=authorization_code`,
      );

      const {
        data: { access_token },
      } = googleAccessToken;
      await axios
        .post(
          'http://15.164.189.187:8080/api/login/google',
          {
            access_token,
          },
          { withCredentials: true },
        )
        .then((res) => console.log(res));
    }
  };

  useEffect(() => {
    // getKakaoToken();
    getGoogleToken();
  }, []);

  const GoogleAccessCodeUri = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;

  return (
    <>
      <a href={kakaoAccessCodeUri}>kakaoLogin here</a>

      <div>login here</div>

      <a href={GoogleAccessCodeUri}>google login here</a>
    </>
  );
}
export default Oauth;
