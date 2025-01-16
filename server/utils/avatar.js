


export const getAvatar = async (user_id, avatar_hash, format="png") => {
    const avatar_url = `https://cdn.discordapp.com/avatars/${user_id}/${avatar_hash}.${format}`;
    return avatar_url;
}