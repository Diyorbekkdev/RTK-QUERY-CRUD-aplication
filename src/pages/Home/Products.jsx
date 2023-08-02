import { useDeleteProductMutation, useGetProductsQuery } from "../../redux/services/productService";
import { Button, Spin } from "antd";
import { useState } from "react";
import Search from "antd/es/input/Search";
import Card from "../../components/cards/Card";

import "../Home/home.scss";
import { LIMIT } from "../../const";
import FormModal from "../../components/form/ModalForm";
const Products = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const  [deleteProduct] = useDeleteProductMutation();
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
    setSelectedProductId(productId);
    setModalVisible(true);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      // After successful deletion, update the list of products
      // setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
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
                click={() => handleEditProduct(res.id)}
                del={() => handleDeleteProduct(res.id)}
              />
            ))
          )}
        </div>
        <div className="pagination__wrapper">
          <div id="pagination-container">
            <button onClick={handlePrevClick} disabled={currentPage === 1}>
              Previous
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={index + 1 === currentPage ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <FormModal visible={modalVisible} onCancel={() => setModalVisible(false)} productId={selectedProductId}  />
    </section>
  );
};

export default Products;
