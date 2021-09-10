import { NetworkUpgradesActivationHeights } from './network-upgrades-activation-heights';
import { NetworkUpgrades } from '../enums/network-upgrades';

export type ActivationHeights = {
  orchid: number;
  wasabi: number;
  papyrus: number;
  iris: number;
};

export class CustomActivationHeights implements NetworkUpgradesActivationHeights {
  private activationHeights: ActivationHeights;
  constructor(activationHeights: ActivationHeights) {
    this.activationHeights = activationHeights;
  }

  getActivationHeight(networkUpgrade: NetworkUpgrades): number {
    switch (networkUpgrade) {
      case NetworkUpgrades.orchid:
        return this.activationHeights.orchid;
      case NetworkUpgrades.wasabi:
        return this.activationHeights.wasabi;
      case NetworkUpgrades.papyrus:
        return this.activationHeights.papyrus;
      case NetworkUpgrades.iris:
        return this.activationHeights.iris;
    }
  }
}
