const config = {
  wordPressUrl: `http://c8t-api.dukinfotech.com.ng`,
}

export const getHeaders = (headers, sessionid, userid) => {
  return Object.assign(headers, {
    cookie: `sessionid=${sessionid}; ds_user_id=${userid}`
  })
}

export const defaultHeaders = {
  'x-ig-capabilities': '3w==',
  'user-agent': 'Instagram 9.5.1 (iPhone9,2; iOS 10_0_2; en_US; en-US; scale=2.61; 1080x1920) AppleWebKit/420+',
  host: 'i.instagram.com'
}

export default config