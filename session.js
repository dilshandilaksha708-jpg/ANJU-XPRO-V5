//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VPOUVZS0JCbTlmNG95R0MxMm5Wczd2NlRSSHlBMFp0OHJ2VDJQRktVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3JlbVJreVZoOE1vRXRsM2N1OE83UEdkZUFDSnhIak5nZ2RHaFVKV0pSWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQjNudk1jVU93cmNzM1g1bko0L1F2NDFPR05nUERBQmloM3IxQ0FZSmxBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSzFNVWp6eG5JYytST084ektDRUpKUWlmRS85QUNWbGI3alFqdkJTcG00PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVIeE8zWWpBNklkRW82U1V1aEYvVXluNDJYM1RKVXVlYUorYVY3d25oSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVxRUJ2NWdFZ3ZVdW1JaUNJVTZiZGtoL1NuMEhSUWFZK0NVMmVBQkxZa1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05rRmhnaXpHeWdKSitraTV4T1NYcUpXcHBya0JKTlVrL3pnT04wN2EyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajVweXE0aTQ4RGx5WlJFOXhQYitsSTExREo3dSs2MDRybjVxS2VWT3BFYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQySVVLWS9qaDdWcEVaUXpWZUpXcHhIVlM4SnlXeHIyTndhdHF1TTRQN0M2a01EZWhRNzZuN091Tm9Dd3JQanh3dElGUjVnWXhZQlFycjhpWDhpTURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJvcXBXUHM4SEVWTzVITVNqSzdPMjdjT1RIVGlKemZzTUlQVVUwRkhSc3hZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItN0FGUWVaOFJncTZOVTVtUlcxQzhnIiwicGhvbmVJZCI6IjJjMmViZTI2LTNhMTEtNGNlOS04M2M3LTM5Njc5NWE1N2VmMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS1pDWXpVNk1kNVNzVGtyb21uQzNwMXVqK289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2F4bzJHNEFaMDVvVFVRdU1kdU9RcnRuZmJrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko2N0M5TkRWIiwibWUiOnsiaWQiOiI5NDc0MzI1MTE0OTozM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjU5MzYwODk0MDEzNTYzOjMzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVg1akpvR0VOQ09xOFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYVNlV0RGMXE1WUtwbWJuNFVJb3V5NzRZd1VGb0dqVEU3MXBMeWpaNEgyMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiLzBmWVdLb3ZSbXQ2UWx3b1A3SEZSVUdvV1paWFRFVGQrKzFvdzRjRHFaOFJwMXkyRGtzaTVsRGVXTjR1dUF0ZkE5bWhXTWlMWExOWkxpNkdVL1dCRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IjBkc0pHU2NrQU5uSU1NZDNrTkthdFFWLzcxMGdzTC9xUy9mZE12Y2sxTVhLMERPVW5lLzJBc3RPUS9ONWRyZmk1T01tV21LVllZSk9UUkZmR1ZVdUF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDMyNTExNDk6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2tubGd4ZGF1V0NxWm01K0ZDS0xzdStHTUZCYUJvMHhPOWFTOG8yZUI5dCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDIyNjIxLCJsYXN0UHJvcEhhc2giOiJQV2s1QiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0743251149",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
