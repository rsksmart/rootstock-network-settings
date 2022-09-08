import { NetworkUpgradesActivationHeights } from './network-upgrades-activation-heights';
import { NetworkUpgrades } from '../enums/network-upgrades';

export class TestnetActivationHeights implements NetworkUpgradesActivationHeights {
  getActivationHeight(networkUpgrade: NetworkUpgrades): number {
    switch (networkUpgrade) {
      case NetworkUpgrades.orchid:
        return 0;
      case NetworkUpgrades.wasabi:
        return 0;
      case NetworkUpgrades.papyrus:
        return 863000;
      case NetworkUpgrades.iris:
        return 2060500;
      case NetworkUpgrades.hop:
        return 3103000;
    }
  }
}
