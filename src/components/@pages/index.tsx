import React from "react"
import { useTable } from "../../providers/table"

import TableHead from "../TableHead"
import TableBody from "../TableBody"

import styles from "./style.module.scss"
import { Link } from "react-router-dom"

const Table = () => {
  const { data = [] } = useTable()

  return (
    <div className={styles.container}>
      <Link to='/sum'>Sum of Data</Link>

      <table>
        <TableHead />

        <TableBody data={data} />
      </table>
    </div>
  )
}

export default Table
