import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { CompletedComponent } from './completed/completed.component';
import { PendingComponent } from './pending/pending.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TodosummComponent } from './todosumm/todosumm.component';
import { SignUpFormComponent } from './user/signupform.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';

let routes: Routes = [
  {
    path: '',
    component: SignUpFormComponent
  },
  {
    path: 'home/:username',
    component: HomeComponent,
    children: [{
      path: 'list',
      component: ToDoListComponent,
    },
    {
      path: 'completed',
      component: CompletedComponent
    },
    {
      path: 'pending',
      component: PendingComponent
    },
    {
      path:'summ',
      component:TodosummComponent
    }
    ]
  },
{
  path:'**',
  component:PnfComponent
}

]
    

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    TodoitemComponent,
    CompletedComponent,
    PendingComponent,
    TodosummComponent,
    SignUpFormComponent,
    HomeComponent,
    PnfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
