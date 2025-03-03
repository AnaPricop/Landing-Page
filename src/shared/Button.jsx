import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import '../css/buttons.css';
const CustomButton = ({ variant, children, ...props }) => {
    console.log(variant, children);
    return (<BootstrapButton variant={variant} className={`border-0 custom-btn ${variant === 'warning' || variant ==='submit' ? 'button_navbar' : 'text-white'}`} {...props}>
        {variant === 'warning' ? <svg xmlns="http://www.w3.org/2000/svg" width="19.586" height="20.722" viewBox="0 0 19.586 20.722"><path id="Combined-Shape" d="M9.781,0A5.076,5.076,0,0,1,14.82,4.539h.074c1.45,0,3.213.963,3.808,3.664l.789,6.107A5.651,5.651,0,0,1,18.438,19a5.7,5.7,0,0,1-4.477,1.725H5.613c-2.143,0-3.636-.525-4.565-1.6S-.2,16.413.121,14.295L.9,8.269C1.407,5.506,3.272,4.54,4.716,4.54A5.07,5.07,0,0,1,9.76,0Zm5.114,6.04H4.716c-.441,0-1.915.178-2.338,2.462l-.772,6c-.251,1.683-.057,2.9.578,3.638s1.749,1.082,3.429,1.082h8.348A4.389,4.389,0,0,0,17.3,18.015a4.256,4.256,0,0,0,.7-3.5l-.779-6.052C16.895,6.97,16.019,6.04,14.895,6.04ZM12.7,8.824a.77.77,0,0,1,.773.75.731.731,0,0,1-.727.75H12.7a.75.75,0,0,1,0-1.5Zm-5.83,0a.77.77,0,0,1,.773.75.732.732,0,0,1-.728.75H6.867a.75.75,0,1,1,0-1.5ZM9.778,1.5H9.763A3.568,3.568,0,0,0,6.229,4.539h7.079A3.576,3.576,0,0,0,9.778,1.5Z" fill="#fff" fill-rule="evenodd"/></svg>
            : ''}
        {children}
    </BootstrapButton>);
};

export default CustomButton;