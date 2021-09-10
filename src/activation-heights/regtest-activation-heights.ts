import { NetworkUpgradesActivationHeights } from './network-upgrades-activation-heights';
import { NetworkUpgrades } from '../enums/network-upgrades';

export class RegtestActivationHeights implements NetworkUpgradesActivationHeights {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getActivationHeight(_networkUpgrade: NetworkUpgrades): number {
    return 0;
  }
}
