const { NetworkUpgrades } = require('../dist/enums/network-upgrades');
const { NETWORKS } = require('../dist/enums/networks');
const lib = require('../dist/index');

let activationHeights = lib.getActivationHeightsForThisNetwork(NETWORKS.MAINNET);

function logActivation(networkUpgrade) {
    console.log( `${NetworkUpgrades[networkUpgrade.toString()]} activated on ${activationHeights.getActivationHeight(networkUpgrade)}`);
} 

logActivation(NetworkUpgrades.orchid);
logActivation(NetworkUpgrades.wasabi);
logActivation(NetworkUpgrades.papyrus);
logActivation(NetworkUpgrades.iris);