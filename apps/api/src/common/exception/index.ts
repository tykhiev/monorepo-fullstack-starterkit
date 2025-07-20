import { baseResponseSchema } from "@/common/types/response.types";
import { HTTPException } from "hono/http-exception";
import type { ContentfulStatusCode } from "hono/utils/http-status";

export class BaseException extends HTTPException {
  constructor(
    status: ContentfulStatusCode,
    message: string,
    errorData?: Record<string, unknown>,
  ) {
    super(status, {
      res: Response.json(
        baseResponseSchema.parse({
          status: status,
          success: false,
          message: message,
          data: null,
          errorData,
        }),
        {
          status: status,
        },
      ),
    });
  }
}

// 400 Series (Client Errors)
export class BadRequestException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(400, message ?? "Bad request", errorData);
  }
}

export class UnauthorizedException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(401, message ?? "Unauthorized", errorData);
  }
}

export class PaymentRequiredException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(402, message ?? "Payment required", errorData);
  }
}

export class ForbiddenException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(403, message ?? "Forbidden", errorData);
  }
}

export class NotFoundException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(404, message ?? "Not found", errorData);
  }
}

export class MethodNotAllowedException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(405, message ?? "Method not allowed", errorData);
  }
}

export class ConflictException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(409, message ?? "Conflict", errorData);
  }
}

export class UnsupportedMediaTypeException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(415, message ?? "Unsupported media type", errorData);
  }
}

export class UnprocessableEntityException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(422, message ?? "Unprocessable entity", errorData);
  }
}

export class TooManyRequestsException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(429, message ?? "Too many requests", errorData);
  }
}

// 500 Series (Server Errors)
export class InternalServerErrorException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(500, message ?? "Internal server error", errorData);
  }
}

export class NotImplementedException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(501, message ?? "Not implemented", errorData);
  }
}

export class BadGatewayException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(502, message ?? "Bad gateway", errorData);
  }
}

export class ServiceUnavailableException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(503, message ?? "Service unavailable", errorData);
  }
}

export class GatewayTimeoutException extends BaseException {
  constructor(message?: string, errorData?: Record<string, unknown>) {
    super(504, message ?? "Gateway timeout", errorData);
  }
}
