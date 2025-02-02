// import { configDotenv } from "dotenv";
// configDotenv();

export const INVITE_URL = "https://discord.com/oauth2/authorize?client_id=931202912888164474&permissions=8&scope=bot"

export const API_ROUTE =  import.meta.env.VITE_API_ROUTE ||"/api";
export const AUTH_URL = import.meta.env.VITE_AUTH_URL || `https://discord.com/oauth2/authorize?client_id=931202912888164474&response_type=code&redirect_uri=${location.origin}/api/auth/callback&scope=guilds+identify`;
export const DISCORD_IMAGE_BASE_URL = "https://cdn.discordapp.com/"
export const DISCORD_USER_AVATAR_BASE_URL = DISCORD_IMAGE_BASE_URL + "avatars/{user_id}/{avatar_hash}.{format}"

export const AUTHOR_GITHUB = "https://github.com/hunter87ff"
export const AUTHOR_LINKEDIN = "https://www.linkedin.com/in/hunter87"
export const GITHUB = "https://github.com/hunter87ff/spruce"
export const SUPPORT_SERVER = "https://discord.gg/vMnhpAyFZm"