import SortIcon from "../SortIcon"

import { useTable } from "../../providers/table"

import styles from "./style.module.scss"

export type TableHeadType = {
  name: string
  key: string
  sortable?: boolean
}

type TableHeadProps = {
  columns?: TableHeadType[]
}

const tableColumns: TableHeadType[] = [
  { name: "Departments", key: "departments", sortable: true },
  { name: "Project name", key: "project_name", sortable: true },
  { name: "Amount", key: "amount", sortable: true },
  { name: "Date", key: "date", sortable: true },
  { name: "Member name", key: "member_name", sortable: true },
]

const TableHead = ({ columns = tableColumns }: TableHeadProps) => {
  const { activeItem, sortingDirection, requestSort } = useTable()

  const handleSort = (key: string) => {
    requestSort(key)
  }
  return (
    <thead className={styles.tableHead}>
      <tr>
        {columns.map(({ key, name, sortable }) => (
          <th key={key} onClick={() => handleSort(key)}>
            <div className={styles.content}>
              {name}{" "}
              {sortable ? (
                <SortIcon direction={sortingDirection} active={key === activeItem} />
              ) : (
                ""
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
