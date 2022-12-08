import OrgModel from '../models/Org.model.js'

/**
 * It runs as async because sequelize is build on the promise technology. It's promise-based
 */
class OrgController {
    constructor() { 
        console.log('Org Controller has been fired');
    }


    list = async (req, res) => {
        let { sortkey, sortdir, limit, attributes } = req.query

        const order = [sortkey ? sortkey : 'id']
        order.push(sortdir || 'ASC')
        limit = parseInt(limit) || 1000
        const attr = attributes ? attributes.split(',') : new Array('id', 'title')
        console.log(attr);

        /**
         * Creates a const called result
         * Await OrgModel.findAll instead of SELECT *
         */
        const result = await OrgModel.findAll({
            attributes: attr,
            orderby: [order],
            limit: limit
        })
        res.json(result)
    }
    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await OrgModel.findOne({
            attributes: ['id', 'title', 'address', 'zipcode', 'city', 'country', 'created_at', 'updated_at'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { title, address, zipcode, city, country } = req.body;

        if(title && address && zipcode && city && country) {
            const model = await OrgModel.create(req.body)
            res.json({ newId: model.id }) //Returns a json object with the id
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id } = req.params ||0
        const { title, address, zipcode, city, country } = req.body;
        
        if(id && title && address && zipcode && city && country) {
            const model = await OrgModel.update(req.body, {
                where: { id: id },
                // individualHooks: true
            })
            res.json({
                msg: 'Organisation Updated'
            })
        } else {
            res.sendStatus(418)
        }
    } 

    delete = async (req, res) => {
        try {
            await OrgModel.destroy({ where: { id: req.params.id }});
            res.sendStatus(200)
        }
        catch(err) {
            res.send(err)
        }
    }	

}

export default OrgController