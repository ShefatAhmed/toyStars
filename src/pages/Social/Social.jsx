import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

const Social = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    })
    
    return (
        <div className="py-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center p-8" data-aos="fade-right">
                    <h2 className="text-2xl font-bold mb-4">Download Our Mobile App</h2>
                    <img className="w-56 h-auto mb-4" src="https://i.ibb.co/3Bd1hpK/app-store-png-logo-33115.png" alt="Google Play Store" />
                    <hr className="w-1/2 mx-auto my-5" />
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <i className="fab fa-facebook text-2xl"></i>
                        <i className="fab fa-instagram text-2xl"></i>
                        <i className="fab fa-tiktok text-2xl"></i>
                        <i className="fab fa-youtube text-2xl"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Social;