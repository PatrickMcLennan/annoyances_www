"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.set("view engine", "pug");
app.set(`views`, path_1.default.join(__dirname, `views`));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.get(`/`, (req, res) => {
    res.render(`pages/index`, { title: `title`, message: `hello world!` });
});
app.listen(4000, () => console.log(`Server is running on 4000`));
//# sourceMappingURL=server.js.map