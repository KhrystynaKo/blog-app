import React, { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
const { Header } = Layout;

const AdminHeader = ({ collapsed, setCollapsed }) => {
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Header style={{ padding: 0 }}>
      {collapsed ? (
        <MenuFoldOutlined className='trigger' onClick={() => toggle()} />
      ) : (
        <MenuUnfoldOutlined className='trigger' onClick={() => toggle()} />
      )}
    </Header>
  );
};
export default AdminHeader;
