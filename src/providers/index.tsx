import React, { ReactChild } from "react"
import { TableProvider } from "./table"

type ProvidersProps = {
  children: ReactChild
}
export const Provider = ({ children }: ProvidersProps) => {
  return <TableProvider>{children}</TableProvider>
}
