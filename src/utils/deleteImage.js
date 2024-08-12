import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const deleteFromCloudinary = async (url) => {
  try {
    if (!url) return false;
    const publicId = url.split("/").pop().split(".")[0];

    if (!publicId) return false;

    const response = await cloudinary.uploader.destroy(publicId);
    // console.log(response);

    return response.result === "ok";
  } catch (error) {
    return false;
  }
};

export { deleteFromCloudinary };
