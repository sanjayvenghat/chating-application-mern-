import jwt from 'jsonwebtoken';

const generateJwtTokenAndSecretKey = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRETKEY, {
    expiresIn: '15d', // Token expiry is 15 days
  });

  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // Cookie expiration time in milliseconds (15 days)
    httpOnly: true,
    secure: true,
  }); 
  return  token
};



export default generateJwtTokenAndSecretKey;
