package com.amazongarage.service;

import com.amazongarage.model.Category;
import com.amazongarage.model.Product;
import com.amazongarage.repository.ProductRepository;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public class ProductService {
    private ProductRepository repository;

    public ProductService(ProductRepository repository) throws SQLException {
        this.repository = repository;
    }

    public List<Product> getProducts() {
        return repository.getList();
    }

    public Product getById(int id) {
        return repository.getById(id);
    }

//    public int getProductsCount() {
//        return repository.getSize();
//    }

    public List<Product> getByCategory(Category category) {
        return repository.getByCategory(category);
    }

    public void removeById(int id) {
        repository.remove(id);
    }

    public List<Product> getByKeyValue(Map<String, String[] > map) {
        return repository.getByKeyValue(map);
    }
}
