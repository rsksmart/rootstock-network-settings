"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkSettings = void 0;
class NetworkSettings {
    getNetworkUpgradesActivationHeights() {
        return this.networkUpgradesActivationHeights;
    }
    getErpDetails() {
        return this.erpDetails;
    }
    getNetworkName() {
        return this.network;
    }
    constructor(_networkUpgradesActivationHeights, _erpDetails, _network) {
        this.networkUpgradesActivationHeights = _networkUpgradesActivationHeights;
        this.erpDetails = _erpDetails;
        this.network = _network;
    }
}
exports.NetworkSettings = NetworkSettings;
//# sourceMappingURL=network-settings.js.map