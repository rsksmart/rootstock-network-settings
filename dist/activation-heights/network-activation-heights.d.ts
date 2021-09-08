import { NetworkUpgrades } from '../enums/network-upgrades';
export interface NetworkUpgradesActivationHeights {
    getActivationHeight(networkUpgrade: NetworkUpgrades): number;
}
