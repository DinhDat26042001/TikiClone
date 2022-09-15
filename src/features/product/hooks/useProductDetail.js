// import { useEffect, useState } from "react";
// import productApi from "../../../api/productApi";

// export default function useProductDetail(productId) {
//   const [product, setProduct] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     //
//     (async () => {
//       try {
//         setLoading(true);
//         const result = await productApi.getAll(productId);
//         //    console.log(result);
//         setProduct(result);
//       } catch (error) {
//         console.log("hook có vấn đề", error);
//       }
//       setLoading(false);
//     })();
//   }, [productId]);

//   return {};
// }
