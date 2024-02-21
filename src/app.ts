import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";
import { Product } from "./entites/Product";
import { Company } from "./entites/Company";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const CompanyRepo = AppdataSource.getRepository(Company);

  //Insert Query
  // let products:Product[] = [];

  // let iphone = new Product();
  // iphone.name = "Iphone";
  // iphone.description = "This is the best Phone";
  // iphone.price = 300000;

  // let ipad = new Product();
  // ipad.name = "ipad";
  // ipad.description = "This is the best Tablet";
  // ipad.price = 350000;

  // let macbook = new Product();
  // macbook.name = "Iphone";
  // macbook.description = "This the is best Laptop";
  // macbook.price = 400000;

  // products.push(iphone,ipad,macbook);

  // let company:Company = new Company;
  // company.name = "Apple";
  // company.description = "Best Software house";
  // company.products = products;

  // const CompanyDetailInsert = await CompanyRepo.save(company);
  // res.json(CompanyDetailInsert);

  const companyFound = await CompanyRepo.find({
    relations: {
      products: true, // aik yeh bhi tariqa h uske ilawa entity m bhi jakr manytoone wale ko bhi eager true kr sktey h
    },
  });
});

const AppdataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "typeorm_db",
  entities: ["src/entites/*{.ts,.js}"],
  synchronize: true,
  logging: true,
});
AppdataSource.initialize()
  .then(() => console.log("Database is connecting successfully"))
  .catch((err) => console.log("database connecting Error: ", err));

app.listen(3000, () => {
  console.log("Server is connecting 3000 port");
});
