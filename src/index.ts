import { ActivationHeights, Custom } from './activation-heights/custom';
import { Mainnet } from './activation-heights/mainnet';
import { NetworkUpgradesActivationHeights } from './activation-heights/network-activation-heights';
import { NETWORKS } from './enums/networks';
import { Regtest } from './activation-heights/regtest';
import { Testnet } from './activation-heights/testnet';

export function getActivationHeightsForThisNetwork(network: NETWORKS): NetworkUpgradesActivationHeights {
  switch (network) {
    case NETWORKS.REGTEST:
      return new Regtest();
    case NETWORKS.TESTNET:
      return new Testnet();
    case NETWORKS.MAINNET:
      return new Mainnet();
  }
}

export function getCustomActivationHeights(activationHeights: ActivationHeights): NetworkUpgradesActivationHeights {
  return new Custom(activationHeights);
}
