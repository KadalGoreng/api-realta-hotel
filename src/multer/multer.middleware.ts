import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { extname } from 'path';
import { diskStorage } from 'multer';
export class ConfigMulter {
  static UploadFiles(): MulterOptions {
    return {
      // dest: './uploads',
      // fileFilter(req, file, callback) {
      //   if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      //     file.filename = file.originalname + extname(file.originalname);
      //     callback(null, true);
      //   } else {
      //     return callback(
      //       new Error('Only .png, .jpg, and .jpeg format allowed'),
      //       false,
      //     );
      //   }
      // },
      // limits: { fileSize: 1 * 1024 * 1024 },

      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    };
  }
}
