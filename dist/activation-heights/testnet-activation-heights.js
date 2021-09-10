"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestnetActivationHeights = void 0;
const network_upgrades_1 = require("../enums/network-upgrades");
class TestnetActivationHeights {
    getActivationHeight(networkUpgrade) {
        switch (networkUpgrade) {
            case network_upgrades_1.NetworkUpgrades.orchid:
                return 0;
            case network_upgrades_1.NetworkUpgrades.wasabi:
                return 0;
            case network_upgrades_1.NetworkUpgrades.papyrus:
                return 863000;
            case network_upgrades_1.NetworkUpgrades.iris:
                return 2060500;
        }
    }
}
exports.TestnetActivationHeights = TestnetActivationHeights;
//# sourceMappingURL=testnet-activation-heights.js.map