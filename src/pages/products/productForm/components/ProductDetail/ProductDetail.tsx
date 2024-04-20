import { Button, MenuItem, TextField } from '@mui/material'
import { productColor } from 'src/constants/product'
import InputSize from './InputSize'
import ImageInput from '../ImageInput'
import { Controller, useFormContext } from 'react-hook-form'
import { RequestProductModel } from 'src/types/product.type'

type Props = {
  handleNumQuanties: () => void
  numQuanitities: {
    [key: number]: number
  }
}

export default function ProductDetail({ handleNumQuanties, numQuanitities }: Props) {
  const key = Number(Object.keys(numQuanitities)[0])
  const value = numQuanitities[key]
  console.log(numQuanitities)
  const formMethods = useFormContext<RequestProductModel>()
  return (
    <div className='border-8 border-current p-3 shadow-lg mb-5'>
      <div className='text-xl py-3 px-2'>Product Detail</div>
      <Controller
        control={formMethods.control}
        name={`details.${key}.color`}
        render={({ field }) => {
          return (
            <TextField
              className='w-[150px] mr-8 mt-3'
              id='outlined-select-currency'
              label='Color'
              select
              defaultValue={productColor.BLACK}
              {...field}
            >
              {Object.keys(productColor).map((key) => (
                <MenuItem key={key} value={productColor[key as keyof typeof productColor]}>
                  {key}
                </MenuItem>
              ))}
            </TextField>
          )
        }}
      />
      {Array(value)
        .fill('')
        .map((_, index) => (
          <InputSize key={index} numQuanitities={numQuanitities} quantitiesIndex={index} />
        ))}
      <ImageInput />
      <div className='flex items-center mt-5'>
        <Button variant='contained' className='w-[305px] h-9 bg-[#E4E7EB]' onClick={handleNumQuanties}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='black'
            className='w-5 h-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
        </Button>
      </div>
    </div>
  )
}
