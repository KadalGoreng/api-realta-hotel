import { Address } from 'output/entities/Address';

export class createHotelsDto {
  hotelName: string;
  hotelDescription: string;
  hotelRatingStar: number;
  hotelModifiedDate: Date = new Date();
  hotelAddr: Address;
}

export class updateHotelsDto {
  hotelName: string;
  hotelDescription: string;
  hotelRatingStar: number;
  hotelPhonenumber: string;
  hotelModifiedDate: Date = new Date();
  hotelAddr: Address;
}
