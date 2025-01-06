import { ServiceBase } from "./service-base/service-base";

export default class ProductService extends ServiceBase {
  static getProduct = async () => {
    const res = await fetch(
      this.getUrl("/products", {
        caches: "no-store",
        // next:60
      })
    );
    const data = res.json();
    return data;
  };
  
  static getProductById = async (id) => {
    const res = await fetch(this.getUrl(`/products/+${id}`));
    const data = res.json();
    return data;
  };
}
