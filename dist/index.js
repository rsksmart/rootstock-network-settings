"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomActivationHeights = exports.getActivationHeightsForThisNetwork = void 0;
const custom_1 = require("./activation-heights/custom");
const mainnet_1 = require("./activation-heights/mainnet");
const networks_1 = require("./enums/networks");
const regtest_1 = require("./activation-heights/regtest");
const testnet_1 = require("./activation-heights/testnet");
function getActivationHeightsForThisNetwork(network) {
    switch (network) {
        case networks_1.NETWORKS.REGTEST:
            return new regtest_1.Regtest();
        case networks_1.NETWORKS.TESTNET:
            return new testnet_1.Testnet();
        case networks_1.NETWORKS.MAINNET:
            return new mainnet_1.Mainnet();
    }
}
exports.getActivationHeightsForThisNetwork = getActivationHeightsForThisNetwork;
function getCustomActivationHeights(activationHeights) {
    return new custom_1.Custom(activationHeights);
}
exports.getCustomActivationHeights = getCustomActivationHeights;
//# sourceMappingURL=index.js.map