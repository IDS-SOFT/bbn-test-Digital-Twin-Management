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
  
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
