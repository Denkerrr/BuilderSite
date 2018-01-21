import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreatingSiteComponent } from './creating-site/creating-site.component';
import { InstructionComponent } from './instruction/instruction.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'create', component: CreatingSiteComponent},
    {path: 'instruction', component: InstructionComponent},
    {path: 'contacts', component: ContactsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CreatingSiteComponent,
    InstructionComponent,
    ContactsComponent
  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
