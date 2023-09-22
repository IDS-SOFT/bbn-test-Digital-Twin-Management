import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
import { ethers } from "ethers";
const hre = require("hardhat");
const digitalTwinManagement = require("./../artifacts/contracts/DigitalTwin_Management.sol/digitalTwinManagement.json");

const contractAddress: string = process.env.CONTRACT_ADDRESS || "";
const contractABI: any[] = digitalTwinManagement.abi;

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_NODE_URL || "");
  const signer = await hre.ethers.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  try {
    // Call functions here
    const createtwin = await contract.createTwin("ABc","xyz",123);
  await createtwin.wait();
  console.log("product created");
  console.log("The transaction hash is:", createtwin.hash);
  const receipt = await createtwin.wait();
  console.log(
    "The transaction returned the following transaction receipt:\n",
    receipt,
  );
    
    /*const createAccountTx = await contract.createAccount();
    await createAccountTx.wait();

    console.log("Account Created", signer.getAddress());
    const accountBalance = await contract.accounts(signer.getAddress());
    console.log("Account Balance:", accountBalance.toString()); // Convert BigNumber to string

    const accountCount = await contract.getAccountCount();
    console.log("Account Count:", accountCount.toString()); // Convert BigNumber to string

    const accountAddresses = [];
    for (let i = 0; i < accountCount; i++) {
      const addressAtIndex = await contract.getAccountAtIndex(i);
      accountAddresses.push(addressAtIndex);
    }
    console.log("Account Addresses:", accountAddresses);
    console.log("Check your transaction on BBN Testnet:", `http://testnet.bharatblockchain.io/address/${contractAddress}`);
  
*/
  } catch (error) {
    console.error("Error:", error);
  }
}

main();