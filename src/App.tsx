import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return <div className='h-[100vh]'>{routeElements}</div>
}

export default App
