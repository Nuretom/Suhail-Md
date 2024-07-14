const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347081650550";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_54_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDgwLFxuICAgICAgICA3NixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgMjA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgMTQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNixcbiAgICAgICAgNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIklWa3EvYzI2bEVid3BjYjJPbmNuaWpRUEh6OXVlTXB6T21sMUFHMldvY0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA4MTY1MDU1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTU3OTBGRTQzMTZBRUMxRTI0MEQzRDdBNkJCMjk4RTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwOTU4MDQ3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpQUEc5Yy1MUUUtNjlDdmNOSElSU3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzVkODY2NmMtMGYwYy00ZThhLTkxZTQtMDJjM2FhMjhjNTkzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDExMixcbiAgICAgIDIxNSxcbiAgICAgIDQxLFxuICAgICAgMjU0LFxuICAgICAgMTQzLFxuICAgICAgMTA4LFxuICAgICAgMzEsXG4gICAgICAxNzUsXG4gICAgICAyMzQsXG4gICAgICAyLFxuICAgICAgNyxcbiAgICAgIDMxLFxuICAgICAgMTkxLFxuICAgICAgMTIwLFxuICAgICAgMjAzLFxuICAgICAgMTk2LFxuICAgICAgMzIsXG4gICAgICAxNzMsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICA4OCxcbiAgICAgIDE5NCxcbiAgICAgIDE4LFxuICAgICAgNzgsXG4gICAgICAxOTgsXG4gICAgICAyNTEsXG4gICAgICA5NyxcbiAgICAgIDEyMSxcbiAgICAgIDIzNyxcbiAgICAgIDk3LFxuICAgICAgMTAwLFxuICAgICAgMjM0LFxuICAgICAgNjMsXG4gICAgICAxNDcsXG4gICAgICA3NyxcbiAgICAgIDEzNSxcbiAgICAgIDIwOSxcbiAgICAgIDEyNSxcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLN0Y1TEFaUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4MTY1MDU1MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTnVyZXRvIG1lZGlhXCIsXG4gICAgXCJsaWRcIjogXCIyODAzNzU1MzIyMDQxNDM6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdUY2VjhRMS9qT3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjF2aS9KdXdac2hId1dyaTVwUitqNFF3cmx2Z29jZXZHNi9ickh6RUY5bEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWFZNTkk4aHJIK2VhcGx2d0M2emZKcEF0VTdmb2R5WkgrclpzcXVYWjd2TUxKTXhLdXhsMUxDOE5hd0twSzdMYmMxbmlyUkJDcUdLT3BpdUtJRHg0QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUE1BeGt3TWNjY012T2JYUE9FMWdjT0cwMGtIQ2MyM3NSWnRXT3JrMWg3MmtCYXhBZ0EwNHFEaFFEeWcxdHplUEdTbVlVMFhKS2xMQ0JaUzZkUDFkZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4MTY1MDU1MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODE2NTA1NTA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTU4MDQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT1dCXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPV0IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnUUxnNmlnRU1XR1JwOHVEQnIwVERTd0h5TnRsQ1Mra3g2ejZGb0NUWm9NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDk1MDQ4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODM3OTUxMTAwNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
