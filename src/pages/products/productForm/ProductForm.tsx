import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { Button, MenuItem } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { productGender, categoryTitle, categoryName } from 'src/constants/product'
import ProductDetail from './components/ProductDetail'
import ImageInput from './components/ImageInput'
import { RequestProductModel } from 'src/types/product.type'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import productApi from 'src/apis/product.api'
import { toast } from 'react-toastify'
// import { ref, uploadBytes } from 'firebase/storage'
// import { imageDb } from 'src/configs/Firebase/firebase'
// import { v4 } from 'uuid'
import uploadFile from 'src/utils/uploadFile'

type Detail = {
  [key: number]: number
}

export default function ProductForm() {
  const [numDetail, setNumDetail] = useState<Detail>({ 0: 1 })
  const formMethods = useForm<RequestProductModel>({
    defaultValues: {
      name: '',
      type: '',
      gender: '',
      category_title: '',
      category_name: '',
      price: 0,
      quantity: 0,
      release_day: new Date(),
      total_sold: 0,
      description: '',
      material: '',
      warning: '',
      cover_image: 'image',
      product_images: ['image'],
      details: []
    }
  })
  const num = Object.keys(numDetail).length

  const addProduct = useMutation({
    mutationFn: productApi.createProduct
  })

  const handleNumDetail = () => setNumDetail((prev) => ({ ...prev, [num]: 1 }))

  const handleNumQuanties = (detail: number) => () => setNumDetail((prev) => ({ ...prev, [detail]: prev[detail] + 1 }))

  const onSubmit = formMethods.handleSubmit((data) => {
    console.log(data)
    addProduct.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
        toast.success('Create Data Successfully !', { autoClose: 500 })
      },
      onError: (error) => {
        console.log(error)
        toast.error('Create Data Failed !', { autoClose: 500 })
      }
    })
  })

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>, multiple: boolean) => {
    console.log('hâhha')
    if (!multiple && event.target.files) {
      uploadFile(event.target.files?.[0])
    }
  }

  return (
    <FormProvider {...formMethods}>
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
                {...formMethods.register('name')}
              />
            </div>
            <div className='mt-[30px]'>
              <Controller
                control={formMethods.control}
                name='category_title'
                render={({ field }) => {
                  return (
                    <TextField
                      className='w-[400px]'
                      id='outlined-select-currency'
                      select
                      label='Category Title'
                      {...field}
                    >
                      {Object.keys(categoryTitle as { [key: string]: string }).map((key) => (
                        <MenuItem key={key} value={categoryTitle[key as keyof typeof categoryTitle]}>
                          {categoryTitle[key as keyof typeof categoryTitle] as string}
                        </MenuItem>
                      ))}
                    </TextField>
                  )
                }}
              />
            </div>
            <div className='mt-[30px]'>
              <Controller
                control={formMethods.control}
                name='category_name'
                render={({ field }) => {
                  return (
                    <TextField
                      className='w-[400px]'
                      id='outlined-select-currency'
                      select
                      label='Category Name'
                      {...field}
                    >
                      {Object.keys(categoryName as { [key: string]: string }).map((key) => (
                        <MenuItem key={key} value={categoryName[key as keyof typeof categoryName]}>
                          {categoryName[key as keyof typeof categoryName] as string}
                        </MenuItem>
                      ))}
                    </TextField>
                  )
                }}
              />
            </div>
            <div className='mt-[30px]'>
              <Controller
                control={formMethods.control}
                name='gender'
                render={({ field }) => {
                  return (
                    <TextField className='w-[400px]' id='outlined-select-currency' select label='Gender' {...field}>
                      {Object.keys(productGender as { [key: string]: string }).map((key) => (
                        <MenuItem key={key} value={productGender[key as keyof typeof productGender] as string}>
                          {productGender[key as keyof typeof productGender] as string}
                        </MenuItem>
                      ))}
                    </TextField>
                  )
                }}
              />
            </div>
            <div className='mt-[30px]'>
              <TextField
                className='w-[400px]'
                id='outlined-basic'
                label='Type'
                variant='outlined'
                {...formMethods.register('type')}
              />
            </div>
            <div className='mt-[30px]'>
              <TextField
                className='w-[400px]'
                id='outlined-basic'
                variant='outlined'
                defaultValue={0}
                {...formMethods.register('price')}
              />
            </div>
            <div className='mt-[30px]'>
              <TextField
                className='w-[400px] '
                id='outlined-basic'
                label='Material'
                variant='outlined'
                {...formMethods.register('material')}
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
                {...formMethods.register('description')}
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
                {...formMethods.register('warning')}
              />
            </div>
            <div className='mt-[30px]'>
              {/* Controller */}
              <DatePicker className='w-[400px]' label='Choose release date' />
            </div>
            <ImageInput title='Insert Cover Image' handleUpload={handleUpload} />
            <ImageInput title='Insert Product Images' multiple handleUpload={handleUpload} />
          </div>
          <div className='col-start-7 col-span-7'>
            {Array(num)
              .fill('')
              .map((_, index) => {
                return (
                  <ProductDetail
                    key={index}
                    handleNumQuanties={handleNumQuanties(index)}
                    numQuanitities={{ [index]: numDetail[index] }}
                  />
                )
              })}
            <div className='flex items-center mt-5'>
              <Button variant='contained' className='w-full h-9' onClick={handleNumDetail}>
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
    </FormProvider>
  )
}
