import { MatButtonModule, MatCardModule, MatToolbarModule,MatGridListModule,MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatCardModule,MatGridListModule,MatInputModule],
    exports: [MatButtonModule, MatToolbarModule, MatCardModule,MatGridListModule,MatInputModule],
})
export class AppMaterialModule { }