import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductListComponent } from './products/product-list.component';
import { RouterModule } from "@angular/router";
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpacesPipe,
        StarComponent,
        ProductDetailComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id',
              canActivate: [ProductDetailGuard],
              component: ProductDetailComponent },
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ])
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
