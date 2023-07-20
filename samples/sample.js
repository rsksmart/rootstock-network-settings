const { NetworkUpgrades } = require('../dist/enums/network-upgrades');
const { NETWORKS } = require('../dist/enums/networks');
const lib = require('../dist/index');

let activationHeights = lib.getActivationHeightsForThisNetwork(NETWORKS.MAINNET);
let erpDetails = lib.getErpDetailsForThisNetwork(NETWORKS.MAINNET);

function logActivation(networkUpgrade) {
    console.log( `${NetworkUpgrades[networkUpgrade.toString()]} activated on ${activationHeights.getActivationHeight(networkUpgrade)}`);
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
