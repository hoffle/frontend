import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((m) => m.AuthPageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "bible",
    loadChildren: () =>
      import("./bible/bible.module").then((m) => m.BiblePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: "error",
    loadChildren: () =>
      import("./error/error.module").then((m) => m.ErrorPageModule),
  },
  {
    path: "courses",
    loadChildren: () =>
      import("./courses/courses.module").then((m) => m.CoursesPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: "finish",
    loadChildren: () =>
      import("./courses/finish/finish.module").then((m) => m.FinishPageModule),
  },
  {
    path: "overview",
    loadChildren: () =>
      import("./courses/overview/overview.module").then(
        (m) => m.OverviewPageModule
      ),
  },
  {
    path: "questions",
    loadChildren: () =>
      import("./courses/questions/questions.module").then(
        (m) => m.QuestionsPageModule
      ),
  },
  {
    path: "user",
    loadChildren: () =>
      import("./user/user.module").then((m) => m.UserPageModule),
  },
  {
    path: "files",
    loadChildren: () =>
      import("./files/files.module").then((m) => m.FilesPageModule),
  },
  {
    path: "search",
    loadChildren: () =>
      import("./files/search/search.module").then((m) => m.SearchPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
