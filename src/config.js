// import { configDotenv } from "dotenv";
// configDotenv();

export const API_ROUTE =  import.meta.env.VITE_API_ROUTE ||"http://localhost:3001/api";
export const AUTH_URL = "https://discord.com/oauth2/authorize?client_id=931202912888164474&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&scope=guilds+identify"
export const DISCORD_API_BASE_URL = "https://discord.com/api/v10"
export const DISCORD_AUTHORIZATION_BASE_URL = DISCORD_API_BASE_URL + "/oauth2/authorize"
export const DISCORD_TOKEN_URL = DISCORD_API_BASE_URL + "/oauth2/token"
export const DISCORD_OAUTH_ALL_SCOPES = ["bot", "connections", "email", "identify", "guilds", "guilds.join","gdm.join", "messages.read", "rpc", "rpc.api", "rpc.notifications.read", "webhook.incoming",]
export const DISCORD_OAUTH_DEFAULT_SCOPES = ["identify", "email", "guilds"]
export const DISCORD_PASSTHROUGH_SCOPES = ["bot", "webhook.incoming"]
export const DISCORD_IMAGE_BASE_URL = "https://cdn.discordapp.com/"
export const DISCORD_EMBED_BASE_BASE_URL = "https://cdn.discordapp.com/"
export const DISCORD_EMOJI_URL = "https://cdn.discordapp.com/emojis/"
export const DISCORD_IMAGE_FORMAT = "png"
export const DISCORD_ANIMATED_IMAGE_FORMAT = "gif"
export const DISCORD_USER_AVATAR_BASE_URL = DISCORD_IMAGE_BASE_URL + "avatars/{user_id}/{avatar_hash}.{format}"
export const DISCORD_DEFAULT_USER_AVATAR_BASE_URL = DISCORD_EMBED_BASE_BASE_URL + "embed/avatars/{modulo5}.png"
export const DISCORD_GUILD_ICON_BASE_URL = DISCORD_IMAGE_BASE_URL + "icons/{guild_id}/{icon_hash}.png"
export const DISCORD_USERS_CACHE_DEFAULT_MAX_LIMIT = 100