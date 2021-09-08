import { NetworkUpgradesActivationHeights } from './network-activation-heights';
import { NetworkUpgrades } from '../enums/network-upgrades';
export declare type ActivationHeights = {
    orchid: number;
    wasabi: number;
    papyrus: number;
    iris: number;
};
export declare class Custom implements NetworkUpgradesActivationHeights {
    private activationHeights;
    constructor(activationHeights: ActivationHeights);
    getActivationHeight(networkUpgrade: NetworkUpgrades): number;
}
