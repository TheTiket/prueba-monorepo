import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BudgetDocument = Budget & Document;

@Schema()
export class Budget {

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  distance: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  price: number;


}

export const BudgetSchema = SchemaFactory.createForClass(Budget);