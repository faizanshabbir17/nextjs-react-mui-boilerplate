export const apiUrl =
  process.env.REACT_APP_API_URL ||
  "https://xgstudios-backend-dev.troondemo.com";

// Routes Constants
export const Routes = {
  LOGIN: "/",
  HOME: "/home",
  DETAIL: "/view",
  BURNNFTS: "/burnNfts",
};
//event id for
export const eventId =
  process.env.REACT_APP_EVENT_ID || "6267ad38a2fd9062d21206c4";

//contract configuration
export const contractAddress =
  process.env.REACT_APP_NFTCONTRACTADDRESS || "0xd9575c84a88eada0";
export const contractName = process.env.REACT_APP_NFTCONTRACTNAME || "XGStudio";

// Login Page Constants
export const loginConstants = {
  YOUR_ACCOUNT_TEXT: "YOUR ACCOUNT",
  SETUP_WALLET_DESC_TEXT:
    "Click below to create your Blocto NFT Wallet and log in",
  BLOCTO_TEXT: "BLOCTO",
  BLOCTO_DESC_TEXT: "Your entrance to the blockchain world",
};

export const buttonConstants = {
  CONNECT_WALLET: "Connect Wallet",
  CLAIM_NFT: "Claim NFT",
  CLAIM_YOUR_NFT: "Claim your NFT",
  VIEW_NFT: "View NFT",
  VIEW_NFT_DETAIL: "View NFT Detail",
  LOADING: "loading...",
};

export const homeConstants = {
  CLAIM_TAB_TEXT: "CLAIM NFT'S",
  COLLECTION_TAB_TEXT: "MY COLLECTION",
};

export const cardConstants = {
  EDITION_TEXT: "EDITION:",
  XG_REWARD_TEXT: "XG REWARD:",
  RACE_NAME_TEXT: "RACE NAME:",
};

export const nftDetailConstants = {
  EDITION_TEXT: "EDITION:",
  XG_REWARD_TEXT: "XG REWARD:",
  DISTANCE_TEXT: "DISTANCE:",
  TIME_TEXT: "TIME:",
  DATE_TEXT: "DATE:",
};

export const footerContants = {
  COPYRIGHT_TEXT: "© 2022 xgstudios.io",
};

export const headerContants = {
  CONNECTED_TEXT: "Connected:",
  LOGOUT_TEXT: "Logout",
};

export const emptyStateContants = {
  NOTHING_CLAIMED_TEXT:
    "You currently have no Rewards to collect. Look for your next challenge",
  NO_COLLECTIONS_TEXT:
    "You currently have no Rewards in your collection. Look for your next challenge",
};
