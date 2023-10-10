import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../auth';
import instance from '../axios-firebase';
import { Spinner, Box, Alert, AlertIcon,Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await instance.get(`/users/${auth.currentUser.uid}.json`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError('Lütfen tekrar giriş yapınız.');
            } finally {
                // Her durumda spinner'ı gizle
                setTimeout(() => {
                    setLoading(false);
                }, 3000); // 3 saniye bekletiyoruz
            }
        };

        fetchUserData();
    }, [navigate]);

    if (loading) {
        return (
            <Box w={500} mt={300} display="flex" alignItems="center" justifyContent="center" >
                <Spinner
                w={200}
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />
                <Text fontFamily="heading" color="secondary.700" fontSize="xl" fontWeight="bold">Lütfen Bekleyiniz sayfa yükleniyor...</Text>
            </Box>
        );
    }

    if (error) {
        setTimeout(() => {
            navigate('/');
        }, 3000); // Hata durumunda 3 saniye bekletip anasayfaya yönlendiriyoruz
        return (
            <Alert status="error">
                <AlertIcon />
                {error}
            </Alert>
        );
    }

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
