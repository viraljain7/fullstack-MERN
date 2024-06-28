const validator = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next()
    } catch (error) {
        const error_message = error.errors[0].message;

        res.status(400).json({
            message: error_message
        })

    }
}

export default validator;