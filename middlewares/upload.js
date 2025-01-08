//^ The middleware for upload files from fields (for avatars/images)

import multer from "multer";
import path from "path";

// First of all you need put files into temp folder. Where this file will then be moved will be decided in the authController
const __dirname = import.meta.dirname; // here it is path to "middlewares" folder
const tempDir = path.join(__dirname, "../", "temp");

// Settings object for middleware multer:
// const upload = multer({ dest: "uploads/" });
const multerConfig = multer.diskStorage({
  destination: tempDir, // The folder to which the file has been saved

  // The name of the file within the destination (not needs for this example):
  filename: (req, file, cb) => {
    // This fn can save file with a different name (not the name it was received with)
    // file - it is the file received and save in memory but not save at storage
    cb(null, file.originalname); // will save with original name file (In this example the "filename" field is not needs)
    // null - there you can send an error if something goes wrong: cb(new Error('I don't have a clue!'))
  },
});

export const upload = multer({ storage: multerConfig }); // Where to store the files (tempDir + name specified in cb)
