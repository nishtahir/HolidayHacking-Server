package com.nishtahir.holidayhacking;
import spark.Spark
import spark.servlet.SparkApplication

class Server implements SparkApplication {
    @Override
    void init() {
        Spark.staticFileLocation("/public")

        Spark.get '/', { req, res -> res.redirect("/index.html") }
        Spark.get '/api', { req, res -> println req }
    }
}
