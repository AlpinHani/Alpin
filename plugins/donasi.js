let handler =  m => m.reply(`
╭─「 Donasi • Dana 」
│ • Telkomsel [082287750102]
│ • Dana  [082287750102]
│ • Ovo [082287750102]
│ • Gopay [082287750102]
│ • https://saweria.co/itsmedell
╰────
╭─「 *NOTE* 」
│ > Ingin donasi/sewa? Wa.me/6282287750102
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24 jam tanpa kendala_
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^sewa|dona(te|si)$/i

export default handler
