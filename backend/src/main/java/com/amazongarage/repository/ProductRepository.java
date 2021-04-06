package com.amazongarage.repository;

import com.amazongarage.model.Category;
import com.amazongarage.model.Product;
import com.amazongarage.model.Sex;
import com.sun.xml.internal.ws.api.ha.StickyFeature;

import javax.jws.soap.SOAPBinding;
import javax.lang.model.element.NestingKind;
import javax.swing.plaf.nimbus.State;
import java.net.ConnectException;
import java.sql.*;
import java.util.*;
import java.util.Map.Entry;

import static java.lang.String.format;

public class ProductRepository {
    public ProductRepository() throws SQLException {
        Connection connection = getConnection();
        Statement statement = connection.createStatement();
        String createTable = "CREATE TABLE IF NOT EXISTS products(" +
                "product_id SERIAL," +
                "product_name TEXT NOT NULL," +
                "product_description TEXT," +
                "product_price INT," +
                "product_category TEXT," +
                "product_sex TEXT," +
                "product_weight TEXT," +
                "product_brand TEXT," +
                "PRIMARY KEY (product_id))";
        statement.execute(createTable);
        statement.close();
        connection.close();
    }

    private static final List<Product> products = new ArrayList<>();

    public void remove(int id) {
        Connection connection = null;
        Statement statement = null;
        try {
            connection = getConnection();
            statement = connection.createStatement();
            String removeProduct = format("DELETE FROM products WHERE product_id = '%d';", id);
            statement.executeUpdate(removeProduct);
        } catch (SQLException sqlException) {
            System.out.println("Couldn't remove product" + " " + sqlException.getMessage());
        } finally {
            if (statement != null) {
                try {
                    statement.close();
                } catch (SQLException sqlException) {
                    System.out.println("Couldn't close statement");
                }
            }
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException sqlException) {
                    System.out.println("Couldn't close connection");
                }
            }
        }
    }


