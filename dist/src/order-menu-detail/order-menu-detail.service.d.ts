import { Repository } from 'typeorm';
import { OrderMenuDetail } from '../../output/entities/OrderMenuDetail';
export declare class OrderMenuDetailService {
    private orderMenuDetailRepository;
    constructor(orderMenuDetailRepository: Repository<OrderMenuDetail>);
    findAllOrderMenuDetail(): Promise<any>;
    findOneOrderMenuDetail(omde_id: number): Promise<any>;
    createOrderMenusDetail(data: OrderMenuDetail): Promise<any>;
    updateOrdeMenuDetail(id: number, data: OrderMenuDetail): Promise<any>;
    deleteOrdeMenuDetail(id: number): Promise<any>;
}
