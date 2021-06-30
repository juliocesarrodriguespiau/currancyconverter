const service = require("./service");

class Convert { 
    async converter (req, resp){

        try {
            const { from, to, amount } = req.params;

            //validar o retorno from, to, amount.
            const result = await service.converter(from, to, amount);

            const result2 = result.toFixed(2)

            resp.status(200).send({result2});

        } catch (error) {
            resp.status(500).send({error: error.message});
        }
    }
}

module.exports = new Convert();
