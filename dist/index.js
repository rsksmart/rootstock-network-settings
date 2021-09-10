"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomActivationHeights = exports.getActivationHeightsForThisNetwork = void 0;
const custom_activation_heights_1 = require("./activation-heights/custom-activation-heights");
const mainnet_activation_heights_1 = require("./activation-heights/mainnet-activation-heights");
const networks_1 = require("./enums/networks");
const regtest_activation_heights_1 = require("./activation-heights/regtest-activation-heights");
const testnet_activation_heights_1 = require("./activation-heights/testnet-activation-heights");
function getActivationHeightsForThisNetwork(network) {
    switch (network) {
        case networks_1.NETWORKS.REGTEST:
            return new regtest_activation_heights_1.RegtestActivationHeights();
        case networks_1.NETWORKS.TESTNET:
            return new testnet_activation_heights_1.TestnetActivationHeights();
        case networks_1.NETWORKS.MAINNET:
            return new mainnet_activation_heights_1.MainnetActivationHeights();
    }
}
exports.getActivationHeightsForThisNetwork = getActivationHeightsForThisNetwork;
function getCustomActivationHeights(activationHeights) {
    return new custom_activation_heights_1.CustomActivationHeights(activationHeights);
}
exports.getCustomActivationHeights = getCustomActivationHeights;
//# sourceMappingURL=index.js.map