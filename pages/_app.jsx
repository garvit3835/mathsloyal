import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

// import type { AppProps } from 'next/app'
// import { AuthContextProvider } from '../context/AuthContext'
// import { useRouter } from 'next/router'
// import ProtectedRoute from '../components/ProtectedRoute'

// const noAuthRequired = ['/', '/login', '/signup']

function MyApp({ Component, pageProps }) {
  // const router = useRouter()

  return (
    // <AuthContextProvider>

      // {noAuthRequired.includes(router.pathname) ? (
    <div className='h-screen overflow-scroll'>
        <Component {...pageProps} />
    </div>
      // ) : (
      //   <ProtectedRoute>
      //     <Component {...pageProps} />
      //   </ProtectedRoute>
      // )}
    // </AuthContextProvider>
  )
}

export default MyApp