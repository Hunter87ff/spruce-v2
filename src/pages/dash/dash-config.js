export const auth = "https://discord.com/oauth2/authorize?client_id=931202912888164474&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&scope=guilds+identify"
export const authCheck = "http://localhost:3001/api/oauth2?code="
export const activeEvents = [
    {
        type: "Tournament",
        name: "Weekend Valorant Cup",
        status: "Registering",
        participants: "12/16",
        time: "Starts in 2 hours"
    },
    {
        type: "Scrim",
        name: "CS:GO Practice Match",
        status: "Looking for opponents",
        participants: "5/10",
        time: "Today, 8 PM EST"
    },
    {
        type: "Tournament",
        name: "Monthly Fortnite League",
        status: "Live",
        participants: "32/32",
        time: "Ends in 3 days"
    },
    {
        type: "Scrim",
        name: "Valorant Competitive",
        status: "Scheduled",
        participants: "8/10",
        time: "Tomorrow, 6 PM EST"
    }
];