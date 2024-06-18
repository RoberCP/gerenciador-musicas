"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var data_source_1 = require("./data-source");
var cors_1 = __importDefault(require("cors"));
var usuario_1 = __importDefault(require("./routes/usuario"));
var login_1 = __importDefault(require("./routes/login"));
var autor_1 = __importDefault(require("./routes/autor"));
var musica_1 = __importDefault(require("./routes/musica"));
var evento_1 = __importDefault(require("./routes/evento"));
var genero_1 = __importDefault(require("./routes/genero"));
data_source_1.AppDataSource.initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
    /*seedUsers().then(
      r => console.log("feito")
  ).catch(
      err => console.log(err)
  )*/
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
var app = (0, express_1.default)();
var port = 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/", usuario_1.default);
app.use("/", login_1.default);
app.use("/", autor_1.default);
app.use("/", musica_1.default);
app.use("/", evento_1.default);
app.use("/", genero_1.default);
app.listen(port, function () {
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
//# sourceMappingURL=server.js.map