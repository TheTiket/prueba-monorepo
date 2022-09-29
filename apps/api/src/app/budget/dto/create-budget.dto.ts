import { Budget } from "@prueba-monorepo/models";

export class CreateBudgetDto implements Budget {


  readonly category: string;


  readonly distance: string;


  readonly date: Date;


  readonly address: string;


  readonly price: number;

}
