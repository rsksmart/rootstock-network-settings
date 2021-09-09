"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Custom = void 0;
const network_upgrades_1 = require("../enums/network-upgrades");
class Custom {
    constructor(activationHeights) {
        this.activationHeights = activationHeights;
    }
    getActivationHeight(networkUpgrade) {
        switch (networkUpgrade) {
            case network_upgrades_1.NetworkUpgrades.orchid:
                return this.activationHeights.orchid;
            case network_upgrades_1.NetworkUpgrades.wasabi:
                return this.activationHeights.wasabi;
            case network_upgrades_1.NetworkUpgrades.papyrus:
                return this.activationHeights.papyrus;
            case network_upgrades_1.NetworkUpgrades.iris:
                return this.activationHeights.iris;
        }
    }
}
exports.Custom = Custom;
//# sourceMappingURL=custom.js.map