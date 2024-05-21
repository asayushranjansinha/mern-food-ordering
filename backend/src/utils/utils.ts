import cloudinary from 'cloudinary';

export const uploadToCloudinary = async (file: Express.Multer.File) => {
    try {
        const image = file;

        const base64Image = Buffer.from(image.buffer).toString("base64");
        const dataURI = `data:${image.mimetype};base64,${base64Image}`;
        const uploadResponse = await cloudinary.v2.uploader.upload(dataURI);
        return uploadResponse.url;
    } catch (error) {
        console.log("Error uploading image to Cloudinary: ", error);
        return null;
    }
}