import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Tab } from '@mui/material'
import ProductManagement from 'src/pages/products'
import Header from '../../components/Header'
import classNames from 'classnames'
import ProductForm from 'src/pages/products/productForm'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(1)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Box className='grid grid-cols-10 gap-2 h-full'>
      <div className='col-span-2 h-full bg-[#383F51]'>
        <div className='py-5 px-2 text-4xl text-white flex items-center justify-center shadow-xl'>UNIQLO</div>
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{
            borderColor: 'divider'
          }}
          className='col-span-2 h-full '
        >
          <Tab
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-7 h-7 text-white mx-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                />
              </svg>
            }
            iconPosition='start'
            className={classNames('text-white capitalize text-[18px] flex justify-start', {
              'bg-[#DC3444]': value === 0,
              'bg-white': false
            })}
            label={'Dashboard'}
            {...a11yProps(0)}
          />
          <Tab
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-7 h-7 text-white mx-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z'
                />
              </svg>
            }
            iconPosition='start'
            className={classNames('text-white capitalize text-[18px] flex justify-start', {
              'bg-[#DC3444]': value === 1,
              'bg-white': false
            })}
            label={'Products'}
            {...a11yProps(1)}
          />
          <Tab
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-7 h-7 text-white mx-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z'
                />
              </svg>
            }
            iconPosition='start'
            className={classNames('text-white capitalize text-[18px] flex justify-start', {
              'bg-[#DC3444]': value === 2,
              'bg-white': false
            })}
            label={'Vouchers'}
            {...a11yProps(2)}
          />
          <Tab
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-7 h-7 text-white mx-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                />
              </svg>
            }
            iconPosition='start'
            className={classNames('text-white capitalize text-[18px] flex justify-start', {
              'bg-[#DC3444]': value === 3,
              'bg-white': false
            })}
            label={'Users'}
            {...a11yProps(3)}
          />
        </Tabs>
      </div>
      <div className='col-span-8'>
        <Header />

        <TabPanel value={value} index={0}>
          <ProductForm />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <ProductManagement />
        </TabPanel>

        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>

        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
      </div>
    </Box>
  )
}
