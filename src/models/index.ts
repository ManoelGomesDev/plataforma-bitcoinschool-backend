import { Category } from "./Category";
import { Course } from './Course';
import { Episode } from './Episode';
import { Favorite } from "./Favorite";
import { Like } from "./Like";
import { User } from './User'
import { WatchTime } from "./WatchTime";


Category.hasMany(Course)

Course.belongsTo(Category)
Course.hasMany(Episode)
Course.belongsToMany(User, { through: Favorite })
Course.belongsToMany(User, { through: Like })
Course.hasMany(Favorite, { as: 'favoritesUsers', foreignKey: 'course_id' })

Episode.belongsTo(Course)
Episode.belongsToMany(User, { through: WatchTime })

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, { through: Favorite })
User.belongsToMany(Course, { through: Like })
Episode.belongsToMany(User, { through: WatchTime })
User.hasMany(Favorite, { as: 'favoritesCourses', foreignKey: 'user_id' })


export {
    Course,
    Category,
    Episode,
    Favorite,
    Like,
    User,
    WatchTime
}