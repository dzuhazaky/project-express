/**ini adalah file utama dimana ada proses
 * menjalankan server backend
 */

/* memanggil library express*/
import express, { Request, Response } from "express"
import routeBangunDatar from "./route/bangunDatar"
import routeBangunRuang from "./route/bangunRuang"

/* buat wadah inisiasi express*/
const app = express();

/** mendefinisikan PORT berjalannya server */
const PORT = 8000;

/** allow to read JSON as request */
app.use(express.json())

/** proses pertama untuk handle request */
app.get(`/serena`, (request: Request, response: Response) => {

    return response.status(200).json({
        message: `Hello Serena Anaknya Bu Siana`
    })
});

/**read a query request */
app.get(`/moklet`, (request: Request, response: Response) => {
    /** asumsikan data yg dikirim
     * adalah nama dan umur
     */
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()

    let message: string = `My name is ${nama} and i'm umur ${umur} years old`
    return response.status(200).json(message)
})

/** read data request from parameter */
app.get(`/telkom/:nama/:gender`, (request: Request, response: Response) => {
    let nama: string = request.params.nama
    let gender: string = request.params.gender
    let message: string = `My name is ${nama} and i'm ${gender}`
    return response.status(200).json(message)
})

/** read a request from body */
app.post(`/moklet`, (request: Request, response: Response) => {
    /** asumsikan data yang dikirm adalah
     * panjang dan lebar 
     */
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar

    let luasPersegiPanjang: number = panjang * lebar
    let message: string = `Luas persegi panjang adalah ${luasPersegiPanjang}`
    return response.status(200).json(message)
})

/** buatlah sebuah request untuk mengonversi
 * suhu celcius ke fahrenheit, kelvin, dan reaumur
 * menggunakan request parameter
 * exp: http://localhost:8000/celcius/80
 * (80 adalah nilai celciusnya)
 * response data -->
 * {
 * reamur: ?, fahrenheit: ?, kelvin: ?
 * }
 */
app.get(`/celcius/:celcius`, (request: Request, response: Response) => {
    let celcius: number = Number(request.params.celcius)

    let Reamur: number = (4 / 5) * celcius
    let Fahrenheit: number = (9 / 5) * celcius
    let Kelvin: number = celcius + 273.15

    let message: string = `Reamur = ${Reamur}, Fahrenheit = ${Fahrenheit}, Kelvin = ${Kelvin}`
    return response.status(200).json(message)
});

/** create request for count volume of long cube */


/** register route of bangun datar */
app.use(routeBangunDatar)
app.use(routeBangunRuang)

/** run server*/
app.listen(PORT, () => {
    console.log(`🤓☝🏻 Server running on port ${PORT}`);
});