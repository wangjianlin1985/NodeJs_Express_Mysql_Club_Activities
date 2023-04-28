import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import ShetuanController from './Shetuan'
import ShetuanxinxiController from './Shetuanxinxi'
import HuiyuanshenqingController from './Huiyuanshenqing'
import YuanxixinxiController from './Yuanxixinxi'
import ShetuanleixingController from './Shetuanleixing'
import ZhuanyexinxiController from './Zhuanyexinxi'
import BanjixinxiController from './Banjixinxi'
import ZhiweixinxiController from './Zhiweixinxi'
import ZhiweishenqingController from './Zhiweishenqing'
import ShetuanhuodongController from './Shetuanhuodong'
import HuodongbaomingController from './Huodongbaoming'
import StoreupController from './Storeup'
import NewsController from './News'
import MessagesController from './Messages'
import MenuController from './Menu'
import DiscussshetuanxinxiController from './Discussshetuanxinxi'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/shetuan', ShetuanController({ config, db }))

	api.use('/shetuanxinxi', ShetuanxinxiController({ config, db }))

	api.use('/huiyuanshenqing', HuiyuanshenqingController({ config, db }))

	api.use('/yuanxixinxi', YuanxixinxiController({ config, db }))

	api.use('/shetuanleixing', ShetuanleixingController({ config, db }))

	api.use('/zhuanyexinxi', ZhuanyexinxiController({ config, db }))

	api.use('/banjixinxi', BanjixinxiController({ config, db }))

	api.use('/zhiweixinxi', ZhiweixinxiController({ config, db }))

	api.use('/zhiweishenqing', ZhiweishenqingController({ config, db }))

	api.use('/shetuanhuodong', ShetuanhuodongController({ config, db }))

	api.use('/huodongbaoming', HuodongbaomingController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/messages', MessagesController({ config, db }))

	api.use('/menu', MenuController({ config, db }))

	api.use('/discussshetuanxinxi', DiscussshetuanxinxiController({ config, db }))

	return api
}
