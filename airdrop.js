// import { clusterApiUrl, Connectino } from '@solana/web3.js'

const solana = require("@solana/web3.js");

const a = async () => {
  const connection = new solana.Connection(
    solana.clusterApiUrl("devnet"),
    "confirmed"
  );

  let keypair = solana.Keypair.generate();
  let publicKey = keypair.publicKey;
  let tokenAmount = await connection.getBalance(publicKey);
  console.log(`amount : ${tokenAmount}`);

  const airdropSignature = await connection.requestAirdrop(
    publicKey,
    2 * solana.LAMPORTS_PER_SOL
  );

  await connection.confirmTransaction(airdropSignature);

  tokenAmount = await connection.getBalance(publicKey);
  console.log(`amount : ${tokenAmount}`);
  // console.log(`decimals : ${tokenAmount.value.decimals}`);
};

a();

// console.log(keypair.publicKey)
