package com.amazongarage.repository;

import com.amazongarage.model.Category;
import com.amazongarage.model.Product;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ProductRepository {

    private static final List<Product> products = new ArrayList<>();

    public void add(Product product) {
        products.add(product);
    }

    public void remove(int id) {
        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getId() == id) {
                products.remove(i);
            }
        }
    }

    public int getSize() {
        return products.size();
    }

    public List<Product> getByCategory(Category category){
        List<Product> categories = new ArrayList<>();
        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getCategory().equals(category)){
                categories.add(products.get(i));
            }
        }return categories;
    }

    public Product getById(int id) {
        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getId() == id) {
                return products.get(i);
            }
        }
        return null;
    }


    public List getList() {
        return products;
    }
}