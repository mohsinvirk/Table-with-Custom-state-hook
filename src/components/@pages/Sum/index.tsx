import { useState, useMemo } from "react"
import { Link } from "react-router-dom"

import { DataNodeType, useTable } from "../../../providers/table"

import Select from "../../Select"

import { getSum, getSumTotal } from "../../../utils/table"

import styles from "./style.module.scss"

const expenseLabel: Partial<Record<keyof DataNodeType, string>> = {
  departments: "Departments",
  project_name: "Project Name",
  date: "Date",
  member_name: "Name",
}

const Table = () => {
  const [expenseType, setExpenseType] = useState<keyof DataNodeType>("member_name")
  const { data = [] } = useTable()

  const sum = useMemo(() => getSum(data, expenseType), [data, expenseType])

  const handleSetExpense = (value: any) => {
    setExpenseType(value)
  }

  const sumTotal = useMemo(() => getSumTotal(sum), [sum])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to='/'>Go Back</Link>

        <div>
          Total Expanses by: <Select value={expenseType} onChange={handleSetExpense} />
        </div>
      </div>

      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>{expenseLabel[expenseType]}</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {Object.entries(sum)?.map(([key, value]) => (
            <tr key={key + value}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.sumTotal}>Total: {sumTotal}</div>
    </div>
  )
}

export default Table
