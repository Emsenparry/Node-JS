import UserModel from '../models/users.model.js'

class UserController {
    list = async (req, res) => {
        let { sortkey, sortdir, limit, attributes } = req.query

        const order = [sortkey ? sortkey : 'id']
        order.push(sortdir || 'ASC')
        limit = parseInt(limit) || 1000
        const attr = attributes ? attributes.split(',') : new Array('id', 'firstname', 'lastname', 'email')
        console.log(attr);

        const result = await UserModel.findAll({
            attributes: attr,
            orderby: [order],
            limit: limit
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
}

export default UserController