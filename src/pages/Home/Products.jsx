import { useDeleteProductMutation, useGetProductsQuery } from "../../redux/services/productService";
import { Button, Modal, Spin, message } from "antd";
import { useState } from "react";
import {ExclamationCircleFilled} from '@ant-design/icons'
import { LIMIT } from "../../const";
import Search from "antd/es/input/Search";
import Card from "../../components/cards/Card";

import "../Home/home.scss";
import FormModal from "../../components/form/ModalForm";
const Products = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const  [deleteProduct] = useDeleteProductMutation();
  const [selectedProductData, setSelectedProductData] = useState(null);
  const { data, isLoading } = useGetProductsQuery({search});

  const totalPages = Math.ceil(data?.length / LIMIT);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };


  const handleEditProduct = (productId) => {
    const selectedProduct = data.find((product) => product.id === productId);
    setSelectedProductId(productId);
    setSelectedProductData(selectedProduct);
    setModalVisible(true);  
  };

  const handleDeleteProduct = async (productId) => {
    try {
      Modal.confirm({
        title: "Confirm",
        icon: <ExclamationCircleFilled />,
        content: "Are you sure you want to delete this post?",
        okText: "Delete",
        cancelText: "Cancel",
        onOk: async () => {
          await deleteProduct(productId);
          message.success("Post deleted successfully!");
        },
        onCancel: () => {
          console.log("Deletion canceled.");
        },
      });

      console.log("Product deleted successfully.");
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };
  const startIndex = (currentPage - 1) * LIMIT;
  const endIndex = startIndex + LIMIT;
  const productsToShow = data?.slice(startIndex, endIndex);
  
  return (

    <section className="products">
      <div className="container">
        <div style={{ marginBottom: "40px", display: "flex", gap: "16px" }}>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onChange={(e) => setSearch(e?.target?.value)}
          />
          <Button  onClick={() => setModalVisible(true)} size="large" type="primary">
            Add Product
          </Button>
        </div>
        <div className="products__row">
          {isLoading ? (
            <div>
              <Spin />
            </div>
          ) : (
            productsToShow?.map((res) => (
              <Card
                key={res.id}
                img={res?.thumbnail}
                title={res?.title}
                description={res?.description}
                reting={res?.rating}
                brend={res?.brend}
                price={res?.price}
                click={() => handleEditProduct(res?.id)}
                del={() => handleDeleteProduct(res?.id)}
              />
            ))
          )}
        </div>
        <div className="pagination__wrapper">
          <div id="pagination-container" style={{display:'flex', gap:'25px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Button type="primary" onClick={handlePrevClick} disabled={currentPage === 1}>
              Previous
            </Button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button type="primary"
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={index + 1 === currentPage ? "activeP" : ""}
              >
                {index + 1}
              </Button>
            ))}
            <Button type="primary"
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <FormModal visible={modalVisible} onCancel={() => setModalVisible(false)} productId={selectedProductId} data={selectedProductData}  />
    </section>
  );
};

export default Products;
