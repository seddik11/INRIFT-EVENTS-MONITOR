import * as fcl from "@onflow/fcl";

import { BlockCursorService } from "../services/block-cursor";
import { FlowService } from "../services/flow";

import { BaseEventHandler } from "./base-event-handler";

import { Voucher } from "../models/listing";

class ListingHandler extends BaseEventHandler {
  private voucherPurchased;
  public IRVoucherAddress;
  public FUSDTokenAddress;

  constructor(
    blockCursorService: BlockCursorService,
    flowService: FlowService,
    IRVoucherAddress: String,
    FUSDTokenAddress: String
  ) {
    super(blockCursorService, flowService, []);
    this.IRVoucherAddress = IRVoucherAddress
    this.FUSDTokenAddress = FUSDTokenAddress

    this.voucherPurchased = `A.${fcl.sansPrefix(
      this.IRVoucherAddress
    )}.IrVoucher.NFTMinted`;

    this.eventNames = [
      this.voucherPurchased,
    ];
  }

  async getTx(transactionId: String) {
    return fcl.tx(transactionId).snapshot()
  }

  async onEvent(event: any): Promise<void> {
    const transactionData = await this.getTx(event.transactionId);
    const transactionEvents = transactionData.events

    let buyer;
    for (let transactionEvent of transactionEvents) {
      if (transactionEvent.type === `A.${fcl.sansPrefix(this.FUSDTokenAddress)}.FUSD.TokensWithdrawn`) {
        buyer = transactionEvent.data.from;
        break;
      }
    }

    // save data

    await Voucher.transaction(async (tx) => {
      return await Voucher.query(tx)
        .insert({
          voucher_id: event.data.id,
          drop_id: event.data.dropID,
          buyer,
          transaction_id: event.transactionId,
        })
        .returning(["voucher_id", "buyer"])
        .then((data) => {
          console.log(`voucher ${data.voucher_id} bought by ${data.buyer}`);

        })
        .catch((e) => {
          console.log(e);
          console.log("don't insert duplicated rows");
        });
    });

  }
}

export { ListingHandler };
