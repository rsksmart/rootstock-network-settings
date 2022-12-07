import { NetworkUpgradesActivationHeights } from './activation-heights/network-upgrades-activation-heights';
import { ErpDetails } from './erp-details/erp-details';
import { NETWORKS } from './enums/networks';

export class NetworkSettings {
  networkUpgradesActivationHeights: NetworkUpgradesActivationHeights;
  erpDetails: ErpDetails;
  network: NETWORKS;

  getNetworkUpgradesActivationHeights(): NetworkUpgradesActivationHeights {
    return this.networkUpgradesActivationHeights;
  }

  getErpDetails(): ErpDetails {
    return this.erpDetails;
  }

  getNetworkName(): NETWORKS {
    return this.network;
  }

  constructor(
    _networkUpgradesActivationHeights: NetworkUpgradesActivationHeights,
    _erpDetails: ErpDetails,
    _network: NETWORKS,
  ) {
    this.networkUpgradesActivationHeights = _networkUpgradesActivationHeights;
    this.erpDetails = _erpDetails;
    this.network = _network;
  }
}
