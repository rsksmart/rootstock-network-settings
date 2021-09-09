import { NetworkUpgradesActivationHeights } from './network-activation-heights';
import { NetworkUpgrades } from '../enums/network-upgrades';

export class Regtest implements NetworkUpgradesActivationHeights {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getActivationHeight(_networkUpgrade: NetworkUpgrades): number {
    return 0;
  }
}
