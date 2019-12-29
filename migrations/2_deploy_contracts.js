var bankNegara = artifacts.require("./bankNegara.sol");

module.exports = function(deployer) {
  deployer.deploy(bankNegara);
};
