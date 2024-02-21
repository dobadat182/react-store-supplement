import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.6); /* Trong suốt và màu trắng */
    backdrop-filter: blur(10px); /* Hiệu ứng mờ */
    -webkit-backdrop-filter: blur(10px); /* Hiệu ứng mờ cho Safari */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Thêm một chút bóng để tăng độ sâu */
    padding: 10px 0;
    width: 100%;
    z-index: 1000; /* Đảm bảo header luôn ở trên cùng */
    text-align: center;
    font-size: 24px;
    height: 90px;
    position: fixed;
    top: 0;
`;

const Header = () => {
    return (
        <Navbar>
            <h1 class="text-3xl font-bold">Hello world!</h1>
        </Navbar>
    );
};

export default Header;
