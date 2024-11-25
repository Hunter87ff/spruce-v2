import { OAuth2Session } from 'requests-oauthlib';


/**
 * An OAuth2 HTTP abstract base class providing some factory methods.
 * This class is meant to be overridden by `Session` and should not be
 * used directly.
 * 
 * @class DiscordOAuth2HttpClient
 * @property {Array<string>} SESSION_KEYS - An array of session keys used for Discord OAuth2.
 */
export class DiscordOAuth2HttpClient{

    SESSION_KEYS = [
        "DISCORD_USER_ID",
        "DISCORD_OAUTH2_STATE",
        "DISCORD_OAUTH2_TOKEN",
    ]
    constructor(app = null, client_id = null, client_secret = null, redirect_uri = null, bot_token = null, users_cache = null, proxy = null, proxy_auth = null) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.redirect_uri = redirect_uri;
        this.bot_token = bot_token;
        this.users_cache = users_cache;
        this.proxy = proxy;
        this.proxy_auth = proxy_auth;
        this.guilds = {};

        if (app !== null) {
            this.initApp(app);
        }
    }

    _fetch_token(state) {
        const discord = this._make_session({ state: state });
        return discord.fetch_token(
            configs.DISCORD_TOKEN_URL,
            { client_secret: this.client_secret, authorization_response: request.url }
        );
    }

    _make_session(token = null, state = null, scope = null) {
        /**
         * A low level method used for creating OAuth2 session.
         *
         * @param {string} [token] - The authorization token to use which was previously received from authorization code grant.
         * @param {string} [state] - The state to use for OAuth2 session.
         * @param {Array<string>} [scope] - List of valid `Discord OAuth2 Scopes <https://discordapp.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes>`.
         * @returns {OAuth2Session} An instance of OAuth2Session class.
         */
        return new OAuth2Session({
            client_id: this.client_id,
            token: token || this.get_authorization_token(),
            state: state,
            scope: scope,
            redirect_uri: this.redirect_uri,
            auto_refresh_kwargs: {
                client_id: this.client_id,
                client_secret: this.client_secret,
            },
            auto_refresh_url: configs.DISCORD_TOKEN_URL,
            token_updater: this.save_authorization_token
        });
    }


}