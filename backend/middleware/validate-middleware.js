const validator = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next()
    } catch (error) {
        const extraDetails = error.errors[0].message;
        const status = 422;
        const message = "Fill the input properly"

        const errorObj = {
            status, message, extraDetails
        }
        next(errorObj)

    }
}

export default validator;