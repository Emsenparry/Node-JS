import UserModel from '../models/users.model.js'
import OrgModel from '../models/org.model.js';

/**
 * Join
 */
OrgModel.hasMany(UserModel)
UserModel.belongsTo(OrgModel)


/**
 * It runs as async because sequelize is build on the promise technology. It's promise-based
 */
class UserController {
    constructor() { 
        console.log('User Controller has been fired');
    }


    list = async (req, res) => {
        let { sortkey, sortdir, limit, attributes } = req.query

        const order = [sortkey ? sortkey : 'id']
        order.push(sortdir || 'ASC')
        limit = parseInt(limit) || 1000
        const attr = attributes ? attributes.split(',') : new Array('id', 'firstname', 'lastname', 'email')
        console.log(attr);

        /**
         * Creates a const called result
         * Await UserModel.findAll instead of SELECT *
         */
        const result = await UserModel.findAll({
            attributes: attr,
            orderby: [order],
            limit: limit,
            include: {
                model: OrgModel,
                attributes: ['id', 'title']
            }
        })
        res.json(result)
    }
    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await UserModel.findOne({
            attributes: ['id', 'firstname', 'lastname', 'email', 'created_at', 'updated_at'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { firstname, lastname, email, password, org_id } = req.body;

        if(firstname && lastname && email && password && org_id) {
            const model = await UserModel.create(req.body)
            res.json({ newId: model.id }) //Returns a json object with the id
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id } = req.params ||0
        const { firstname, lastname, email, password, org_id } = req.body;
        
        if(id && firstname && lastname && email && password && org_id) {
            const model = await UserModel.update(req.body, {
                where: { id: id },
                individualHooks: true
            })
            res.json({
                msg: 'Record Update'
            })
        } else {
            res.sendStatus(418)
        }
    } 

    delete = async (req, res) => {
        try {
            await UserModel.destroy({ where: { id: req.params.id }});
            res.sendStatus(200)
        }
        catch(err) {
            res.send(err)
        }
    }	

}

export default UserController