import { expect } from "chai";
import { getActivationHeightsForThisNetwork, getCustomActivationHeights } from "../src";
import { ActivationHeights } from "../src/activation-heights/custom";
import { NetworkUpgrades } from "../src/enums/network-upgrades";
import { NETWORKS } from "../src/enums/networks";

describe('Network Upgrades activation heights', () => {
    describe('Default activation heights', () => {
        it('Gets regtest activation heights', () => {
            let activationheights = getActivationHeightsForThisNetwork(NETWORKS.REGTEST);
            expect(activationheights.getActivationHeight(NetworkUpgrades.orchid)).to.be.eq(0);
            expect(activationheights.getActivationHeight(NetworkUpgrades.wasabi)).to.be.eq(0);
            expect(activationheights.getActivationHeight(NetworkUpgrades.papyrus)).to.be.eq(0);
            expect(activationheights.getActivationHeight(NetworkUpgrades.iris)).to.be.eq(0);
        });

        it('Gets testnet activation heights', () => {
            let activationheights = getActivationHeightsForThisNetwork(NETWORKS.TESTNET);
            expect(activationheights.getActivationHeight(NetworkUpgrades.orchid)).to.be.eq(0);
            expect(activationheights.getActivationHeight(NetworkUpgrades.wasabi)).to.be.eq(0);
            expect(activationheights.getActivationHeight(NetworkUpgrades.papyrus)).to.be.eq(863000);
            expect(activationheights.getActivationHeight(NetworkUpgrades.iris)).to.be.eq(2060500);
        });

        it('Gets mainnet activation heights', () => {
            let activationheights = getActivationHeightsForThisNetwork(NETWORKS.MAINNET);
            expect(activationheights.getActivationHeight(NetworkUpgrades.orchid)).to.be.eq(1052700);
            expect(activationheights.getActivationHeight(NetworkUpgrades.wasabi)).to.be.eq(1591000);
            expect(activationheights.getActivationHeight(NetworkUpgrades.papyrus)).to.be.eq(2392700);
            expect(activationheights.getActivationHeight(NetworkUpgrades.iris)).to.be.eq(3614800);
        });
    });

    describe('Custom activation heights', () => {
        it('Allows setting custom activation heights', () => {
            let activationheightsDefinition: ActivationHeights = {
                orchid: 1,
                wasabi: 2,
                papyrus: 3,
                iris: 4,
            };
            let activationHeights = getCustomActivationHeights(activationheightsDefinition);

            expect(activationHeights.getActivationHeight(NetworkUpgrades.orchid)).to.be.eq(activationheightsDefinition.orchid);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.wasabi)).to.be.eq(activationheightsDefinition.wasabi);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.papyrus)).to.be.eq(activationheightsDefinition.papyrus);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.iris)).to.be.eq(activationheightsDefinition.iris);
        });
    });
});
