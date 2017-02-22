import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AboutRoutingModule } from './about-routing.module';

@NgModule({
    imports: [AboutRoutingModule, MaterialModule],
    declarations: [AboutRoutingModule.components]
})
export class AboutModule { }