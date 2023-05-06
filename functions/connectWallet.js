import { ethers } from "ethers";

export async function connectWallet({ setAddress }) {
  // Connect to Ethereum network using Metamask provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // Request access to user's Metamask account
  await window.ethereum.request({ method: "eth_requestAccounts" });

  // Get user's account address
  const signer = provider.getSigner();
  const address = await signer.getAddress();

  setAddress(address);
}
