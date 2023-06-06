import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderMenuDetail } from './OrderMenuDetail';

// @Index('pk_orme_id', ['ormeId'], { unique: true })
@Entity('order_menus', { schema: 'resto' })
export class OrderMenus {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'orme_id' })
  ormeId: number;

  @Column('character varying', {
    name: 'orme_order_number',
    nullable: true,
    length: 20,
  })
  ormeOrderNumber: string | null;

  @Column('timestamp without time zone', {
    name: 'orme_order_date',
    nullable: true,
  })
  ormeOrderDate: Date | null;

  @Column('smallint', { name: 'orme_total_item', nullable: true })
  ormeTotalItem: number | null;

  @Column('money', { name: 'orme_total_discount', nullable: true })
  ormeTotalDiscount: string | null;

  @Column('money', { name: 'orme_total_amount', nullable: true })
  ormeTotalAmount: string | null;

  @Column('character', { name: 'orme_pay_type', nullable: true, length: 100 })
  ormePayType: string | null;

  @Column('character varying', {
    name: 'orme_cardnumber',
    nullable: true,
    length: 25,
  })
  ormeCardnumber: string | null;

  @Column('character', { name: 'orme_is_paid', nullable: true, length: 2 })
  ormeIsPaid: string | null;

  @Column('timestamp without time zone', {
    name: 'orme_modified_date',
    nullable: true,
  })
  ormeModifiedDate: Date | null;

  @Column('integer', { name: 'orme_user_id', nullable: true })
  ormeUserId: number | null;

  @OneToMany(
    () => OrderMenuDetail,
    (orderMenuDetail) => orderMenuDetail.omdeOrme,
  )
  orderMenuDetails: OrderMenuDetail[];
}
