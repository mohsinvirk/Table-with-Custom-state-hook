import styles from "./style.module.scss"

type SelectType = {
  value: string
  onChange: (value: string) => void
}

const Select = ({ onChange, value }: SelectType) => {
  return (
    <select className={styles.select} value={value} onChange={(e) => onChange(e.target.value)}>
      <option value='departments'>Departments</option>
      <option value='project_name'>Project Name</option>
      <option value='date'>Date</option>
      <option value='member_name'>Name</option>
    </select>
  )
}

export default Select
