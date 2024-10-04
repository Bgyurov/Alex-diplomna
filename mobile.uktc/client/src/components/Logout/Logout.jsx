import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../contexts/AuthContext";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const Logout = () => {
    const { onLogout } = useContext(AuthContext);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        Swal.fire({
            title: 'Сигурни ли сте, че искате да излезете?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Да, излез!',
            cancelButtonText: 'Отказ',
        }).then((result) => {
            if (result.isConfirmed) {
                onLogout();
                setShouldRedirect(true);
            } else {
                setShouldRedirect(true); 
            }
        });
    }, [onLogout]);

    if (shouldRedirect) {
        return <Navigate to="/" />;
    }

    return null; 
};
