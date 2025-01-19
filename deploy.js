const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "N8oxDBTY#jNw0P3yAg6YJMNhK-NJq3i4hLbX-fkeX58_OBdLCSdE",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS__MSG || "> [🤖]  *͢ʜ͢ᴀ͢ᴊ͢ɪ  ɴ͢ᴏ͢ᴏ͢ʀ͢ɪ ͢ʙ͢ᴏ͢ᴛ  ᴠ͢ɪ͢ᴇ͢ᴡ͢ᴇᴅ ʏ͢ᴏ͢ᴜ͢ʀ s͢ᴛ͢ᴀ͢ᴛ͢ᴜ͢s❄️*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "MUZAMIL-ZAKHMI-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𓆩•.𓇚اوزبــོـیــ ؔـڪ𓇚.•𓆪     .       .            .        𓆰𓍼͢𝐍͢𝐱͢𝐱͢𝐫͢𝐢𓂃.ོ•𓆪",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,💘,💞,💕,❣️,💔,❤️‍🔥,💐,🌸,💮,🪷,🏵️,🌹,🌺,🌻,🌼,🌷,🎉,🪀,🧸,🎉,",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "92342758XXXX",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Mʀ Mᴜᴢᴀᴍɪʟ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Mᴜᴢᴀᴍɪʟ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/ZJwzVrG/temp-image.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *MUZAMIL-ZAKHMI*🤠",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
