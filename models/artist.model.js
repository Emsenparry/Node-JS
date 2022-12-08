import { sequelize } from '../config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class ArtistModel extends Model{}

ArtistModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'artist',
    freezeTableName: true,
    underscored: true
})