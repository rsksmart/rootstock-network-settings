import { NETWORKS } from './enums/networks';
import { NetworkUpgradesActivationHeights } from './activation-heights/network-upgrades-activation-heights';
import { MainnetActivationHeights } from './activation-heights/mainnet-activation-heights';
import { TestnetActivationHeights } from './activation-heights/testnet-activation-heights';
import { RegtestActivationHeights } from './activation-heights/regtest-activation-heights';
import { ActivationHeights, CustomActivationHeights } from './activation-heights/custom-activation-heights';
import { ErpDetails } from './erp-details/erp-details';
import { RegtestErpDetails } from './erp-details/regtest-erp-details';
import { TestnetErpDetails } from './erp-details/testnet-erp-details';
import { MainnetErpDetails } from './erp-details/mainnet-erp-details';
import { CustomErpDetails, CustomDetails } from './erp-details/custom-erp-details';
import { NetworkSettings } from './network-settings';

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

export function getErpDetailsForThisNetwork(network: NETWORKS): ErpDetails {
  switch (network) {
    case NETWORKS.REGTEST:
      return new RegtestErpDetails();
    case NETWORKS.TESTNET:
      return new TestnetErpDetails();
    case NETWORKS.MAINNET:
      return new MainnetErpDetails();
  }
}

export function getCustomErpDetails(customDetails: CustomDetails): ErpDetails {
  return new CustomErpDetails(customDetails);
}

export function getNetworkSettingsForThisNetwork(network: NETWORKS): NetworkSettings {
  const networkUpgradesActivationHeights = getActivationHeightsForThisNetwork(network);
  const erpDetails = getErpDetailsForThisNetwork(network);

  return new NetworkSettings(networkUpgradesActivationHeights, erpDetails, network);
}
