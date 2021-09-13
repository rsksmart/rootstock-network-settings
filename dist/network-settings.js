"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkSettings = void 0;
class NetworkSettings {
    constructor(_networkUpgradesActivationHeights, _erpDetails) {
        this.networkUpgradesActivationHeights = _networkUpgradesActivationHeights;
        this.erpDetails = _erpDetails;
    }
    getNetworkUpgradesActivationHeights() {
        return this.networkUpgradesActivationHeights;
    }
    getErpDetails() {
        return this.erpDetails;
    }
}
exports.NetworkSettings = NetworkSettings;
//# sourceMappingURL=network-settings.js.map