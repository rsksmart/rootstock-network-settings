import { NetworkUpgradesActivationHeights } from './network-upgrades-activation-heights';
import { NetworkUpgrades } from '../enums/network-upgrades';
export declare class TestnetActivationHeights implements NetworkUpgradesActivationHeights {
    getActivationHeight(networkUpgrade: NetworkUpgrades): number;
}
