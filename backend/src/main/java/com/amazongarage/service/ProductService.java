package com.amazongarage.service;

import com.amazongarage.model.Category;
import com.amazongarage.model.Product;
import com.amazongarage.repository.ProductRepository;

import java.util.List;

public class ProductService {
    private ProductRepository repository = new ProductRepository();

    public List<Product> getProducts() {
        return repository.getList();
    }
    public Product getById(int id){
        return repository.getById(id);
    }
    public void addProduct(Product product){
        repository.add(product);
    }
    public int getProductsCount(){
        return repository.getSize();
    }
    public List<Product> getByCategory(Category category){
        return repository.getByCategory(category);
    }
    public void removeById(int id){
        repository.remove(id);
    }
}
