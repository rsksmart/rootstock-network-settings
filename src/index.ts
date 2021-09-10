import { ActivationHeights, CustomActivationHeights } from './activation-heights/custom-activation-heights';
import { MainnetActivationHeights } from './activation-heights/mainnet-activation-heights';
import { NetworkUpgradesActivationHeights } from './activation-heights/network-upgrades-activation-heights';
import { NETWORKS } from './enums/networks';
import { RegtestActivationHeights } from './activation-heights/regtest-activation-heights';
import { TestnetActivationHeights } from './activation-heights/testnet-activation-heights';

export function getActivationHeightsForThisNetwork(network: NETWORKS): NetworkUpgradesActivationHeights {
  switch (network) {
    case NETWORKS.REGTEST:
      return new RegtestActivationHeights();
    case NETWORKS.TESTNET:
      return new TestnetActivationHeights();
    case NETWORKS.MAINNET:
      return new MainnetActivationHeights();
  }
}

export function getCustomActivationHeights(activationHeights: ActivationHeights): NetworkUpgradesActivationHeights {
  return new CustomActivationHeights(activationHeights);
}
