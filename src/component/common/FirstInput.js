

import React from 'react';
import {  Input, DatePicker } from 'antd';
import { UserOutlined,MailOutlined, } from '@ant-design/icons';
import './FirstInput.css'

import TextArea from 'antd/es/input/TextArea';
 


function FirstInput() {
 
 
  return (
   <>
        
       <div className="form-container">
      {/* Username Input */}
      <div className="form-item">
        
        <Input.Search
          placeholder="UserName"
          prefix={<UserOutlined />}
          maxLength={10}
          className="custom-input"
        />
        
      </div>

      {/* Email Input */}
      <div className="form-item">
        <Input
          placeholder="E-mail"
          prefix={<MailOutlined />}
          maxLength={40}
          className="custom-input"
        />
      </div>

      {/* Password Inputs */}
      <div className="form-item">
        <Input.Password
          placeholder=" password"
          maxLength={10}
          className="custom-input"
        />
      </div>
      <div className="form-item">
        <Input.Password
          placeholder="Confirm password"
          maxLength={10}
          status="warning"
          className="custom-input"
        />
      </div>

      {/* Search Field
      <div className="form-item">
        <Divider>
          <Input.Search
            placeholder="Search"
            maxLength={5}
            className="custom-input"
          />
        </Divider>
      </div> */}

      {/* Text Area */}
      <div className="form-item">
        <TextArea
          placeholder="Write something..."
          className="custom-textarea"
        />
      </div>

      {/* Date Picker */}
      <div className="form-item">
        <DatePicker picker="date" placeholder="Choose date" className="custom-date-picker" />
      </div>
    </div>

   </>
  );
}

export default FirstInput;
