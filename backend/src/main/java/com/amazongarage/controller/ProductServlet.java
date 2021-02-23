package com.amazongarage.controller;

import com.amazongarage.model.Product;
import com.amazongarage.service.ProductService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

public class ProductServlet extends HttpServlet {

    private ProductService productService = new ProductService();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<Product> products = productService.getProducts();
        PrintWriter writer = resp.getWriter();
        StringBuilder l = new StringBuilder("[");
        for (int i = 0; i < products.size(); i++) {
            Product product = products.get(i);
            StringBuilder append = l.append("{\"id\":").append(product.getId()).append(",")
                    .append("\"name\":").append("\"").append(product.getName()).append("\"").append(",")
                    .append("\"description\":").append("\"").append(product.getDescription()).append("\"").append(",")
                    .append("\"price\":").append(product.getPrice()).append(",")
                    .append("\"category\":").append("\"").append(product.getCategory()).append("\"");
            if (i + 1 < products.size()) {
                append.append("},");
            } else {
                append.append("}");
            }
        }
        l.append("]");
        writer.write(l.toString());
        writer.close();
    }
}

