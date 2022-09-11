import React, { createContext, ReactChild, useContext, useEffect, useState } from "react"

import { sortData } from "../utils/table"

import dummyData from "../data/index.json"

/**
 * *Types
 */

type TableContextProviderProps = {
  children: ReactChild
}

export type DataNodeType = {
  departments: string
  project_name: string
  amount: string
  date: string
  member_name: string
}

type UseTableParams = {
  data: DataNodeType[]
  activeItem: string
  sortingDirection: string
  requestSort: (key: string) => void
}

export type SortConfigType = {
  key: string
  direction: string
}

/**
 **Create Context
 */

const TableContext = createContext<any>(null)

/**
 * *Create Context Provider
 */

export const TableProvider = ({ children }: TableContextProviderProps) => {
  const values = TableProviderFn()

  return <TableContext.Provider value={values}>{children}</TableContext.Provider>
}

/* ===========
* CREATE CONTEXT CONSUMER for use in other components
=========== */
export const useTable = (): UseTableParams => useContext(TableContext)

const TableProviderFn = (): UseTableParams => {
  const [data, setData] = useState<DataNodeType[]>([])
  const [activeItem, setActiveItem] = useState("")
  const [sortingDirection, setSortigDirection] = useState("ascending")

  useEffect(() => {
    setData(dummyData)
  }, [])

  const requestSort = (key: string) => {
    let newSortingDirection = "descending"

    if (key === activeItem) {
      newSortingDirection = sortingDirection === "ascending" ? "descending" : "ascending"
    }

    setActiveItem(key)
    setSortigDirection(newSortingDirection)

    const sortConfig = {
      key: key,
      direction: newSortingDirection,
    }

    const sortedData = sortData(data, sortConfig)
    setData(sortedData)
  }

  return { data, activeItem, sortingDirection, requestSort }
}
