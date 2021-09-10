import { ActivationHeights } from './activation-heights/custom-activation-heights';
import { NetworkUpgradesActivationHeights } from './activation-heights/network-upgrades-activation-heights';
import { NETWORKS } from './enums/networks';
export declare function getActivationHeightsForThisNetwork(network: NETWORKS): NetworkUpgradesActivationHeights;
export declare function getCustomActivationHeights(activationHeights: ActivationHeights): NetworkUpgradesActivationHeights;
