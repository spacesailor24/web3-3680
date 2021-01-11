const Web3 = require("web3");
const abi = require("./abi.json");

const web3 = new Web3(
  new Web3.providers.HttpProvider(
    `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`
  )
);
const address = "0x0825f16598AcB518851f8959b8267EF296c57f81";

const contract = new web3.eth.Contract(abi, address);

(async () => {
  const data = await contract.getPastEvents("MetaEvidence", {
    filter: { _metaEvidenceID: "28" },
    fromBlock: 0,
  });
  console.log(data)
})();