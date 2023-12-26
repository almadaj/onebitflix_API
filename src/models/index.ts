import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./Episode";
import { User } from "./User";
import { Favorite } from "./Favorite";
import { Like } from "./Like";

Category.hasMany(Course, { as: "courses" });

Course.belongsTo(Category);
Course.belongsToMany(User, { through: Favorite });
Course.hasMany(Episode, { as: "episodes" });
Course.hasMany(Favorite, { as: "FavoriteUsers", foreignKey: "course_id" });
Course.belongsToMany(User, { through: Like });
Episode.belongsTo(Course);

Favorite.belongsTo(Course);
Favorite.belongsTo(User);

User.belongsToMany(Course, { through: Favorite });
User.belongsToMany(Course, { through: Like });
User.hasMany(Favorite, { as: "FavoriteUsers", foreignKey: "user_id" });
export { Course, Category, Episode, Favorite, Like, User };
