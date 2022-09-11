import React from "react"
import { DataNodeType } from "../../providers/table"

import styles from "./style.module.scss"

type TableBodyProps = {
  data: DataNodeType[]
}

const TableBody = ({ data }: TableBodyProps) => {
  return (
    <tbody className={styles.tableBody}>
      {data?.map(({ departments, project_name, amount, date, member_name }, i) => (
        <tr key={member_name + data + i}>
          <td>{departments}</td>
          <td>{project_name}</td>
          <td>{amount}</td>
          <td>{date}</td>
          <td>{member_name}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
