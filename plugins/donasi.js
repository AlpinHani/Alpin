let handler =  m => m.reply(`
╭─「 Donasi 」
│ • Dana [082287750102]
│ • Ovo [082287750102]
│ • Gopay [082287750102]
│ • Pulsa [082287750102]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^sewa|dona(te|si)$/i

export default handler
