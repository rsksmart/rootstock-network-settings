import { ErpDetails } from './erp-details';

export type CustomDetails = {
  erpPublicKeys: Array<string>;
  csvValue: number;
};

export class CustomErpDetails implements ErpDetails {
  private customDetails: CustomDetails;

  constructor(_customDetails: CustomDetails) {
    this.customDetails = _customDetails;
  }

  getErpPublicKeys(): Array<string> {
    return this.customDetails.erpPublicKeys;
  }

  getCsvValue(): number {
    return this.customDetails.csvValue;
  }
}
