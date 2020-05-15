import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GirlComponent } from './menu/girl/girl.component';
import { BoyComponent } from './menu/boy/boy.component';
import { ChildComponent } from './menu/child/child.component';
import { ContactComponent } from './menu/contact/contact.component';
import { HomeComponent } from './menu/home/home.component';
import { AboutComponent } from './menu/about/about.component';
import { SigninComponent } from './menu/signin/signin.component';
import { CartComponent } from './menu/cart/cart.component';
import { NikeComponent } from './shoes/nike/nike.component';
import { AdidasComponent } from './shoes/adidas/adidas.component';
import { PumaComponent } from './shoes/puma/puma.component';
import { RebookComponent } from './shoes/rebook/rebook.component';
import { AllComponent } from './shoes/all/all.component';
import { NewbalanceComponent } from './shoes/newbalance/newbalance.component';
import { SignupuserComponent } from './register/signupuser/signupuser.component';
import { SigninuserComponent } from './register/signinuser/signinuser.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: '/home/all', pathMatch: 'full' },
    {path: 'nike', component: NikeComponent},
    {path: 'adidas', component: AdidasComponent},
    {path: 'puma', component: PumaComponent},
    {path: 'rebook', component: RebookComponent},
    {path: 'all', component: AllComponent},
    {path: 'newbalance', component: NewbalanceComponent},
  ] },
  { path: 'girl', component: GirlComponent },
  { path: 'boy', component: BoyComponent },
  { path: 'child', component: ChildComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent, children: [
    {path: '', redirectTo: '/signin/signupuser', pathMatch: 'full'},
    {path: 'signupuser', component: SignupuserComponent},
    {path: 'signinuser', component: SigninuserComponent},
  ]},
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
