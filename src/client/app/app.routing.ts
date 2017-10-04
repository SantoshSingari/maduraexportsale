import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { AuthGuard } from './_guards/index';
import { HomeComponent } from './home/index';
//import {UserComponent } from './user/user.component';
import { SalesComponent } from './sales/store/capture.sales.component';
import { KpiStoreComponent } from './sales/store/capture.kpi.data.component';
import { CountryStoreComponent } from './common/country.store.component'
import { PictureStoreComponent } from './sales/store/capture.pictures.component';
import { SalesViewComponent } from './sales/view/summary.sales.component';
import { KpiViewComponent } from './sales/view/kpi.data.component';
import { PictureViewComponent } from './sales/view/pictures.component';
import { QueryAddComponent } from './queries_issues/add.component';
import { QuerySummaryComponent } from './queries_issues/query.summary.component';

//import {RegisterComponent} from './register/index';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'StoreSales', component: SalesComponent },
  { path: 'StoreKpi', component: KpiStoreComponent},
  { path: 'StorePicture', component: PictureStoreComponent },
  { path: 'ViewSales', component: SalesViewComponent },
  { path: 'ViewKpi', component: KpiViewComponent },
  { path: 'ViewPictures', component: PictureViewComponent },
  { path: 'QueryAdd', component: QueryAddComponent },
  { path: 'QuerySummary', component: QuerySummaryComponent },

  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);

