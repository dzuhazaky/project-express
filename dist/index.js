"use strict";
/**ini adalah file utama dimana ada proses
 * menjalankan server backend
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* memanggil library express*/
const express_1 = __importDefault(require("express"));
/* buat wadah inisiasi express*/
const app = (0, express_1.default)();
/** mendefinisikan PORT berjalannya server */
const PORT = 8000;
/** proses pertama untuk handle request */
app.get(`/serena`, (request, response) => {
    return response.status(200).json({
        message: `Hello Serena Anaknya Bu Siana`
    });
});
/** run server*/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
