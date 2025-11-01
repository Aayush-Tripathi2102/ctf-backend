const ALPHANUM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const generateCode = (len = 5) => {
  let res = '';
  for (let i = 0; i < len; i++) {
    res += ALPHANUM.charAt(Math.floor(Math.random() * ALPHANUM.length));
  }
  return res;
};
export default generateCode;