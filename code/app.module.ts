import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map'



import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/login/login/login.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard/dashboard.component';
import { UserComponent } from 'src/app/user/user/user.component';
import { UsersComponent } from 'src/app/users/users/users.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { MypipePipe } from './mypipe.pipe';
import { PipeComponent } from './pipe/pipe.component';
// import { FilterPipe } from './filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

import {routing} from './app.routing'
import { ProductService } from 'src/app/services/product.service';
import { JsonDataComponent } from './json-data/json-data.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ChildDashComponent } from 'src/app/dashboard/dashboard/child-dash/child-dash.component';
import { ParentComponent } from './component-intraction/parent/parent.component';
import { ChildComponent } from './component-intraction/child/child.component';
import { BasicsComponent } from './basics/basics.component';
import { DbComponent } from './db/db.component';
import { ChartComponent } from './chart/chart.component';
import { WeatherService } from 'src/app/weather.service';
import { SendComponent } from './send/send.component';
import { ReciveComponent } from './recive/recive.component';
import { PipesComponent } from './pipes/pipes.component';
import { PowerPipe } from './pipes/power.pipe';
import { HobbypipePipe } from './pipes/hobbypipe.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AgePipe } from './pipes/age.pipe';


const routes: Routes = [
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    UsersComponent,
    NameEditorComponent,
    HeroFormComponent,
    MypipePipe,
    PipeComponent,
    // FilterPipe,
    FilterComponent,
    CartComponent,
    ProductComponent,
    JsonDataComponent,
    RecipesComponent,
    RecipesDetailComponent,
    RecipesListComponent,
    RecipeItemComponent,
    ChildDashComponent,
    ParentComponent,
    ChildComponent,
    BasicsComponent,
    DbComponent,
    ChartComponent,
    SendComponent,
    ReciveComponent,
    PipesComponent,
    PowerPipe,
    HobbypipePipe,
    FilterPipe,
    AgePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
