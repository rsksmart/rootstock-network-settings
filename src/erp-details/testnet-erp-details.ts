import { ErpDetails } from './erp-details';

export class TestnetErpDetails implements ErpDetails {
  getErpPublicKeys(): Array<string> {
    return [
      '0216c23b2ea8e4f11c3f9e22711addb1d16a93964796913830856b568cc3ea21d3',
      '034db69f2112f4fb1bb6141bf6e2bd6631f0484d0bd95b16767902c9fe219d4a6f',
      '0275562901dd8faae20de0a4166362a4f82188db77dbed4ca887422ea1ec185f14',
    ];
  }

  getCsvValue(): number {
    return 52560; // 50cd00 in signed LE
  }
}
