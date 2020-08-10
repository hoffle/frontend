import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((m) => m.AuthPageModule),
  },
  {
    path: "bible",
    loadChildren: () =>
      import("./bible/bible.module").then((m) => m.BiblePageModule),
  },
  {
    path: "error",
    loadChildren: () =>
      import("./error/error.module").then((m) => m.ErrorPageModule),
  },
  {
    path: 'files',
    loadChildren: () => import('./files/files.module').then( m => m.FilesPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./quiz/overview/overview.module').then( m => m.OverviewPageModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./quiz/questions/questions.module').then( m => m.QuestionsPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./quiz/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'finsh',
    loadChildren: () => import('./quiz/finsh/finsh.module').then( m => m.FinshPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
