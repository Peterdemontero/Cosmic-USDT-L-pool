const Factory = artifacts.require('UniswapV2Factory.sol');
const Cosmic = artifacts.require('Cosmic.sol');
const USDT = artifacts.require('USDT.sol');

module.exports = async function(deployer, _network, addresses) {
    await deployer.deploy(Factory, addresses[0]);
    const factory = await Factory.deployed();

    await deployer.deploy(Cosmic);
    await deployer.deploy(USDT);
    const cosmic = await Cosmic.deployed();
    const usdt = await USDT.deployed();
    await factory.createPair(cosmic.address, usdt.address);
};