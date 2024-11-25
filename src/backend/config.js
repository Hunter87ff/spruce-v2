export const BASE_URL = "http://localhost:3001"
export const DISCORD_API_BASE_URL = "https://discord.com/api/v10"
export const DISCORD_AUTHORIZATION_BASE_URL = DISCORD_API_BASE_URL + "/oauth2/authorize"
export const DISCORD_TOKEN_URL = DISCORD_API_BASE_URL + "/oauth2/token"
export const DISCORD_OAUTH_ALL_SCOPES = ["bot", "connections", "email", "identify", "guilds", "guilds.join","gdm.join", "messages.read", "rpc", "rpc.api", "rpc.notifications.read", "webhook.incoming",]
export const DISCORD_OAUTH_DEFAULT_SCOPES = ["identify", "email", "guilds"]
export const DISCORD_PASSTHROUGH_SCOPES = ["bot", "webhook.incoming",]
export const DISCORD_IMAGE_BASE_URL = "https://cdn.discordapp.com/"
export const DISCORD_EMBED_BASE_BASE_URL = "https://cdn.discordapp.com/"
export const DISCORD_EMOJI_URL = "https://cdn.discordapp.com/emojis/"
export const DISCORD_IMAGE_FORMAT = "png"
export const DISCORD_ANIMATED_IMAGE_FORMAT = "gif"
export const DISCORD_USER_AVATAR_BASE_URL = DISCORD_IMAGE_BASE_URL + "avatars/{user_id}/{avatar_hash}.{format}"
export const DISCORD_DEFAULT_USER_AVATAR_BASE_URL = DISCORD_EMBED_BASE_BASE_URL + "embed/avatars/{modulo5}.png"
export const DISCORD_GUILD_ICON_BASE_URL = DISCORD_IMAGE_BASE_URL + "icons/{guild_id}/{icon_hash}.png"
export const DISCORD_USERS_CACHE_DEFAULT_MAX_LIMIT = 100

const DISCORD_SESSION = "https://discord.com/oauth2/authorize?response_type=code&client_id=931202912888164474&redirect_uri=https%3A%2F%2Fsprucbot.tech%2Fcallback&scope=identify+email+guilds"
// &state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWRpcmVjdCI6Imh0dHA6Ly9zcHJ1Y2JvdC50ZWNoL2Rhc2hib2FyZC8iLCJfX3N0YXRlX3NlY3JldF8iOiJvclBhdDRRcGVtVkZqWFc1NG1TMzdDOHdVUFIxMXMifQ.XYZIO2q1PtQC1QWzA_uPkuXRB4R4_rY-xDddnxIOiZA&prompt=consent