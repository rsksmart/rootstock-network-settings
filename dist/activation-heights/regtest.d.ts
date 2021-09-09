import { NetworkUpgradesActivationHeights } from './network-activation-heights';
import { NetworkUpgrades } from '../enums/network-upgrades';
export declare class Regtest implements NetworkUpgradesActivationHeights {
    getActivationHeight(_networkUpgrade: NetworkUpgrades): number;
}
