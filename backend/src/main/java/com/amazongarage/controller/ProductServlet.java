package com.amazongarage.controller;

import com.amazongarage.model.Category;
import com.amazongarage.repository.ProductRepository;
import com.amazongarage.service.ProductService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

public class ProductServlet extends AbstractServlet {

    public ProductServlet() throws SQLException {
        this.productService = new ProductService(new ProductRepository());
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        if (req.getRequestURI().equals("/products")) {
            removeById(Integer.parseInt(req.getParameter("remove")));
            resp.setStatus(200);
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        if (req.getRequestURI().equals("/products")) {
//            if (req.getParameter("category") != null) {
//                responseByCategory(resp, Category.valueOf(req.getParameter("category")));
//            } else {
//                getProducts(resp);
//            }
//
//        } else if (idChecker(req.getRequestURI())) {
//            getById(req, resp);
//        } else if (req.getRequestURI().equals("/products/categories")) {
//            getCategories(req, resp);
//        }
    }
}

