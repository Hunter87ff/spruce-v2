// import { configDotenv } from "dotenv";
// configDotenv();

export const API_ROUTE =  import.meta.env.VITE_API_ROUTE ||"http://localhost:3001/api";
export const AUTH_URL = "https://discord.com/oauth2/authorize?client_id=931202912888164474&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&scope=guilds+identify"
