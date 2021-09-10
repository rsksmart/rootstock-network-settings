import { expect } from "chai";
import { getActivationHeightsForThisNetwork, getCustomActivationHeights, getCustomErpDetails, getErpDetailsForThisNetwork } from "../src";
import { ActivationHeights } from "../src/activation-heights/custom-activation-heights";
import { NetworkUpgrades } from "../src/enums/network-upgrades";
import { NETWORKS } from "../src/enums/networks";
import { CustomDetails } from "../src/erp-details/custom-erp-details";

describe('Network Upgrades activation heights', () => {
    describe('Default activation heights', () => {
        it('Gets regtest activation heights', () => {
            const activationHeights = getActivationHeightsForThisNetwork(NETWORKS.REGTEST);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.orchid)).to.be.eq(0);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.wasabi)).to.be.eq(0);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.papyrus)).to.be.eq(0);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.iris)).to.be.eq(0);
        });

        it('Gets testnet activation heights', () => {
            const activationHeights = getActivationHeightsForThisNetwork(NETWORKS.TESTNET);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.orchid)).to.be.eq(0);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.wasabi)).to.be.eq(0);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.papyrus)).to.be.eq(863000);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.iris)).to.be.eq(2060500);
        });

        it('Gets mainnet activation heights', () => {
            const activationHeights = getActivationHeightsForThisNetwork(NETWORKS.MAINNET);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.orchid)).to.be.eq(1052700);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.wasabi)).to.be.eq(1591000);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.papyrus)).to.be.eq(2392700);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.iris)).to.be.eq(3614800);
        });
    });

    describe('Custom activation heights', () => {
        it('Allows setting custom activation heights', () => {
            const activationHeightsDefinition: ActivationHeights = {
                orchid: 1,
                wasabi: 2,
                papyrus: 3,
                iris: 4,
            };
            const activationHeights = getCustomActivationHeights(activationHeightsDefinition);

            expect(activationHeights.getActivationHeight(NetworkUpgrades.orchid)).to.be.eq(activationHeightsDefinition.orchid);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.wasabi)).to.be.eq(activationHeightsDefinition.wasabi);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.papyrus)).to.be.eq(activationHeightsDefinition.papyrus);
            expect(activationHeights.getActivationHeight(NetworkUpgrades.iris)).to.be.eq(activationHeightsDefinition.iris);
        });
    });
});

describe('ERP federation details', () => {
    describe('Default erp federation details', () => {
        it('Gets regtest erp federation details', () => {
            const erpDetails = getErpDetailsForThisNetwork(NETWORKS.REGTEST);
            expect(erpDetails.getErpPublicKeys()).to.be.eql([
                '03b9fc46657cf72a1afa007ecf431de1cd27ff5cc8829fa625b66ca47b967e6b24',
                '029cecea902067992d52c38b28bf0bb2345bda9b21eca76b16a17c477a64e43301',
                '03284178e5fbcc63c54c3b38e3ef88adf2da6c526313650041b0ef955763634ebd',
                '03776b1fd8f86da3c1db3d69699e8250a15877d286734ea9a6da8e9d8ad25d16c1',
                '03ab0e2cd7ed158687fc13b88019990860cdb72b1f5777b58513312550ea1584bc'
            ]);
            expect(erpDetails.getCsvValue()).to.be.eq('01F4');
        });

        it('Gets testnet erp federation details', () => {
            const erpDetails = getErpDetailsForThisNetwork(NETWORKS.TESTNET);
            expect(erpDetails.getErpPublicKeys()).to.be.eql([
                '0216c23b2ea8e4f11c3f9e22711addb1d16a93964796913830856b568cc3ea21d3',
                '034db69f2112f4fb1bb6141bf6e2bd6631f0484d0bd95b16767902c9fe219d4a6f',
                '0275562901dd8faae20de0a4166362a4f82188db77dbed4ca887422ea1ec185f14'
            ]);
            expect(erpDetails.getCsvValue()).to.be.eq('CD50');
        });

        it('Gets mainnet erp federation details', () => {
            const erpDetails = getErpDetailsForThisNetwork(NETWORKS.MAINNET);
            expect(erpDetails.getErpPublicKeys()).to.be.eql([
                '0257c293086c4d4fe8943deda5f890a37d11bebd140e220faa76258a41d077b4d4',
                '03c2660a46aa73078ee6016dee953488566426cf55fc8011edd0085634d75395f9',
                '03cd3e383ec6e12719a6c69515e5559bcbe037d0aa24c187e1e26ce932e22ad7b3',
                '02370a9838e4d15708ad14a104ee5606b36caaaaf739d833e67770ce9fd9b3ec80'
            ]);
            expect(erpDetails.getCsvValue()).to.be.eq('CD50');
        });
    });

    describe('Custom erp federation details', () => {
        it('Allows setting custom erp federation details', () => {
            const customErpDetails: CustomDetails = {
                erpPublicKeys: [
                    '0x0',
                    '0x1'
                ],
                csvValue: '99'
            };
            const erpDetails = getCustomErpDetails(customErpDetails);

            expect(erpDetails.getErpPublicKeys()).to.be.eql(customErpDetails.erpPublicKeys);
            expect(erpDetails.getCsvValue()).to.be.eq(customErpDetails.csvValue);
        });
    });
});
