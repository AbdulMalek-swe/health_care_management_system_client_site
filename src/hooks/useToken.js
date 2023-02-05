
import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://healthcare-management-system.vercel.app/api/v1/user/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.token) {
                        localStorage.setItem('accessToken', data.token);
                        setToken(data.token);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken; 