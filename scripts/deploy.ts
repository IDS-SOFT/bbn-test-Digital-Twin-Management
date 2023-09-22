const hre = require("hardhat");

async function main() {
  const [Deployer] = await hre.ethers.getSigners(); 

  console.log("DigitalTwinManagement deployed to:", Deployer.address);

  const digitalTwinManagementFactory = await hre.ethers.getContractFactory("DigitalTwinManagement");
  const digitalTwinManagement = await digitalTwinManagementFactory.deploy("enter address here", "value=null", "code=INVALID_ARGUMENT");

  await digitalTwinManagement.waitForDeployment();

  console.log("DigitalTwinManagement contract deployed to:", digitalTwinManagement.address);

  // Store the contract addresses for later use
  const addresses = {
    digitalTwinManagement: digitalTwinManagement.address,
  };

  // Store the contract addresses in a JSON file for easy access
  const fs = require("fs");
  fs.writeFileSync("deployedAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("Contract addresses written to deployedAddresses.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
