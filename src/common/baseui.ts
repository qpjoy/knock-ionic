import { Loading, LoadingController, ToastController, Toast, Popover, PopoverController } from 'ionic-angular';
import {PopoverOptions} from "ionic-angular/components/popover/popover-options";

export abstract class BaseUI {
  constructor() {
    console.log('in baseui')
  }

  protected showLoading(loadingCtrl: LoadingController,
                        message: string): Loading {
    let loader = loadingCtrl.create({
      content: message,
      dismissOnPageChange: true
    });
    loader.present();
    return loader;
  }


  protected showToast(toastCtrl: ToastController, message: string): Toast {
    let toast = toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
    return toast;
  }

  protected showPop(popCtrl: PopoverController, component: any, data: {}, opts: PopoverOptions): Popover {
    let pop = popCtrl.create(component, data, opts);
    pop.present();
    return pop;
  }
}
