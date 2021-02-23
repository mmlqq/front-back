package com.amazongarage.service;

import com.amazongarage.model.Product;
import com.amazongarage.repository.ProductRepository;

import java.util.Arrays;
import java.util.List;

public class ProductService {
    private ProductRepository repository = new ProductRepository();

    public List<Product> getProducts() {
        return repository.getList();
    }
}
