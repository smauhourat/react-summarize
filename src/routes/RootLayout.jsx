import MainHeader from '../components/MainHeader'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <MainHeader />
        <Outlet />
    </div>
  )
}

export default RootLayout
