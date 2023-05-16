import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import { extname } from 'path';

export class ConfigMulter {
  static Uploadfiles(): MulterOptions {
    return {
      dest: './uploads',
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          // const randomName = Array(32)
          //   .fill(null)
          //   .map(() => Math.round(Math.random() * 16).toString(16))
          //   .join('');

          cb(null, new Date().getTime() + '-' + file.originalname);
        },
      }),
      fileFilter(req, file, callback) {
        file.filename = file.filename + extname(file.originalname);
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
          file.filename = file.filename + extname(file.originalname);
          callback(null, true);
        } else {
          return callback(
            new Error('Only .png, .jpg, and .jpeg format allowed'),
            false,
          );
        }
      },
      limits: { fileSize: 1 * 1024 * 1024 },
    };
  }
}
