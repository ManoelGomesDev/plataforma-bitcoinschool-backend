

import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'



import { sequelize } from '../database'
import { adminJsResources } from "./resources";
import { Category, Course, Episode, User } from '../models';

import { locale } from './locale'
import { dashboardOptions } from './dashboard'
import { brandingOptions } from './branding'
import { authtenticationOptions } from './authentication'
import session from "express-session"
import connectSession from "connect-session-sequelize"
import { ADMINJS_COOKIE_PASSWORD } from '../config/enviroment';

const SequelizeStore = connectSession(session.Store)
const store = new SequelizeStore({ db: sequelize })
store.sync()

AdminJs.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJs({
    databases: [sequelize],
    rootPath: '/admin',
    dashboard: dashboardOptions,
    locale: locale,
    resources: adminJsResources,
    branding: brandingOptions,
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs, authtenticationOptions , null, {
    resave: false,
    saveUninitialized: false,
    store: store,
    secret: ADMINJS_COOKIE_PASSWORD
})