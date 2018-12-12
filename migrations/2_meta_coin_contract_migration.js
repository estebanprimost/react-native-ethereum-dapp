const MetaCoin = artifacts.require('./MetaCoin.sol');
const ConvertLib = artifacts.require('./ConvertLib.sol');

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
};
