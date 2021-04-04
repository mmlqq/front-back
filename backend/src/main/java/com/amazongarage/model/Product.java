package com.amazongarage.model;

public class Product {
    private int id;
    private String name;
    private String description;
    private int price;
    private Category category;
    private Sex sex;
    private String brand;
    private String weight;

    public Product(){

    }
    public Product(int id, String name, String description, int price, Category category, Sex sex, String weight, String brand) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.sex = sex;
        this.weight = weight;
        this.brand = brand;


    }


    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public void setSex(Sex sex){this.sex = sex;}

    public void setBrand(String brand){this.brand = brand;}

    public void setWeight(String weight){this.weight = weight;}

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public int getPrice() {
        return price;
    }

    public Category getCategory() {
        return category;
    }

    public Sex getSex() {return sex;}

    public String getBrand(){return brand;}

    public String getWeight(){return weight;}

}
