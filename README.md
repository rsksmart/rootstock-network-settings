[![CI/CD Using Github actions workflow](https://github.com/rsksmart/rsk-network-settings/actions/workflows/workflow.yml/badge.svg)](https://github.com/rsksmart/rsk-network-settings/actions/workflows/workflow.yml)

# Disclaimer

This is a beta version until audited by the security team. Any comments or suggestions feel free to contribute or reach out at our [open slack](https://developers.rsk.co/slack).

# rsk-network-settings

This library exposes the Network settings for the different networks. This includes network upgrades activation heights, and ERP federation details.

## Requirements

As a regular npm library it requires node and npm.

## Usage

Build the library running
```
npm i
npm run pack
```

## Run Sample Code

Once you do this you can use it as the sample shows in [here](samples/sample.js).
```
node sample/sample.js
```

## Details

### ActivationHeights

```
{
    orchid: number,
    wasabi: number,
    papyrus: number,
    iris: number,
}
```

### Networks

```
{
    REGTEST,
    TESTNET,
    MAINNET,
}
```

## Network settings

The library returns a class with methods to get the different network settings for a given network.

```
function getNetworkSettingsForThisNetwork(network: NETWORKS): NetworkSettings
```

## Network upgrades activation heights

The library builds a js object with the definition of the height of each existing network upgrade.


### NetworkUpgradesActivationHeights

This class exposes a method to get the height for each network upgrade.
```
function getActivationHeight(networkUpgrade: NetworkUpgrades): number
```

### getActivationHeightsForThisNetwork

```
function getActivationHeightsForThisNetwork(network: NETWORKS): NetworkUpgradesActivationHeights
```

e.g.
```
    getActivationHeightsForThisNetwork(NETWORKS.REGTEST).getActivationHeight(NetworkUpgrades.orchid) => 0
```

### getCustomActivationHeights

```
function getCustomActivationHeights(activationHeights: ActivationHeights): NetworkUpgradesActivationHeights
```

This method allows to create a custom activation height object (useful for testing and/or private networks).

e.g.
```
    let activationConfig = {
        orchid: 1,
        wasabi: 2,
        papyrus: 3,
        iris: 4,
    };
    getCustomActivationHeights(activationConfig).getActivationHeight(NetworkUpgrades.papyrus) => 3
```

## ERP federation details

The library builds a js object with the details of the ERP federation of the given network.

### ErpDetails

This class exposes a method to get the erp federation public keys, and another method to get the CSV value.
```
function getErpPublicKeys(): Array<string>
function getCsvValue(): string
```

### getErpDetailsForThisNetwork

```
function getErpDetailsForThisNetwork(network: NETWORKS): ErpDetails
```

e.g.
```
    getErpDetailsForThisNetwork(NETWORKS.REGTEST).getErpPublicKeys() => ['0x0', '0x1', '0x2']
```

### getCustomErpDetails

```
function getCustomErpDetails(customDetails: CustomDetails): ErpDetails
```

This method allows to create a custom erp details object (useful for testing and/or private networks).

e.g.
```
    let customDetails = {
        erpPublicKeys: ['0x0', '0x1'],
        csvValue: '90'
    };
    getCustomErpDetails(customDetails).getCsvValue(NetworkUpgrades.papyrus) => '90'
```
