import express from "express"

import { Vtabung, LPtabung, Vcube, LPcube, Vbalok, LPbalok, Vbola, LPbola  } from "../controller/bangunRuang"
const app = express()

app.post(`/tabung/volume`, Vtabung)
app.post(`/tabung/luasPermukaan`, LPtabung)
app.post(`/kubus/volume`, Vcube)
app.post(`/kubus/luasPermukaan`, LPcube)
app.post(`/balok/volume`, Vbalok)
app.post(`/balok/luasPermukaan`, LPbalok)
app.post(`/bola/volume`, Vbola)
app.post(`/bola/luasPermukaan`, LPbola)

export default app