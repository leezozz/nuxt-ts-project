// sw-indonesia-newsletter -->  Sw Indonesia Newsletter
const handleStrCamelSpace = (str: string) => {
  if (!str) { return '' }

  // 使用正则表达式匹配单词边界
  const formatted = str.replace(/-(\w)/g, ' $1')

  // 将每个单词首字母大写
  const capitalized = formatted.replace(/\b(\w)/g, match => match.toUpperCase())

  return capitalized
}
export default handleStrCamelSpace
