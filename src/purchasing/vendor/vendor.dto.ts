export class CreateVendorDto {
  vendorName: string;
  vendorActive: number;
  vendorPriority: number;
  vendorWeburl: string;
  vendorRegisterDate: Date = new Date();
}

export class UpdateVendorDto {
  vendorId: number;
  vendorName: string;
  vendorActive: number;
  vendorPriority: number;
  vendorWeburl: string;
  vendorRegisterDate: Date = new Date();
}

export class PaginationOptions {
  vendorName?: string;
  status?: number;
  page: number;
  limit: number;
}
