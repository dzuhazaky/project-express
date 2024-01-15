import { Request, Response } from "express";


const Vtabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const volume = phi * r * r * t
        return response.status(200).json({
            status: true, r, t, volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const LPtabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const luasPermukaan = 2 * phi * r * t + 2 * phi * r * r
        return response.status(200).json({
            status: true, r, t, luasPermukaan
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const Vcube = (request: Request, response: Response) => {
    try {
        const s: number = Number(request.body.s)
        const volume = s * s * s
        return response.status(200).json({
            status: true, s, volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const LPcube = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)

        const luasPermukaan = p * l * t
        return response.status(200).json({
            status: true, p, l, t, luasPermukaan
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const Vbalok = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)

        const volume = p * l * t
        return response.status(200).json({
            status: true, p, l, t, volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const LPbalok = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const t: number = Number(request.body.t)

        const luasPermukaan = 2 * (p * l + p * t + l* t)
        return response.status(200).json({
            status: true, p, l, t, luasPermukaan
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const Vbola = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)

        const volume = 4/3 * phi * r * r * r
        return response.status(200).json({
            status: true, phi, r, volume
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const LPbola = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)

        const luasPermukaan = 2 * phi * r * (r + t)
        return response.status(200).json({
            status: true, phi, r, t, luasPermukaan
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}

export { Vtabung, LPtabung, Vcube, LPcube, Vbalok, LPbalok, Vbola, LPbola  }