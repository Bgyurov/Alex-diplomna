import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'
import { Alert, Snackbar } from '@mui/material';

import { authServiceFactory } from './services/authService'
import { Navigation } from './components/Navigation/Navigation'
import { Hero } from './components/Hero/Hero'
import { Login } from './components/Login/Login'
import { Logout } from './components/Logout/Logout'

import { Register } from './components/Register/Register.jsx'
import { CreateAd } from './components/CreateAd/CreateAd.jsx'
import { Catalog } from './components/Catalog/Catalog.jsx'
import { Search } from './components/Search/Search.jsx'
import { AdDetails } from './components/AdDetails/AdDetails.jsx'
import { EditAd } from './components/EditAd/EditAd.jsx'
import Profile from './components/Profile/Profile.jsx';
import usePersistedState from './hooks/usePersistantState.js';
import AuthGuard from './guards/AuthGuard.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import ProfileGuard from './guards/ProfileGuard.jsx';
import { AdsProvider } from './contexts/AdsContext.jsx';
function App() {
    const navigate = useNavigate()
    const [auth, setAuth] = usePersistedState('auth', {})
    const [successMsg, setSuccessMsg] = useState()
    const [error, setError] = useState()
    const authSevice = authServiceFactory(auth.accessToken)

    const handleCloseMsg = () => {
        setSuccessMsg('');
        setError('')
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await authSevice.login(data)
            
            setAuth(result)
            navigate('/')
            setSuccessMsg(`Добре дошъл отново , ${result.username}!`)
        } catch (error) {
            //TODO Error
            setError(error.message)
        }

    }
    const onRegisterSubmit = async (values) => {
        const { confirmPass, ...registerData } = values
        if (confirmPass !== registerData.password) {

            setError('Моля, уверете се, че полетата за парола и за потвърждение на паролата съвпадат')
            return
        }

        if (registerData.password.length < 5) {
            setError('Паролата трябва да е повече от 5 символа')
            return
        }

        try {
            const result = await authSevice.register(registerData)

            setAuth(result)
            navigate('/')
            setSuccessMsg(`Успешна регистрация , Добре дошли!`)
        } catch (error) {
            setError(error.message)

        }
    }

    const onLogout = async () => {
        try {
            await authSevice.logout();
            setAuth({})
        } catch (error) {
            setAuth({})
        }

    }
    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        userName: auth.username,
        isAuthenticated: !!auth.accessToken,
    }
    return (
        <>
            <AuthContext.Provider value={context}>
                <AdsProvider>

                    <Navigation />
                    <main id='main-content'>
                        {successMsg && (
                            <Snackbar
                                open={Boolean(successMsg)}
                                autoHideDuration={6000}
                                onClose={handleCloseMsg}
                            >

                                <Alert onClose={handleCloseMsg} severity="success">
                                    {successMsg}
                                </Alert>
                            </Snackbar>

                        )}
                        {error && (
                            <Snackbar
                                open={Boolean(error)}
                                autoHideDuration={6000}
                                onClose={handleCloseMsg}
                                >

                                <Alert onClose={handleCloseMsg} severity="error">
                                    {error}
                                </Alert>
                            </Snackbar>

                        )}

                        <Routes>
                            <Route path='/' element={<Hero />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />

                            <Route path='/register' element={<Register />} />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/search' element={<Search />} />

                            <Route path='/create-ad' element={<AuthGuard><CreateAd /></AuthGuard>} />
                            <Route path='/catalog/:adId' element={<AdDetails />} />
                            <Route path='/catalog/:adId/edit' element={<AuthGuard><EditAd /></AuthGuard>} />
                            <Route path='/profile/:profileId' element={<AuthGuard><ProfileGuard><Profile /></ProfileGuard></AuthGuard>} />

                            <Route path="*" element={<NotFound />} />

                        </Routes>
                    </main>
                </AdsProvider>
            </AuthContext.Provider>
            <footer>

                <Footer />
            </footer>
        </>
    )
}

export default App
