const RambodToken = artifacts.require("./RambodToken.sol");

module.exports = function (deployer) {
    deployer.deploy(RambodToken);
};
