// import { configDotenv } from "dotenv";
// configDotenv();

export const API_ROUTE =  import.meta.env.VITE_API_ROUTE ||"http://localhost:3001/api";
export const AUTH_URL = import.meta.env.VITE_AUTH_URL || `https://discord.com/oauth2/authorize?client_id=931202912888164474&response_type=code&redirect_uri=${location.origin}/api/auth/callback&scope=guilds+identify`;
export const DISCORD_IMAGE_BASE_URL = "https://cdn.discordapp.com/"
export const DISCORD_USER_AVATAR_BASE_URL = DISCORD_IMAGE_BASE_URL + "avatars/{user_id}/{avatar_hash}.{format}"