export function redact(text: string){
  const rules = [
    /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}/g,
    /\b\+?\d[\d\s().-]{6,}\b/g,
    /https?:\/\/\S+/g,
  ]
  let out = text
  for (const re of rules) out = out.replace(re, '[redacted]')
  return out
}
