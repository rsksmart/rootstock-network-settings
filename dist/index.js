"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetworkSettingsForThisNetwork = exports.getCustomErpDetails = exports.getErpDetailsForThisNetwork = exports.getCustomActivationHeights = exports.getActivationHeightsForThisNetwork = void 0;
const networks_1 = require("./enums/networks");
const mainnet_activation_heights_1 = require("./activation-heights/mainnet-activation-heights");
const testnet_activation_heights_1 = require("./activation-heights/testnet-activation-heights");
const regtest_activation_heights_1 = require("./activation-heights/regtest-activation-heights");
const custom_activation_heights_1 = require("./activation-heights/custom-activation-heights");
const regtest_erp_details_1 = require("./erp-details/regtest-erp-details");
const testnet_erp_details_1 = require("./erp-details/testnet-erp-details");
const mainnet_erp_details_1 = require("./erp-details/mainnet-erp-details");
const custom_erp_details_1 = require("./erp-details/custom-erp-details");
const network_settings_1 = require("./network-settings");
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
function getErpDetailsForThisNetwork(network) {
    switch (network) {
        case networks_1.NETWORKS.REGTEST:
            return new regtest_erp_details_1.RegtestErpDetails();
        case networks_1.NETWORKS.TESTNET:
            return new testnet_erp_details_1.TestnetErpDetails();
        case networks_1.NETWORKS.MAINNET:
            return new mainnet_erp_details_1.MainnetErpDetails();
    }
}
exports.getErpDetailsForThisNetwork = getErpDetailsForThisNetwork;
function getCustomErpDetails(customDetails) {
    return new custom_erp_details_1.CustomErpDetails(customDetails);
}
exports.getCustomErpDetails = getCustomErpDetails;
function getNetworkSettingsForThisNetwork(network) {
    const networkUpgradesActivationHeights = getActivationHeightsForThisNetwork(network);
    const erpDetails = getErpDetailsForThisNetwork(network);
    return new network_settings_1.NetworkSettings(networkUpgradesActivationHeights, erpDetails, network);
}
exports.getNetworkSettingsForThisNetwork = getNetworkSettingsForThisNetwork;
//# sourceMappingURL=index.js.map