//    public List<Product> getByCategory(Category category) {
//        Connection connection = null;
//        Statement statement = null;
//        String getByCat;
//        List<Product> productsByCategories = new ArrayList<>();
//        try {
//            connection = getConnection();
//            statement = connection.createStatement();
//            getByCat = format("SELECT * FROM products WHERE product_category = '%s';", category.toString());
//            ResultSet resultSet = statement.executeQuery(getByCat);
//            while (resultSet.next()) {
//                Product product = new Product();
//                product.setId(resultSet.getInt(1));
//                product.setName(resultSet.getString(2));
//                product.setDescription(resultSet.getString(3));
//                product.setPrice(resultSet.getInt(4));
//                product.setCategory(Category.valueOf(resultSet.getString(5)));
//                product.setSex(Sex.valueOf(resultSet.getString(6)));
//                product.setWeight(resultSet.getString(7));
//                product.setBrand(resultSet.getString(8));
//                productsByCategories.add(product);
//            }
//        } catch (SQLException sqlException) {
//            System.out.println("Couldn't get information about this products" + " " + sqlException.getMessage());
//        } finally {
//            if (statement != null) {
//                try {
//                    statement.close();
//                } catch (SQLException sqlException) {
//                    System.out.println("Couldn't close statement");
//                }
//            }
//            if (connection != null) {
//                try {
//                    connection.close();
//                } catch (SQLException sqlException) {
//                    System.out.println("Couldn't close connection");
//                }
//            }
//        }
//        return productsByCategories;
//    }

    public List<Product> getByKeyValue(Map<String, String[]> map) {
        List<Product> productsByKeyValue = new ArrayList<>();
        Connection connection = null;
        Statement statement = null;
        String getByKeyValue;
        try {
            connection = getConnection();
            statement = connection.createStatement();
            String key = null;
            String[] value = null;
            StringBuilder values = new StringBuilder();
            ArrayList<Entry<String, String[]>> entries = new ArrayList<>(map.entrySet());
            for (int i = 0; i < entries.size(); i++) {
                Entry<String, String[]> entry = entries.get(i);
                key = entry.getKey();
                value = entry.getValue();
                String string = format("product_%s in (",key);
                values.append(string);
                for (int o = 0; o < value.length; o++) {
                    if (o != value.length - 1) {
                        values.append("'").append(value[o]).append("', ");
                    } else {
                        values.append("'").append(value[o]).append("')");
                    }
                }
                if (entries.indexOf(entry) == entries.size() - 1) {
                    values.append("");
                } else {
                    values.append(" AND ");
                }
            }
            getByKeyValue = format("SELECT * FROM products WHERE %s", values);
            ResultSet resultSet = statement.executeQuery(getByKeyValue);
            while (resultSet.next()) {
                Product product = new Product();
                product.setId(resultSet.getInt(1));
                product.setName(resultSet.getString(2));
                product.setDescription(resultSet.getString(3));
                product.setPrice(resultSet.getInt(4));
                product.setCategory(Category.valueOf(resultSet.getString(5)));
                product.setSex(Sex.valueOf(resultSet.getString(6)));
                product.setWeight(resultSet.getString(7));
                product.setBrand(resultSet.getString(8));
                productsByKeyValue.add(product);
            }
        } catch (
                SQLException sqlException) {
            System.out.println("Couldn't get information about this products" + " " + sqlException.getMessage());
        } finally {
            if (statement != null) {
                try {
                    statement.close();
                } catch (SQLException sqlException) {
                    System.out.println("Couldn't close statement");
                }
            }
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException sqlException) {
                    System.out.println("Couldn't close connection");
                }
            }
        }
        return productsByKeyValue;
    }

    public Product getById(int id) {
        Connection connection = null;
        Statement statement = null;
        Product product = new Product();
        try {
            connection = getConnection();
            statement = connection.createStatement();
            String getById = format("SELECT * FROM products where product_id = '%s'", id);
            ResultSet resultSet = statement.executeQuery(getById);
            while (resultSet.next()){
                product.setId(resultSet.getInt(1));
                product.setName(resultSet.getString(2));
                product.setDescription(resultSet.getString(3));
                product.setPrice(resultSet.getInt(4));
                product.setCategory(Category.valueOf(resultSet.getString(5)));
                product.setSex(Sex.valueOf(resultSet.getString(6)));
                product.setWeight(resultSet.getString(7));
                product.setBrand(resultSet.getString(8));
            }
        }catch (SQLException sqlException) {
            System.out.println("Couldn't get information about this products" + " " + sqlException.getMessage());
        }

        return product;
    }

//    public List getList() {
//        Connection connection = null;
//        Statement statement = null;
//        String getList;
//        try {
//            connection = getConnection();
//            statement = connection.createStatement();
//            getList = "SELECT * FROM products";
//            ResultSet resultSet = statement.executeQuery(getList);
//            while (resultSet.next()) {
//                Product product = new Product();
//                product.setId(resultSet.getInt(1));
//                product.setName(resultSet.getString(2));
//                product.setDescription(resultSet.getString(3));
//                product.setPrice(resultSet.getInt(4));
//                product.setCategory(Category.valueOf(resultSet.getString(5)));
//                product.setSex(Sex.valueOf(resultSet.getString(6)));
//                product.setWeight(resultSet.getString(7));
//                product.setBrand(resultSet.getString(8));
//                products.add(product);
//            }
//        } catch (SQLException sqlException) {
//            System.out.println("Couldn't get information about this products" + " " + sqlException.getMessage());
//        } finally {
//            if (statement != null) {
//                try {
//                    statement.close();
//                } catch (SQLException sqlException) {
//                    System.out.println("Couldn't close statement");
//                }
//            }
//            if (connection != null) {
//                try {
//                    connection.close();
//                } catch (SQLException sqlException) {
//                    System.out.println("Couldn't close connection");
//                }
//            }
//        }
//        return products;
//    }

    private static Connection getConnection() throws SQLException {
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException exception) {
            System.out.println("Couldn't find postgres driver class");
        }
        return DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "admin", "admin");
    }

}
