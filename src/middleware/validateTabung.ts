import { NextFunction, Request, Response } from "express"
import Joi from "joi"

/** create validation schema */
let schema = Joi.object({
    Jari: Joi.number().required().min(1),
    Tinggi: Joi.number().required().min(1)
})

/** create a validation function */
let validateTabung = (request: Request, 
    response: Response, 
    next: NextFunction) => {
    let { error } = schema.validate(request.body)
    if (error) {
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

export { validateTabung }