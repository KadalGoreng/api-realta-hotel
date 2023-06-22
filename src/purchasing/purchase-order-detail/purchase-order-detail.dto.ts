import { Stocks } from 'output/entities/Stocks';

export class CreatePurchaseOrderDetailDto {
  podePoheId: number;
  podeOrderQty: number;
  podePrice: string;
  podeLineTotal: string;
  podeReceivedQty: string;
  podeRejectedQty: string;
  podeStockedQty: string;
  podeStock: Stocks;
}

export class UpdatePurchaseOrderDetailDto {
  podePoheId: number;
  podeId: number;
  podeOrderQty: number;
  podePrice: string;
  podeLineTotal: string;
  podeReceivedQty: string;
  podeRejectedQty: string;
  podeStockedQty: string;
  podeStock: Stocks;
}
