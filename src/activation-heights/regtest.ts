import { NetworkUpgradesActivationHeights } from './network-activation-heights';
import { NetworkUpgrades } from '../enums/network-upgrades';

export class Regtest implements NetworkUpgradesActivationHeights {
  getActivationHeight(networkUpgrade: NetworkUpgrades): number {
    return 0;
  }
}
