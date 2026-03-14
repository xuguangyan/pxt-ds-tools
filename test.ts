import { DsTools } from './main'

// 命令行：ts-node testx.ts
const char = '你'
console.log(char.charCodeAt(0))

console.log(DsTools.isAsciiChar('a'))
console.log(DsTools.isAsciiChar('你'))