import { NetworkUpgradesActivationHeights } from './network-upgrades-activation-heights';
import { NetworkUpgrades } from '../enums/network-upgrades';

export class MainnetActivationHeights implements NetworkUpgradesActivationHeights {
  getActivationHeight(networkUpgrade: NetworkUpgrades): number {
    switch (networkUpgrade) {
      case NetworkUpgrades.orchid:
        return 1052700;
      case NetworkUpgrades.wasabi:
        return 1591000;
      case NetworkUpgrades.papyrus:
        return 2392700;
      case NetworkUpgrades.iris:
        return 3614800;
      case NetworkUpgrades.hop:
        return 4598500;
    }
  }
}
