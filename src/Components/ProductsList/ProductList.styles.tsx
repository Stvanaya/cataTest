import styled from 'styled-components';

const ProductList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > div {
    margin: 15px 5px;
  }
`;

export default ProductList;
