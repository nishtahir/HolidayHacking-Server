package com.nishtahir.holidayhacking;
import spark.Spark

class Server {

    static void main(args){
        def cli = new CliBuilder(usage: '[p]')
        cli.with {
            p longOpt: 'port', 'Run on selected port', args: 1
        }

        def options = cli.parse(args)

        if(options.p){
            Spark.port(Integer.parseInt(options.p))
        }

        Spark.staticFileLocation("/public")

        Spark.get '/', { req, res -> res.redirect("/index.html") }
        Spark.get '/api', { req, res -> println req }
    }
}
