export const Breadcrumb = (filters) => {
  return filters.map((c, i, row) => {
    if (i + 1 === row.length) {
      return (<span key={`${c}-${i}`}>{c}</span>)
    } else {
      return (<span key={`${c}-${i}`}>{c} › </span>)
    }
  })
}