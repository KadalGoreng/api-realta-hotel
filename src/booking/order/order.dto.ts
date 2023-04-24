import { BookingOrderDetail } from 'output/entities/BookingOrderDetail';
import { Hotels } from 'output/entities/Hotels';

export class createOrderDto {
  boorId: number;
  boorOrderNumber: string;
  boorOrderDate: Date;
  boorArrivalDate: Date;
  boorTotalRoom: number;
  boorTotalGuest: number;
  boorDiscount: string;
  boorTotalTax: string;
  boorTotalAmount: string;
  boorDownPayment: string;
  boorPayType: string;
  boorIsPaid: string;
  boorType: string;
  boorCardnumber: string;
  boorMemberType: string;
  boorStatus: string;
  bookingOrderDetail: BookingOrderDetail;
  boorHotel: Hotels;
}
