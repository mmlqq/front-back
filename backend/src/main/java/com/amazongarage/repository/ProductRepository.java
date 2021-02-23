package com.amazongarage.repository;

import com.amazongarage.model.Category;
import com.amazongarage.model.Product;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ProductRepository {
    private static final List<Product> products = new ArrayList<Product>();
    static {
        products.add(new Product(1,"2","3",4,Category.ENERGY_DRINK));
        products.add(new Product(2,"2","3",4,Category.ENERGY_BARS));
    }
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

    public Product getById(int id) {
        return products.get(id);
    }

    public List getList() {
        return products;
    }

}