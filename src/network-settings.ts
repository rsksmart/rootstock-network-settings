import { NetworkUpgradesActivationHeights } from './activation-heights/network-upgrades-activation-heights';
import { ErpDetails } from './erp-details/erp-details';

export class NetworkSettings {
  networkUpgradesActivationHeights: NetworkUpgradesActivationHeights;
  erpDetails: ErpDetails;

  getNetworkUpgradesActivationHeights(): NetworkUpgradesActivationHeights {
    return this.networkUpgradesActivationHeights;
  }

  getErpDetails(): ErpDetails {
    return this.erpDetails;
  }

  constructor(_networkUpgradesActivationHeights: NetworkUpgradesActivationHeights, _erpDetails: ErpDetails) {
    this.networkUpgradesActivationHeights = _networkUpgradesActivationHeights;
    this.erpDetails = _erpDetails;
  }
}
