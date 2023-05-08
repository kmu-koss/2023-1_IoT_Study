import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

let dust = [];

var toggle = "ON";

//-------------------------------------------------
mongoose.connect(process.env.mongoURL);
var db = mongoose.connection;

db.once("open", () => {
    db.once("open", function () {
        console.log("DB connected");
    });
    db.on("error", function (err) {
        console.log("DB ERROR : ", err);
    });
});

const Schema = (collection) => {
    let model = mongoose.Schema({
        team: { type: String, require: true },
        value: { type: Number, require: true },
    });
    var Data = mongoose.model(collection, model);
    return Data;
};

const ShowData = (Data) => {
    return new Promise((resolve, reject) => {
        let dust = [];
        Data.find({})
            .then((datas) => {
                // console.log(datas);
                for (let data of datas) {
                    dust.push(data);
                    // console.log(data);
                }
                resolve(dust);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
    });
};

var Data = Schema("datalists");
// ShowData(Data);

//-------------------------------------------------

app.get("/dust", async (req, res) => {
    await ShowData(Data).then((res) => {
        dust = res;
    });
    res.send(dust);
});

app.patch("/toggle", (req, res) => {
    toggle = toggle == "ON" ? "OFF" : "ON";
    console.log(toggle);
    res.send(toggle);
});

app.listen(port, () => {
    console.log(`port is listening at ${port}`);
});
