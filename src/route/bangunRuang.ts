import express from "express"

import { Vtabung, LPtabung, Vcube, LPcube, Vbalok, LPbalok, Vbola, LPbola } from "../controller/bangunRuang" 
import { validateCube } from "../middleware/validateCube"
import { validateTabung } from "../middleware/validateTabung"
import { validateBola } from "../middleware/validateBola"
const app = express()

app.use(express.json())

app.post(`/tabung/volume`,validateTabung, Vtabung )
app.post(`/tabung/luasPermukaan`, LPtabung)
app.post(`/kubus/volume`, Vcube)
app.post(`/kubus/luasPermukaan`, LPcube)
app.post(`/balok/volume`, validateCube, Vbalok)
app.post(`/balok/luasPermukaan`, LPbalok)
app.post(`/bola/volume`, validateBola, Vbola)
app.post(`/bola/luasPermukaan`, LPbola)

export default app