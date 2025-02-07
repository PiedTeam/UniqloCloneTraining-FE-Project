import Header from 'src/components/Header'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='h-[100%]'>
      <Header />
      {children}
    </div>
  )
}
