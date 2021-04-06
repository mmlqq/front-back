package com.amazongarage.controller;

import com.amazongarage.model.Category;
import com.amazongarage.model.Product;
import com.amazongarage.repository.ProductRepository;
import com.amazongarage.service.ProductService;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public abstract class AbstractServlet extends HttpServlet {

    protected ProductService productService;

    protected AbstractServlet() throws SQLException {
        this.productService = new ProductService(new ProductRepository());
    }

    protected void responseByKeyValue(HttpServletResponse resp, Map<String, String[]> map) throws IOException {
        PrintWriter writer = resp.getWriter();
        writer.write(getByKeyValue(map));
        writer.close();
    }

//    protected void responseByCategory(HttpServletResponse resp, Category category) throws IOException {
//        PrintWriter writer = resp.getWriter();
//        writer.write(getByCategory(category));
//        writer.close();
//    }

    protected boolean idChecker(String path) {
        Pattern pattern = Pattern.compile("/products/(\\d*)");
        Matcher matcher = pattern.matcher(path);
        boolean id = matcher.matches();
        return id;
    }

    protected void getCategories(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        PrintWriter writer = resp.getWriter();
        writer.write(Arrays.toString(Category.values()));
    }

    protected void getById(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String requestURI = req.getRequestURI();
        int uriEnd = requestURI.lastIndexOf("/") + 1;
        int uri = Integer.parseInt(requestURI.substring(uriEnd));
        Product product = productService.getById(uri);
        StringBuilder l = new StringBuilder();
        getAppend(l, product);
        l.append("}");
        PrintWriter writer = resp.getWriter();
        writer.write(l.toString());
        writer.close();
    }

    protected void getProducts(HttpServletResponse resp) throws IOException {
        List<Product> products = productService.getProducts();
        PrintWriter writer = resp.getWriter();
        writer.write(createJson(products));
        writer.close();
    }

    protected String getByCategory(Category category) {
        List<Product> products = productService.getByCategory(category);
        return createJson(products);
    }

    protected String getByKeyValue(Map<String,String[]> map) {
        List<Product> products = productService.getByKeyValue(map);
        return createJson(products);
    }

    protected StringBuilder getAppend(StringBuilder l, Product product) {
        return l.append("{\"id\":").append(product.getId()).append(",")
                .append("\"name\":").append("\"").append(product.getName()).append("\"").append(",")
                .append("\"description\":").append("\"").append(product.getDescription()).append("\"").append(",")
                .append("\"price\":").append(product.getPrice()).append(",")
                .append("\"category\":").append("\"").append(product.getCategory()).append("\"")
                .append("\"brand\":").append("\"").append(product.getBrand()).append("\"")
                .append("\"sex\":").append("\"").append(product.getSex()).append("\"")
                .append("\"weight\"").append("\"").append(product.getWeight()).append("\"");
    }

    protected void removeById(int id) {
        productService.removeById(id);
    }

    protected String createJson(List<Product> products) {
        StringBuilder stringBuilder = new StringBuilder("[");
        for (int i = 0; i < products.size(); i++) {
            getAppend(stringBuilder, products.get(i));
            if (i + 1 < products.size()) {
                stringBuilder.append("},");
            } else {
                stringBuilder.append("}");
            }
        }
        stringBuilder.append("]");
        return stringBuilder.toString();
    }
}
