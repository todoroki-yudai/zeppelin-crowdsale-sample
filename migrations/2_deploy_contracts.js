const WakuWakuCoinCrowdsale = artifacts.require("./WakuWakuCoinCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
    const startTime = 1509804000 // 2017-11-04 23:00:00
    const endTime = startTime + (60 * 10) // 10 minutes
    const rate = 1000
    const wallet = accounts[0]
    deployer.deploy(WakuWakuCoinCrowdsale, startTime, endTime, rate, wallet)
};
