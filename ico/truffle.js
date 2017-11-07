module.exports = {
  networks: {
    testnet: {
      host: "geth",
      port: 8545,
      from: "0xd7331c8c1bd98566419436b817aaa001ffc55704",
      gas: 4000000,
      network_id: "3" // ROPSTEN
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
