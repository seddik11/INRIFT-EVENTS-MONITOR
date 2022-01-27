import { BaseModel } from "./base"

class Voucher extends BaseModel {
  voucher_id!: number;
  drop_id!: number;
  buyer!: string;
  transaction_id!: string;

  static get tableName() {
    return "vouchers";
  }
}

export { Voucher }
