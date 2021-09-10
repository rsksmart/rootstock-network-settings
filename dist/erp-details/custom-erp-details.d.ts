import { ErpDetails } from './erp-details';
export declare type CustomDetails = {
    erpPublicKeys: Array<string>;
    csvValue: string;
};
export declare class CustomErpDetails implements ErpDetails {
    private customDetails;
    constructor(_customDetails: CustomDetails);
    getErpPublicKeys(): Array<string>;
    getCsvValue(): string;
}
