// React
import { ReactNode } from "react"

export interface CommonStatementProps {
  title: string
}

export interface HomeSectionWrapperProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  homeStatementText: string
  heading: string
  subText: string
  children: ReactNode
}
