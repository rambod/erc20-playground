const RambodToken = artifacts.require("./RambodToken.sol");

contract('RambodToken',function (accounts){
    it('Sets the total supply upon deployment', function () {
        return RambodToken.deployed().then(function (instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function (totalSupply){
            assert.equal(totalSupply.toNumber(),90000,'Set Total Supply to 90000')
        })
    });
})
