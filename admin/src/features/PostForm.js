import React, { useState } from "react";
import "antd/dist/antd.css";
import { Table, Form, Input, InputNumber, Popconfirm } from "antd";
import EditableCell from "../EditableCell";

const PostForm = ({ data, setData }) => {
  const [editingKey, setEditingKey] = useState("");
  const [form] = Form.useForm();

  // const editData = (body) => {
  //   console.log(body);
  //   fetch("http://localhost:3000/posts/", {
  //     method: "PUT",
  //     body: JSON.stringify(body),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setData([...data, json]);
  //     });
  // };

  const deletePost = (id) => {
    const updateData = data.filter((item) => id !== item.id);
    setData(updateData);
    // editData(updateData);
  };

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];

      const index = newData.findIndex((item) => id === item.id);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
        // editData(newData);
      } else {
        newData.push(row);
        setData(newData);
        // editData(newData);

        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "CategoryId",
      dataIndex: "categoryId",
      key: "categoryId",
      editable: true,
    },
    { title: "ID", dataIndex: "id", key: "id", editable: true },
    { title: "Title", dataIndex: "title", key: "title", editable: true },
    { title: "Body", dataIndex: "body", key: "body", editable: true },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => <a onClick={() => deletePost(record.id)}>Delete</a>,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href='javascript:;'
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title='Sure to cancel?' onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ""} onClick={() => edit(record)}>
            Edit
          </a>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName='editable-row'
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </>
  );
};

export default PostForm;
