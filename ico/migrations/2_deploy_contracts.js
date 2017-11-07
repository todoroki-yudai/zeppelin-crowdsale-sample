const WakuWakuCoinCrowdsale = artifacts.require("./WakuWakuCoinCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  // const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1 // one second in the future
  // date -d "2017-11-6 23:35" +%s
  const startTime = 1510066200 // one second in the future
  // const endTime = startTime + (86400 * 20) // 20 days
  const endTime = startTime + (60 * 10) // 10 minutes
  const rate = new web3.BigNumber(1000)
  const wallet = accounts[0]

  deployer.deploy(WakuWakuCoinCrowdsale, startTime, endTime, rate, wallet)
};
