import { NetworkUpgradesActivationHeights } from './activation-heights/network-upgrades-activation-heights';
import { ErpDetails } from './erp-details/erp-details';
import { NETWORKS } from './enums/networks';
import BridgeConstants from './bridge/bridge-constants';

export class NetworkSettings {
  networkUpgradesActivationHeights: NetworkUpgradesActivationHeights;
  erpDetails: ErpDetails;
  network: NETWORKS;
  bridgeConstants: BridgeConstants;

  getNetworkUpgradesActivationHeights(): NetworkUpgradesActivationHeights {
    return this.networkUpgradesActivationHeights;
  }

  getErpDetails(): ErpDetails {
    return this.erpDetails;
  }

  getNetworkName(): NETWORKS {
    return this.network;
  }

  getBridgeConstants(): BridgeConstants {
    return this.bridgeConstants;
  }

  constructor(
    _networkUpgradesActivationHeights: NetworkUpgradesActivationHeights,
    _erpDetails: ErpDetails,
    _bridgeConstants: BridgeConstants,
    _network: NETWORKS,
  ) {
    this.networkUpgradesActivationHeights = _networkUpgradesActivationHeights;
    this.erpDetails = _erpDetails;
    this.bridgeConstants = _bridgeConstants;
    this.network = _network;
  }
}
