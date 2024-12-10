import React from 'react';
 import { Input } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const PasswordInput = ({type}) => {
  return (
    <div>
       
       <Input type={type}
       placeholder='Enter your password'
       style={{ display: 'block', marginBottom: '16px', width: '30%', padding: '8px', background:'pink' }}
       /> 
    </div>
  );
};

export default PasswordInput;











































