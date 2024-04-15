import { Tab } from '@mui/material'
import { a11yProps } from '../TabPanel/TabPanel'

interface Props {
  index: number
  label: string
  children?: React.ReactNode
}

export default function TabButton({ index, label, children }: Props) {
  return (
    <div className='grid grid-cols-4 items-center'>
      {children}
      <Tab className='col-start-2 col-span-3 text-white capitalize text-xl' label={label} {...a11yProps(index)} />
    </div>
  )
}
