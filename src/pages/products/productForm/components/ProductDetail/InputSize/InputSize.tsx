import { MenuItem, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { productSize } from 'src/constants/product'
import { RequestProductModel } from 'src/types/product.type'

type Props = {
  numQuanitities: {
    [key: number]: number
  }
  quantitiesIndex: number
}

export default function InputSize({ numQuanitities, quantitiesIndex }: Props) {
  const key = Number(Object.keys(numQuanitities)[0])
  const { register, control } = useFormContext<RequestProductModel>()
  return (
    <div className='mt-[30px]'>
      <Controller
        control={control}
        name={`details.${key}.quantities.${quantitiesIndex}.size`}
        render={({ field }) => {
          return (
            <TextField
              className='w-[150px] mr-8'
              id='outlined-select-currency'
              label='Size'
              select
              defaultValue={productSize.xs}
              {...field}
              onChange={(event) => {
                field.onChange(event)
              }}
            >
              {Object.keys(productSize).map((key) => (
                <MenuItem key={key} value={productSize[key as keyof typeof productSize]}>
                  {productSize[key as keyof typeof productSize]}
                </MenuItem>
              ))}
            </TextField>
          )
        }}
      />
      <TextField
        className='w-[120px] mr-8'
        id='outlined-basic'
        variant='outlined'
        defaultValue={0}
        {...register(`details.${key}.quantities.${quantitiesIndex}.quantity`)}
      />
    </div>
  )
}
