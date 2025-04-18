export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'long'
  }).format(new Date(date))
}
