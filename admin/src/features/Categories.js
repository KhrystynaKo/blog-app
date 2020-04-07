import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Card, Col, Row } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const Categories = () => {
  const { data } = useFetch("/categories");
  console.log(data);
  return (
    <div className='site-card-wrapper'>
      <h1 className='uk-heading-divider uk-align-center'>Categories</h1>
      <Row gutter={16}>
        {data &&
          data.map((item) => (
            <Col key={data.id} span={6}>
              <Card
                title={item.title}
                bordered={false}
                actions={[<EllipsisOutlined key='ellipsis' />]}
              >
                {item.description}
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};
export default Categories;
