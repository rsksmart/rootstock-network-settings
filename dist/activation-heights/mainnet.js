"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mainnet = void 0;
const network_upgrades_1 = require("../enums/network-upgrades");
class Mainnet {
    getActivationHeight(networkUpgrade) {
        switch (networkUpgrade) {
            case network_upgrades_1.NetworkUpgrades.orchid:
                return 1052700;
            case network_upgrades_1.NetworkUpgrades.wasabi:
                return 1591000;
            case network_upgrades_1.NetworkUpgrades.papyrus:
                return 2392700;
            case network_upgrades_1.NetworkUpgrades.iris:
                return 3614800;
        }
    }
}
exports.Mainnet = Mainnet;
//# sourceMappingURL=mainnet.js.map