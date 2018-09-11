import { NgModule } from '@angular/core';
// import { FindMoreComponent } from './find-more/find-more';
import {IonicModule} from "ionic-angular";
import { MoreOperationComponent } from './more-operation/more-operation';
import { MyFrameComponent } from './my-frame/my-frame';
import { AngFrameComponent } from './ang-frame/ang-frame';
import { GtmHeaderComponent } from './gtm-header/gtm-header';
import { CounterComponent } from './counter/counter';
@NgModule({
	declarations: [
    // FindMoreComponent,
    MoreOperationComponent,
    MyFrameComponent,
    AngFrameComponent,
    GtmHeaderComponent,
    CounterComponent],
	imports: [IonicModule],
	exports: [
    // FindMoreComponent,
    MoreOperationComponent,
    MyFrameComponent,
    AngFrameComponent,
    GtmHeaderComponent,
    CounterComponent]
})
export class ComponentsModule {}
