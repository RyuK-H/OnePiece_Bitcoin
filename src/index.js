const axios = require('axios');
const fs = require('fs');
const SpentDromatList = require('../puredata/SpentDormatList.json');

let publicKeyList = [];
let errorAddressList = [];

const writePublicKeyJSON = async () => {
  const PUBKEYLIST = JSON.stringify(publicKeyList);
  const ERRORLIST = JSON.stringify(errorAddressList);

  fs.writeFile(`./data/PUBKEYLIST.json`, PUBKEYLIST, (err) => {
    if (err) {
      throw err;
    }
    console.log('PUBKEYLIST.json data is saved.');
  });

  fs.writeFile(`./data/ERRORLIST.json`, ERRORLIST, (err) => {
    if (err) {
      throw err;
    }
    console.log('ERRORLIST.json data is saved.');
  });
};

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

const findPublicKey = async (address, index) => {
  const spentTX = await getSpentTX(address);

  if (spentTX) {
    const scriptAsm = await getSigscript(address, spentTX);
    const publicKey = scriptAsm.slice(-130); // [ALL] 이라는 string이 포함될 수 있어서 나중에 자르는게 좋음. API 문서가 없어서 어떤 의미인지는 모르겠음
    const data = { ...SpentDromatList[index], PublicKey: publicKey };

    publicKeyList.push(data);
  } else {
    console.log(`${address} No Public Key`);
    errorAddressList.push(address);
  }
};

const loopFindPublicKey = async () => {
  for (let i = 0; i < SpentDromatList.length; i++) {
    console.log(`Look up ${i} / ${SpentDromatList.length} ${SpentDromatList[i].PublicKeyAddress}`);
    await findPublicKey(SpentDromatList[i].PublicKeyAddress, i);
  }

  console.log('Write JSON');
  await writePublicKeyJSON();
};

loopFindPublicKey();
