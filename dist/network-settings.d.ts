import { NetworkUpgradesActivationHeights } from './activation-heights/network-upgrades-activation-heights';
import { ErpDetails } from './erp-details/erp-details';
export declare class NetworkSettings {
    networkUpgradesActivationHeights: NetworkUpgradesActivationHeights;
    erpDetails: ErpDetails;
    getNetworkUpgradesActivationHeights(): NetworkUpgradesActivationHeights;
    getErpDetails(): ErpDetails;
    constructor(_networkUpgradesActivationHeights: NetworkUpgradesActivationHeights, _erpDetails: ErpDetails);
}
