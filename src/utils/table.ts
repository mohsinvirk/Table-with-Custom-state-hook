import { DataNodeType, SortConfigType } from "../providers/table"

const toFloat = (param: string) => {
  return parseFloat(param.replace(/(^\$|,)/g, ""))
}

const toIntegar = (param: string) => {
  return parseFloat(param.replace(/(^\$|,)/g, ""))
}

const toDate = (param: string) => {
  const dateString = new Date(param)

  return Date.parse(dateString as unknown as string)
}

export const sortData = (data: DataNodeType[], sortConfig: SortConfigType) => {
  const sortableItems = [...data]

  const { key, direction } = sortConfig

  if (key === "amount") {
    direction === "ascending"
      ? sortableItems.sort((a, b) => toFloat(a.amount) - toFloat(b.amount))
      : sortableItems.sort((a, b) => toFloat(b.amount) - toFloat(a.amount))
  } else if (key === "date") {
    direction === "ascending"
      ? sortableItems.sort((a, b) => toDate(a.date) - toDate(b.date))
      : sortableItems.sort((a, b) => toDate(b.date) - toDate(a.date))
  } else {
    sortableItems.sort(
      (a: any, b: any) =>
        a[key].toString().localeCompare(b[key].toString(), "en", {
          numeric: true,
        }) * (direction === "ascending" ? 1 : -1),
    )
  }

  return sortableItems
}

type Key = keyof DataNodeType

export const getSum = (data: DataNodeType[], key: Key) => {
  const dataObject: Record<string, number> = {}

  for (const iterator of data) {
    if (dataObject[iterator[key]]) {
      dataObject[iterator[key]] = dataObject[iterator[key]] + toIntegar(iterator.amount)
    } else {
      dataObject[iterator[key]] = toIntegar(iterator.amount)
    }
  }

  return dataObject
}

export const getSumTotal = (data: Record<string, number>) => {
  return Object.values(data).reduce((acc, value) => acc + value, 0)
}
