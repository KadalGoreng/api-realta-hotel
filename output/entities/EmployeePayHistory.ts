import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Employee } from './Employee';

@Index('pk_ephi_id', ['ephiRateChangeDate'], { unique: true })
@Entity('employee_pay_history', { schema: 'hr' })
export class EmployeePayHistory {
  @Column({
    type: 'timestamp without time zone',
    default: 'NOW()',
    primary: true,
    name: 'ephi_rate_change_date',
  })
  ephiRateChangeDate: Date;

  @Column('money', { name: 'ephi_rate_salary', nullable: true })
  ephiRateSalary: string | null;

  @Column('smallint', { name: 'ephi_pay_frequence', nullable: true })
  ephiPayFrequence: number | null;

  @Column('timestamp without time zone', {
    name: 'ephi_modified_date',
    nullable: true,
  })
  ephiModifiedDate: Date | null;

  @ManyToOne(() => Employee, (employee) => employee.employeePayHistories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ephi_emp_id', referencedColumnName: 'empId' }])
  ephiEmp: Employee;
}
