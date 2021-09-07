# rsk-network-upgrades

This library exposes the Network upgrades activation heights for the different networks.

## Requirements

As a regular npm library it requires node and npm.

## Usage

Build the library running
```
npm run pack
```

Once you do this you can use it as the sample shows in [here](samples/sample.js).

## Details

The library builds a js object with the definition of the height of each existing network upgrade.

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
