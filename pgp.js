import { generateKey } from 'openpgp/lightweight';

// await generate();
// async function generate() {
//   const { privateKeyArmored, publicKeyArmored } = await openpgp.generateKey({
//     userIds: [{ name: "micku", email: "mickuraj.gzb@gmail.com" }],
//     curve: "ed25519",
//     passphrase: "qwerty",
//   });
//   console.log(privateKeyArmored);
//   console.log(publicKeyArmored);
// }


 generateKey({ curve: 'brainpoolP512r1',  userIDs: [{ name: 'micku', email: 'mickuraj.gzb@gmail.com' }] });

