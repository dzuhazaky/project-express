import express from "express"
import { kelilingLingkaran, luasLingkaran, kelilingPersegi, luasPersegi, luasPersegiPanjang, 
    kelilingPersegiPanjang, luasSegitiga, kelilingSegitiga } from "../controller/bangunDatar"
const app = express()

/** allow read a body  */
app.use(express.json())

app.post(`/lingkaran/luas`, luasLingkaran)
app.post(`/lingkaran/keliling`, kelilingLingkaran)
app.post(`/persegi/luas`, luasPersegi)
app.post(`/persegi/keliling`, kelilingPersegi)
app.post(`/persegiPanjang/luas`, luasPersegiPanjang)
app.post(`/persegiPanjang/keliling`, kelilingPersegiPanjang)
app.post(`/segitiga/luas`, luasSegitiga)
app.post(`/segitiga/keliling`, kelilingSegitiga)

export default app