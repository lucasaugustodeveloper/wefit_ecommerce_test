export const saveItem = (item: number | string | undefined) => {
  const { items } = sessionStorage.getItem('items')
    ? JSON.parse(sessionStorage.getItem('items') || '')
    : [];

  if (items && !items.includes(item)) {
    sessionStorage.setItem('items', JSON.stringify({ items: [...items, item] }))
    return
  }

  if (!items) {
    sessionStorage.setItem('items', JSON.stringify({ items: [item] }))
  }
}

export const getItems = (() => {
  const { items } = sessionStorage.getItem('items')
    ? JSON.parse(sessionStorage.getItem('items') || '')
    : [];

  if (items) {
    return items
  }

  return []
})()

export const deleteItem = (item: string) => {
  const { items } = sessionStorage.getItem('items')
    ? JSON.parse(sessionStorage.getItem('items') || '')
    : [];

  if (items.includes(item)) {
    const newItems = items.filter((i: string) => i !== item)
    sessionStorage.setItem('items', JSON.stringify({ items: newItems }))
  }
}
