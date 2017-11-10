const WakuWakuCoinCrowdsale = artifacts.require("./WakuWakuCoinCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
    const startTime = 1510307100 // date -d "2017-11-10 09:45" +%s
    const endTime = startTime + (60 * 120) // 120minutes
    const rate = 1000
    const wallet = accounts[0]
    deployer.deploy(WakuWakuCoinCrowdsale, startTime, endTime, rate, wallet)
};
