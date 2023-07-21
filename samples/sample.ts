import { NetworkUpgrades } from '../src/enums/network-upgrades';
import { NETWORKS }  from '../src/enums/networks';
import * as lib from '../src/index';

const activationHeights = lib.getActivationHeightsForThisNetwork(NETWORKS.MAINNET);
const erpDetails = lib.getErpDetailsForThisNetwork(NETWORKS.MAINNET);

function logActivation(networkUpgrade : NetworkUpgrades) {
    console.log( `${NetworkUpgrades[networkUpgrade]} activated on ${activationHeights.getActivationHeight(networkUpgrade)}`);
}

function logErpDetails() {
    console.log(`ERP public keys: ${erpDetails.getErpPublicKeys()}`);
    console.log(`ERP csv value: ${erpDetails.getCsvValue()}`);
}

logActivation(NetworkUpgrades.orchid);
logActivation(NetworkUpgrades.wasabi);
logActivation(NetworkUpgrades.papyrus);
logActivation(NetworkUpgrades.iris);
logActivation(NetworkUpgrades.hop);
logActivation(NetworkUpgrades.fingerroot);

logErpDetails();
