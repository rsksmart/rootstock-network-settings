"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkSettings = void 0;
class NetworkSettings {
    constructor(_networkUpgradesActivationHeights, _erpDetails, _network) {
        this.networkUpgradesActivationHeights = _networkUpgradesActivationHeights;
        this.erpDetails = _erpDetails;
        this.network = _network;
    }
    getNetworkUpgradesActivationHeights() {
        return this.networkUpgradesActivationHeights;
    }
    getErpDetails() {
        return this.erpDetails;
    }
    getNetworkName() {
        return this.network;
    }
}
exports.NetworkSettings = NetworkSettings;
//# sourceMappingURL=network-settings.js.map