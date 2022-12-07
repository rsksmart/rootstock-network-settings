import { NetworkUpgradesActivationHeights } from './activation-heights/network-upgrades-activation-heights';
import { ErpDetails } from './erp-details/erp-details';
import { NETWORKS } from './enums/networks';
export declare class NetworkSettings {
    networkUpgradesActivationHeights: NetworkUpgradesActivationHeights;
    erpDetails: ErpDetails;
    network: NETWORKS;
    getNetworkUpgradesActivationHeights(): NetworkUpgradesActivationHeights;
    getErpDetails(): ErpDetails;
    getNetworkName(): NETWORKS;
    constructor(_networkUpgradesActivationHeights: NetworkUpgradesActivationHeights, _erpDetails: ErpDetails, _network: NETWORKS);
}
