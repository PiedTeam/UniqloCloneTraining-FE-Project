import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { Button, MenuItem } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { productGender, categoryTitle } from 'src/constant/product'
import ProductDetail from './components/ProductDetail'
import ImageInput from './components/ImageInput'

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
      className='bg-gray-100 p-10 border rounded-md shadow'
    >
      <div className='text-2xl mb-8'>Product Information</div>
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
            <TextField
              className='w-[400px]'
              id='outlined-select-currency'
              select
              label='Category Title'
              defaultValue={categoryTitle.shirt}
            >
              {Object.keys(categoryTitle as { [key: string]: string }).map((key) => (
                <MenuItem key={key} value={categoryTitle[key as keyof typeof categoryTitle] as string}>
                  {categoryTitle[key as keyof typeof categoryTitle] as string}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className='mt-[30px]'>
            <TextField
              className='w-[400px]'
              id='outlined-select-currency'
              select
              label='Category Name'
              defaultValue='EUR'
            >
              {Object.keys(productGender as { [key: string]: string }).map((key) => (
                <MenuItem key={key} value={productGender[key as keyof typeof productGender] as string}>
                  {productGender[key as keyof typeof productGender] as string}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className='mt-[30px]'>
            <TextField className='w-[400px]' id='outlined-select-currency' select label='Gender' defaultValue='EUR'>
              {Object.keys(productGender as { [key: string]: string }).map((key) => (
                <MenuItem key={key} value={productGender[key as keyof typeof productGender] as string}>
                  {productGender[key as keyof typeof productGender] as string}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className='mt-[30px]'>
            <TextField className='w-[400px]' id='outlined-basic' label='Type' variant='outlined' />
          </div>
          <div className='mt-[30px]'>
            <TextField className='w-[400px]' id='outlined-basic' label='Price' variant='outlined' />
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
            <TextField
              id='outlined-multiline-static'
              className='w-[400px]'
              label='Description'
              multiline
              rows={3}
              defaultValue='Default Value'
            />
          </div>
          <div className='mt-[30px]'>
            <TextField
              id='outlined-multiline-static'
              className='w-[400px]'
              label='Warning'
              multiline
              rows={3}
              defaultValue='Default Value'
            />
          </div>
          <div className='mt-[30px]'>
            <DatePicker className='w-[400px]' label='Choose release date' />
          </div>
          <ImageInput title='Insert Cover Image' />
          <ImageInput title='Insert Product Images' multiple />
        </div>
        <div className='col-start-7 col-span-7'>
          <ProductDetail />
          <ProductDetail />
          <ProductDetail />
          <div className='flex items-center mt-5'>
            <Button variant='contained' className='w-full h-9 '>
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
        className='mt-7 w-[150px]'
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
