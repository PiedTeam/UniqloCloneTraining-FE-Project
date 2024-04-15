import { StyledEngineProvider } from '@mui/material/styles'
interface Props {
  children?: React.ReactNode
  injectFirst: boolean
}
export default function GlobalCssPriority({ children, injectFirst }: Props) {
  return <StyledEngineProvider injectFirst={injectFirst}>{children}</StyledEngineProvider>
}
