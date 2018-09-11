import {Component} from '@angular/core';

import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {MapPage} from "../map/map";
import {MapGooglePage} from "../map-google/map-google";
import {GeocodePage} from "../geocode/geocode";
import {NotesPage} from "../notes/notes";
import {AnimationsPage} from "../animations/animations";
import {ChatterPage} from "../chatter/chatter";
import {BreadcrumbPage} from "../breadcrumb/breadcrumb";
import {InventoryPage} from "../inventory/inventory";
import {OrdersPage} from "../orders/orders";
import {GtmVisitHistoryPage} from "../gtm-visit-history/gtm-visit-history";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  mapUrl = MapPage;
  visitHistory = GtmVisitHistoryPage
  orders = OrdersPage;
  inventory = InventoryPage;
  breadcrumb = BreadcrumbPage;
  chat = ChatterPage
  myStores = HomePage;
  anim = AnimationsPage;
  tab3Root = ContactPage;
  mapGoogleUrl = MapGooglePage
  notesUrl = NotesPage
  geocode = GeocodePage

  constructor() {

  }
}
