import { ActivationHeights } from './activation-heights/custom';
import { NetworkUpgradesActivationHeights } from './activation-heights/network-activation-heights';
import { NETWORKS } from './enums/networks';
export declare function getActivationHeightsForThisNetwork(network: NETWORKS): NetworkUpgradesActivationHeights;
export declare function getCustomActivationHeights(activationHeights: ActivationHeights): NetworkUpgradesActivationHeights;
