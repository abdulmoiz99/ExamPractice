import { Routes } from '@angular/router';
import { LaureatesComponent } from './laureates/laureates.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "laureates", component: LaureatesComponent },
    { path: "**", component: ErrorComponent }
];
