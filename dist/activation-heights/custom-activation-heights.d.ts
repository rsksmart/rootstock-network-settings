import { NetworkUpgradesActivationHeights } from './network-upgrades-activation-heights';
import { NetworkUpgrades } from '../enums/network-upgrades';
export declare type ActivationHeights = {
    orchid: number;
    wasabi: number;
    papyrus: number;
    iris: number;
};
export declare class CustomActivationHeights implements NetworkUpgradesActivationHeights {
    private activationHeights;
    constructor(activationHeights: ActivationHeights);
    getActivationHeight(networkUpgrade: NetworkUpgrades): number;
}
