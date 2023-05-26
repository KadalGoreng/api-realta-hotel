import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
} from '@nestjs/common';

@Catch()
export class ErrorHandlerMiddleware implements ExceptionFilter {
  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = 500;
    const message = error.message || 'Internal server error';
    response.status(status).json({
      statusCode: status,
      message: message,
    });
  }
}
