import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { Button, MenuItem } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
]

export default function ProductForm() {
  const { register, handleSubmit } = useForm<{ name: string; material: string }>({
    defaultValues: { name: 'name', material: 'mateial' }
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Box
      component='form'
      sx={{}}
      noValidate
      autoComplete='off'
      onSubmit={onSubmit}
      className='bg-gray-100 p-5 border rounded-md shadow'
    >
      <div className='text-xl'>Product Information</div>
      <div className='grid grid-cols-12 mt-3'>
        <div className='col-span-5'>
          <div>
            <TextField
              className='w-[400px]'
              id='outlined-basic'
              label='Name'
              variant='outlined'
              {...register('name')}
            />
          </div>
          <div className='mt-[30px]'>
            <TextField className='w-[400px]' id='outlined-select-currency' select label='Type' defaultValue='EUR'>
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className='mt-[30px]'>
            <TextField
              className='w-[400px] '
              id='outlined-basic'
              label='Material'
              variant='outlined'
              {...register('material')}
            />
          </div>
          <div className='mt-[30px]'>
            <DatePicker className='w-[400px]' label='Choose release date' />
          </div>
        </div>
        <div className='col-start-6 col-span-7 '>
          <div className='flex items-center justify-start'>
            <TextField className='w-[150px] mr-8' id='outlined-select-currency' select defaultValue='EUR'>
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField className='w-[150px] mr-8' id='outlined-select-currency' select defaultValue='EUR'>
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField className='w-[120px] mr-8' id='outlined-basic' variant='outlined' defaultValue='100' />
          </div>
          <div className='flex items-center justify-start mt-[30px]'>
            <TextField className='w-[150px] mr-8' id='outlined-select-currency' select label='Size' defaultValue='EUR'>
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField className='w-[150px] mr-8' id='outlined-select-currency' select label='Color' defaultValue='EUR'>
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField className='w-[120px] mr-8' id='outlined-basic' label='quantity' variant='outlined' />
            <Button variant='contained' className='w-[80px] h-9 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 text-white'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <Button
        className='mt-5 w-[150px]'
        variant='contained'
        endIcon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-7 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
            />
          </svg>
        }
        type='submit'
      >
        Send
      </Button>
    </Box>
  )
}
