import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 用户
const YonghuModel = sequelize.define('YonghuModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	xuehao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '学号'
	},
	mima: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '密码'
	},
	xingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '姓名'
	},
	xingbie: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '性别'
	},
	touxiang: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '头像'
	},
	yuanxi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '院系'
	},
	zhuanye: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '专业'
	},
	banji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '班级'
	},
	nianling: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '年龄'
	},
	youxiang: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '邮箱'
	},
	shenfenzheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '身份证'
	},
	shouji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '手机'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'yonghu'
})

export default YonghuModel
