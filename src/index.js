const axios = require('axios');
const allDormatList = require('../data/SpentDromatList.json');

const getSpentTX = async (address) => {
  return await axios
    .get(`https://chain.api.btc.com/v3/address/${address}/tx`)
    .then((res) => {
      let response = res.data.data;
      let spentTX;

      response.list.some((tx) => {
        return tx.inputs.some((data) => {
          if (data.prev_addresses.includes(address)) {
            return (spentTX = tx.hash);
          }
        });
      });

      return spentTX;
    })
    .catch((error) => {
      console.warn(error);
      return undefined;
    });
};

const getSigscript = async (address, tx) => {
  return await axios
    .get(`https://chain.api.btc.com/v3/tx/${tx}?verbose=3`)
    .then((res) => {
      let response = res.data.data;
      let scriptAsm;

      response.inputs.some((data) => {
        if (data.prev_addresses.includes(address)) {
          return (scriptAsm = data.script_asm);
        }
      });

      return scriptAsm;
    })
    .catch((error) => {
      console.warn(error);
      return undefined;
    });
};

const findPublicKey = async (address) => {
  const spentTX = await getSpentTX(address);

  if (spentTX) {
    const scriptAsm = await getSigscript(address, spentTX);
    const publicKey = scriptAsm.slice(-130);

    console.log(publicKey);
  } else {
    console.log(`${address} No Public Key`);
  }
};

findPublicKey('1ChiG4QCNWhGkKQajyRmBobVJdua6hFyoD');
