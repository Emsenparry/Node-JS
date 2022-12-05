import { sequelize } from "../config/sequelize.config.js"
import { DataTypes, Model} from 'sequelize'

/**
 * Laver en ny klasse og beder den om at nedavre 
 */
class UserModel extends Model{}

UserModel.init({
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        allowNull: false, 
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passowrd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize, 
    modelName: 'user',
    freezeTableName: true,
    underscored: true
    // createdAt: false,
    // updatedAt: false
})

export default UserModel