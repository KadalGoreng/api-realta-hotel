import { ServiceTask } from 'output/entities/ServiceTask';

export class serviceDto {
  setaName: string;
  setSeq: number;
}
export class PaginatedService {
  data: ServiceTask[];
  total: number;
  currentPage: number;
  limit: number;
}

export class PaginationOptions {
  name?: string;
  page: number;
  limit: number;
}
