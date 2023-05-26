export class createOrderDto {
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
  boorHotel: {
    hotelId: number;
  };
  boorUser: {
    userId: number;
  };
}
