export function initSearchData(searchItems) {
  const obj = {}
  searchItems.forEach((item) => {
    obj[item.field] = ''
  })
  return obj
}
