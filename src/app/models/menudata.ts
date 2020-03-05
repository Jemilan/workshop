import {Item, Menu} from "./menu";


export  let menuData:Menu[]=[
  new Menu('Home', 'pi pi-fw pi-home','Home',[new Item('Context',

    'pi pi-fw pi-share-alt',''),
    new Item('Testimonials','pi pi-fw pi-pencil','')

  ]),

  new Menu('Products', 'pi pi-fw pi-plus','Products',[
    new Item('Diamond','pi pi-fw pi-key','Products/diamond'),
    new Item('Gold','pi pi-fw pi-pencil','Products/gold'),
    new Item('Silver','pi pi-fw pi-cog','Products/silver'),
  ]),

  /* new Menu('Login', 'pi pi-fw pi-sign-in','Login',[ ] ),*/

  new Menu('savingScheme', 'pi pi-fw pi-bell','savingScheme',[ 
    new Item('parent','pi pi-fw pi-key','savingScheme/parent'),
  ]),
  new Menu('Offers', 'pi pi-fw pi-sign-out','Offers',[

  ]),


]
