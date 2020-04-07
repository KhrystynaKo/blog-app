import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  EditOutlined,
  ArrowDownOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

const MenuSider = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]}>
        <Menu.Item key='1'>
          <Link to='/'>
            <CopyOutlined />
          </Link>
          {!collapsed && <span>categories</span>}
        </Menu.Item>
        <Menu.Item key='2'>
          <EditOutlined />
          <Link to='/postform'></Link>
          {!collapsed && <span>edit posts</span>}
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/addpost'>
            {" "}
            <ArrowDownOutlined />
          </Link>
          {!collapsed && <span>add post</span>}
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default MenuSider;
