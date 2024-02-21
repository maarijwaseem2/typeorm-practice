import "reflect-metadata";
import express from "express";
import { DataSource } from "typeorm";
import { User } from "./entites/User";
import { Profile } from "./entites/Profile";

const app = express();
app.use(express.json());

app.get("/",async (req, res) => {
    const userRepo = AppdataSource.getRepository(User);
    const profileRepo = AppdataSource.getRepository(Profile);

    // find all records 
    const allRecords = await userRepo.find();

    // Find specific records
    // const findOneRecord = await userRepo.findOne({where : {firstname:"maarij"}});

    // delete record 
    // const deleteRecord = await userRepo.delete(1);

    // Insert New user
    // const profile:Profile = new Profile();
    // profile.gender = "male";
    // profile.photo = "this is photo";


    // const user:User = new User();
    // user.firstname = "maarij";
    // user.lastname = "waseem";
    // user.email = "maarijwaseem7@gmail.com";
    // user.profile = profile;

    // const UserInsert = await userRepo.save(user);
    res.json(allRecords);
    
    // record update 
    // await userRepo.update(1,{firstname:"Uzair", lastname:"Ahmad", email:"uzair@gmail.com"});
    res.json("Record Updated");
});

const AppdataSource = new DataSource({
    // connectTimeout  : 60 * 60 * 1000,
    // acquireTimeout  : 60 * 60 * 1000,
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "typeorm",
    entities: ["src/entites/*{.ts,.js}"],
    synchronize:true,
    logging:true
});
AppdataSource.initialize()
  .then(() => console.log("Database is connecting successfully"))
  .catch((err) => console.log("database connecting Error: ", err));

app.listen(3000, () => {
  console.log("Server is connecting 3000 port");
});
