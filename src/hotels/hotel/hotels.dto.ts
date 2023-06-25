import { Address } from 'output/entities/Address';

export class CreateHotelsDto {
  hotelName: string;
  hotelDescription: string;
  hotelRatingStar: number;
  hotelPhonenumber: string;
  hotelAddr: Address;
}

export class UpdateHotelsDto {
  id: number;
  hotelName: string;
  hotelDescription: string;
  hotelRatingStar: number;
  hotelPhonenumber: string;
  hotelAddr: Address;
}
