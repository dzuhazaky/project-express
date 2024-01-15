import { Request, Response } from "express";

/**const atau let digunakan untuk mendeklarasikan variable object / array / function */
const luasLingkaran = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const luas = phi * r * r
        return response.status(200).json({
            status: true, r, luas
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const kelilingLingkaran = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const keliling = 2 * phi * r
        return response.status(200).json({
            status: true, r, keliling
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const luasPersegi = (request: Request, response: Response) => {
    try {
        const s: number = Number(request.body.s)
        const luas = s*s
        return response.status(200).json({
            status: true, s, luas
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const kelilingPersegi = (request: Request, response: Response) => {
    try {
        const s: number = Number(request.body.s)
        const keliling = s*4
        return response.status(200).json({
            status: true, s, keliling
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const luasPersegiPanjang = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const luas = p*l
        return response.status(200).json({
            status: true, p, l, luas
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const kelilingPersegiPanjang = (request: Request, response: Response) => {
    try {
        const p: number = Number(request.body.p)
        const l: number = Number(request.body.l)
        const keliling = 2*(p+l)
        return response.status(200).json({
            status: true, p, l, keliling
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const luasSegitiga = (request: Request, response: Response) => {
    try {
        const a: number = Number(request.body.a)
        const t: number = Number(request.body.t)
        const luas = 1/2 * a * t 
        return response.status(200).json({
            status: true, a, t, luas
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}
const kelilingSegitiga = (request: Request, response: Response) => {
    try {
        const a: number = Number(request.body.a)
        const b: number = Number(request.body.b)
        const c: number = Number(request.body.c)
        const keliling = a+b+c
        return response.status(200).json({
            status: true, a, b, c, keliling
        })
    } catch (error) {
        return response.status(500).json({
            status: false, message: error
        })
    }
}

export { luasLingkaran , kelilingLingkaran , luasPersegi , kelilingPersegi, luasPersegiPanjang, kelilingPersegiPanjang, luasSegitiga, kelilingSegitiga }