import { NetworkUpgradesActivationHeights } from './network-upgrades-activation-heights';
import { NetworkUpgrades } from '../enums/network-upgrades';
export declare class RegtestActivationHeights implements NetworkUpgradesActivationHeights {
    getActivationHeight(_networkUpgrade: NetworkUpgrades): number;
}
