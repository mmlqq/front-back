package com.amazongarage.controller;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

public class FilterServlet extends AbstractServlet {

    public FilterServlet() throws SQLException {
        super();
    }

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
            Map<String, String[]> array = new LinkedHashMap<String, String[]>();
            for (Map.Entry<String, String[]> map: req.getParameterMap().entrySet()
                 ) {
                String key = map.getKey();
                String[] value = map.getValue();
                array.put(key,value);
            }
            responseByKeyValue(resp, array);
    }
}
