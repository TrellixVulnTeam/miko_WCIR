let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'sambil coli ya, ati ati hormon dopamin lu kebanyakan', m)
}
handler.help = ['neko']
handler.tags = ['nsfw']
handler.command = /^(neko)$/i
handler.premium = true
handler.owner = false
module.exports = handler