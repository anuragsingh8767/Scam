import dotenv from 'dotenv'
dotenv.config();

export default {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRATION: process.env.JWT_EXPIRY,
  ARIES_ADMIN_URL: process.env.ARIES_ADMIN_URL || process.env.ARIES_ADMIN_API_URL,
  ARIES_ADMIN_API_KEY: process.env.ARIES_ADMIN_API_KEY,
  BRIDGE_URL: process.env.BRIDGE_URL,
  ETH_RPC_URL:process.env.ETH_RPC_URL
};

console.log(process.env.MONGODB_URL)
console.log("Environment Variables:")
console.log("ARIES_ADMIN_URL:", process.env.ARIES_ADMIN_URL)
console.log("ARIES_ADMIN_API_URL:", process.env.ARIES_ADMIN_API_URL)
console.log("Combined value:", process.env.ARIES_ADMIN_URL || process.env.ARIES_ADMIN_API_URL)