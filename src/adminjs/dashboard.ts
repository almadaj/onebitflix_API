import AdminJs, { PageHandler } from "adminjs";
import { Course } from "../models/Course";
import { Episode } from "../models/Episode";
import { Category } from "../models/Category";
import { User } from "../models/User";

export const dashboardOptions: {
  handler?: PageHandler;
  component?: string;
} = {
  component: AdminJs.bundle("./components/Dashboard"),
  handler: async (req, res, context) => {
    const courses = await Course.count();
    const episodes = await Episode.count();
    const categories = await Category.count();
    const standardUsers = await User.count({ where: { role: "user" } });

    res.json({
      Cursos: courses,
      Episódios: episodes,
      Categorias: categories,
      Usuários: standardUsers,
    });
  },
};
