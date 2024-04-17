import { MenuItem, TextField } from '@mui/material'
import { productSize } from 'src/constant/product'

export default function InputSize() {
  return (
    <div className='mt-[30px]'>
      <TextField className='w-[150px] mr-8' id='outlined-select-currency' label='Size' select>
        {Object.keys(productSize).map((key) => (
          <MenuItem key={key} value={productSize[key as keyof typeof productSize]}>
            {productSize[key as keyof typeof productSize]}
          </MenuItem>
        ))}
      </TextField>
      <TextField className='w-[120px] mr-8' id='outlined-basic' variant='outlined' defaultValue='100' />
    </div>
  )
}
