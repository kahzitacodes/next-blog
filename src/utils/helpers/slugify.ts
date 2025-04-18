export const slugify = (text: string) => {
  return text
    .normalize('NFD')
    .toLowerCase()
    .replace(/[\u0300-\u03ef]/, '')
    .trim()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}
