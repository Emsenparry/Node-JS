/**
 * imports sequelize connection
 * imports DataTypes and Model from the sequelize package which we've installed
 */
import { sequelize } from "../config/sequelize.config.js"
import { DataTypes, Model} from 'sequelize'

/**
 * Create a new class called UserModel which inherits (nedarvre) all properties
 * and all methods from the Model{}
 */
class UserModel extends Model{}

/**
 * Calls the method init on UserModel which consists of two objects.
 * 1st consists of propterties
 * 2nd consists of objects
 */
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
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
    /**
     * Has our sequelize connection with and makes a new table in our HeidiSQL
     * Have our modelName 'user' 
     * freezeTableName makes it singular (ental)
     * underscored makes a _ if necessary (example: createdAt = created_at)
     */
}, {
    sequelize, 
    modelName: 'user',
    freezeTableName: true,
    underscored: true
    // createdAt: false,
    // updatedAt: false
})

export default UserModel