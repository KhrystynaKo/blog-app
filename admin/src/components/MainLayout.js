import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import MenuSider from "./MenuSider";
import { Layout } from "antd";

const { Content, Footer } = Layout;

const Mainlayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout className='layout'>
      <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <Content>
        <Layout className='site-layout-background'>
          <MenuSider collapsed={collapsed} />
          <Content style={{ padding: "0 50px" }}>{children}</Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>Blog-App Admin Panel</Footer>
    </Layout>
  );
};

export default Mainlayout;
