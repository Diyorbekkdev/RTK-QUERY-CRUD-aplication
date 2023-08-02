import { Modal, Form, Input, InputNumber, Rate } from "antd";
// import { Form } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useCreateProductMutation, useUpdateProductMutation } from "../../redux/services/productService";
const FormModal = ({ visible, onCancel, data, productId }) => {
  const [addCard] = useCreateProductMutation();
  const [editCard] = useUpdateProductMutation();
  const [selected, setSelected] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    setSelected(productId);
  }, [productId]);
  const onFinish = async (values) => {
    console.log("Form data:", values);
    try {
      if (selected) {
        await editCard({selected, values});
        console.log(selected);
        }else{
          await addCard(values);
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      onOk={() => form.submit()}
      title="Product Details"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={data}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter the price" }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name="discountPercentage" label="Discount Percentage">
          <InputNumber />
        </Form.Item>
        <Form.Item name="rating" label="Rating">
          <Rate />
        </Form.Item>
        <Form.Item
          name="brand"
          label="Brand"
          rules={[{ required: true, message: "Please enter the brand name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please enter the category" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="thumbnail"
          label="Thumbnail"
          rules={[
            { required: true, message: "Please enter the thumbnail URL" },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

FormModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  productId: PropTypes.number,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountPercentage: PropTypes.number,
    rating: PropTypes.number,
    stock: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default FormModal;
