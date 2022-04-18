import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-5 p-3">
                <div className='footer'>
                    <p>Copyright &copy; {year} Raisa Marzana Chowdhury</p>
                </div>
            </div>
        </>
    );
};

export default Footer;