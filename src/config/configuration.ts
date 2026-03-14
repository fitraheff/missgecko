export const config = () => ({
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,

  cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
});
