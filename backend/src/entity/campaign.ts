import { Entity, PrimaryGeneratedColumn, Column, AfterLoad } from "typeorm";

@Entity()
export class Campaign {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ type: 'date' })
    startDate!: Date;

    @Column({ type: 'date' })
    endDate!: Date;

    @Column({ type: 'float' })
    cost!: number;

    @Column({ type: 'float' })
    revenue!: number;

    profit!: number;

    @AfterLoad()
    calculateProfit() {
        this.profit = this.revenue - this.cost;
    }
}
