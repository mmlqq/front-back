package com.amazongarage.controller;

import com.amazongarage.model.Category;
import com.amazongarage.model.Product;
import com.amazongarage.service.ProductService;
import com.sun.xml.internal.ws.policy.privateutil.PolicyUtils;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ProductServlet extends HttpServlet {

    private ProductService productService = new ProductService();

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        BufferedReader reader = req.getReader();

        String string;
        Product product = new Product();
        product.setId(productService.getProductsCount() + 1);
        while ((string = reader.readLine()) != null) {
            if (string.contains("name")) {
                String name = string.substring(string.lastIndexOf(":") + 3, string.lastIndexOf(",") - 1);
                product.setName(name);
            }
            if (string.contains("description")) {
                String description = string.substring(string.lastIndexOf(":") + 3, string.lastIndexOf(",") - 1);
                product.setDescription(description);
            }
            if (string.contains("price")) {
                String price = string.substring(string.lastIndexOf(":") + 2, string.lastIndexOf(","));
                product.setPrice(Integer.parseInt(price));
            }
            if (string.contains("category")) {
                String category = string.substring(string.lastIndexOf(":") + 3, string.lastIndexOf("\""));
                product.setCategory(Category.valueOf(category));
            }
        }
        reader.close();
        productService.addProduct(product);
    }

    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        if (req.getRequestURI().equals("/products")) {
            removeById(Integer.parseInt(req.getParameter("remove")));
            resp.setStatus(200);
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if (req.getRequestURI().equals("/products")) {
            if (req.getParameter("category") != null) {
                responseByCategory(resp, Category.valueOf(req.getParameter("category")));
            } else {
                getProducts(resp);
            }
        } else if (idChecker(req.getRequestURI())) {
            getById(req, resp);
        } else if (req.getRequestURI().equals("/products/categories")) {
            getCategories(req, resp);
        }

    }

    private void responseByCategory(HttpServletResponse resp, Category category) throws IOException {
        PrintWriter writer = resp.getWriter();
        writer.write(getByCategory(category));
        writer.close();
    }

    private boolean idChecker(String path) {
        Pattern pattern = Pattern.compile("/products/(\\d*)");
        Matcher matcher = pattern.matcher(path);
        boolean id = matcher.matches();
        return id;
    }

    private void getCategories(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        PrintWriter writer = resp.getWriter();
        writer.write(Arrays.toString(Category.values()));
    }

    private void getById(HttpServletRequest req, HttpServletResponse resp) throws IOException {
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

    private void getProducts(HttpServletResponse resp) throws IOException {
        List<Product> products = productService.getProducts();
        PrintWriter writer = resp.getWriter();
        writer.write(createJson(products));
        writer.close();
    }

    private String getByCategory(Category category) {
        List<Product> products = productService.getByCategory(category);
        return createJson(products);
    }

    private StringBuilder getAppend(StringBuilder l, Product product) {
        return l.append("{\"id\":").append(product.getId()).append(",")
                .append("\"name\":").append("\"").append(product.getName()).append("\"").append(",")
                .append("\"description\":").append("\"").append(product.getDescription()).append("\"").append(",")
                .append("\"price\":").append(product.getPrice()).append(",")
                .append("\"category\":").append("\"").append(product.getCategory()).append("\"");
    }

    private void removeById(int id) {
        productService.removeById(id);
    }

    private String createJson(List<Product> products) {
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

