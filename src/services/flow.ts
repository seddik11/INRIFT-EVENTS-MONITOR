import * as fcl from "@onflow/fcl";

class FlowService {
  constructor(
  ) { }

  async getLatestBlockHeight() {
    const block = await fcl.send([fcl.getBlock(true)]);
    const decoded = await fcl.decode(block);
    return decoded.height;
  }
}

export { FlowService };
