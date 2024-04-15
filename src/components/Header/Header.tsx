export default function Header() {
  return (
    <div className='bg-gray-200 py-4 shadow-xl flex justify-between items-center'>
      <div className='pl-10 text-[22px]'>General</div>
      <div className='flex items-center'>
        <div className='text-[17px] pr-3'>bentran1vn</div>
        <div className='w-10 h-10 mr-5 flex-shrink-0 '>
          <img src='https://picsum.photos/200/300' alt='avatar' className='w-full h-full object-cover rounded-full' />
        </div>
      </div>
    </div>
  )
}
