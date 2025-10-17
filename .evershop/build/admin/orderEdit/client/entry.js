
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import e3171d27da2de110e000c4259d7f00e5c from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import ea80f2eb428a5be19dab3afc9726d3638 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import ee2d253a6a6e2a18957b47298f244ad01 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import ee0584e4c842b7719b2b0df121a2fffed from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import ece004c7dbf7b9dbf975008c067cddaaa from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import e65db8d8930f44a7527c0f3b4321fa6eb from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e82615702f998db30a93666079b004c4d from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Layout.js';
import e60ad012a7c55bac383b340bbf11a02d9 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e8a6333d036faee5b9df54d6ca42c11a3 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Meta.js';
import e9218f98c24afec602ae86cca3aa3580f from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import ee3501d1781d81e58b3b442e27f586992 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import eab6d184b74679597daee83d2e711f364 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import eefec0fb65b57195a30639ad152b2a0e6 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import e99ab1d1a2d521ad6bfd2c18bd74feb1c from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import ecc17f3aec5f33b81eae2eaedb64af386 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cod/pages/admin/orderEdit/CaptureButton.js';
import edccca9d4e00a767f9c058d0307008d0c from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import ee6de710cb500f7246c8f5902db1111e3 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import ed909821e6ae7efa397435442d154a420 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Activities.js';
import e3d5a763a9b69e0d6041d31686322da26 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/AddTrackingButton.js';
import e000a3ab5457c9483891184496ad2925e from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CancelButton.js';
import ea419bff7b7d7b23c097c59fd004377fe from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Customer.js';
import edd2de14b9135dfc80b9eece3cd22e7dd from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CustomerNotes.js';
import e14ad8cdde34a18f45309ca388df557ff from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Items.js';
import eb72492dee371b48339e9ea1ebdf99c16 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Layout.js';
import ee398f4f5851f1cc7bd542fb022cc19c7 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/MarkDeliveredButton.js';
import e6a525ab0959357a76640f58c6831b6da from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/PageHeading.js';
import e8a7c9bb86edb4a8a6723662d33da770f from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Payment.js';
import e50a7a732b3cab25df83873721c1bdd67 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/ShipButton.js';
import e245db624f29616877c3df9defd68ae21 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Status.js';
import e7ad9999380aecdb83da82ccee32ef877 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/TrackingButton.js';
import ef180e66627c6e915e1ffee344905acd5 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/paypal/pages/admin/orderEdit/PaypalCaptureButton.js';
import ea40796766400a2015ab3d4b636606b5c from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeRefundButton.js';
import ec136fcf504c66278db5de839da1d8128 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e4b22bd363b34ccbb5dafa8a957e3f3d2 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e7fb14180e43268cce9e4167444c44411 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import eb85153c90e68561144d446ce6b33ed13 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import e24157a6808a98db0120ac74d9fd1f038 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e4645bed90f0d61034e3da741c91c8927 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeCaptureButton.js';
import ed715df896bdf070df08857fa442c5fca from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import e7be0a6db2ed5cc83cac02d74a437dce8 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/extensions/sample/dist/pages/admin/all/Hello.js';
import collection_products from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/components/admin/widgets/CollectionProductsSetting.js';
import text_block from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/components/admin/widgets/TextBlockSetting.js';
import basic_menu from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/components/admin/widgets/BasicMenuSetting.js';
Area.defaultProps.components = {
  header: {
    e3171d27da2de110e000c4259d7f00e5c: {
      id: 'e3171d27da2de110e000c4259d7f00e5c',
      sortOrder: 50,
      component: { default: e3171d27da2de110e000c4259d7f00e5c }
    },
    e60ad012a7c55bac383b340bbf11a02d9: {
      id: 'e60ad012a7c55bac383b340bbf11a02d9',
      sortOrder: 10,
      component: { default: e60ad012a7c55bac383b340bbf11a02d9 }
    },
    eefec0fb65b57195a30639ad152b2a0e6: {
      id: 'eefec0fb65b57195a30639ad152b2a0e6',
      sortOrder: 20,
      component: { default: eefec0fb65b57195a30639ad152b2a0e6 }
    }
  },
  adminMenu: {
    ea80f2eb428a5be19dab3afc9726d3638: {
      id: 'ea80f2eb428a5be19dab3afc9726d3638',
      sortOrder: 20,
      component: { default: ea80f2eb428a5be19dab3afc9726d3638 }
    },
    ece004c7dbf7b9dbf975008c067cddaaa: {
      id: 'ece004c7dbf7b9dbf975008c067cddaaa',
      sortOrder: 60,
      component: { default: ece004c7dbf7b9dbf975008c067cddaaa }
    },
    eab6d184b74679597daee83d2e711f364: {
      id: 'eab6d184b74679597daee83d2e711f364',
      sortOrder: 10,
      component: { default: eab6d184b74679597daee83d2e711f364 }
    },
    edccca9d4e00a767f9c058d0307008d0c: {
      id: 'edccca9d4e00a767f9c058d0307008d0c',
      sortOrder: 40,
      component: { default: edccca9d4e00a767f9c058d0307008d0c }
    },
    ee6de710cb500f7246c8f5902db1111e3: {
      id: 'ee6de710cb500f7246c8f5902db1111e3',
      sortOrder: 30,
      component: { default: ee6de710cb500f7246c8f5902db1111e3 }
    },
    ec136fcf504c66278db5de839da1d8128: {
      id: 'ec136fcf504c66278db5de839da1d8128',
      sortOrder: 50,
      component: { default: ec136fcf504c66278db5de839da1d8128 }
    },
    eb85153c90e68561144d446ce6b33ed13: {
      id: 'eb85153c90e68561144d446ce6b33ed13',
      sortOrder: 500,
      component: { default: eb85153c90e68561144d446ce6b33ed13 }
    }
  },
  quickLinks: {
    ee2d253a6a6e2a18957b47298f244ad01: {
      id: 'ee2d253a6a6e2a18957b47298f244ad01',
      sortOrder: 20,
      component: { default: ee2d253a6a6e2a18957b47298f244ad01 }
    },
    e4b22bd363b34ccbb5dafa8a957e3f3d2: {
      id: 'e4b22bd363b34ccbb5dafa8a957e3f3d2',
      sortOrder: 30,
      component: { default: e4b22bd363b34ccbb5dafa8a957e3f3d2 }
    }
  },
  settingPageMenu: {
    ee0584e4c842b7719b2b0df121a2fffed: {
      id: 'ee0584e4c842b7719b2b0df121a2fffed',
      sortOrder: 15,
      component: { default: ee0584e4c842b7719b2b0df121a2fffed }
    },
    e7fb14180e43268cce9e4167444c44411: {
      id: 'e7fb14180e43268cce9e4167444c44411',
      sortOrder: 10,
      component: { default: e7fb14180e43268cce9e4167444c44411 }
    },
    e24157a6808a98db0120ac74d9fd1f038: {
      id: 'e24157a6808a98db0120ac74d9fd1f038',
      sortOrder: 5,
      component: { default: e24157a6808a98db0120ac74d9fd1f038 }
    },
    ed715df896bdf070df08857fa442c5fca: {
      id: 'ed715df896bdf070df08857fa442c5fca',
      sortOrder: 20,
      component: { default: ed715df896bdf070df08857fa442c5fca }
    }
  },
  footerLeft: {
    e65db8d8930f44a7527c0f3b4321fa6eb: {
      id: 'e65db8d8930f44a7527c0f3b4321fa6eb',
      sortOrder: 10,
      component: { default: e65db8d8930f44a7527c0f3b4321fa6eb }
    },
    e99ab1d1a2d521ad6bfd2c18bd74feb1c: {
      id: 'e99ab1d1a2d521ad6bfd2c18bd74feb1c',
      sortOrder: 20,
      component: { default: e99ab1d1a2d521ad6bfd2c18bd74feb1c }
    }
  },
  body: {
    e82615702f998db30a93666079b004c4d: {
      id: 'e82615702f998db30a93666079b004c4d',
      sortOrder: 10,
      component: { default: e82615702f998db30a93666079b004c4d }
    },
    ee3501d1781d81e58b3b442e27f586992: {
      id: 'ee3501d1781d81e58b3b442e27f586992',
      sortOrder: 10,
      component: { default: ee3501d1781d81e58b3b442e27f586992 }
    }
  },
  head: {
    e8a6333d036faee5b9df54d6ca42c11a3: {
      id: 'e8a6333d036faee5b9df54d6ca42c11a3',
      sortOrder: 5,
      component: { default: e8a6333d036faee5b9df54d6ca42c11a3 }
    }
  },
  adminNavigation: {
    e9218f98c24afec602ae86cca3aa3580f: {
      id: 'e9218f98c24afec602ae86cca3aa3580f',
      sortOrder: 10,
      component: { default: e9218f98c24afec602ae86cca3aa3580f }
    }
  },
  orderPaymentActions: {
    ecc17f3aec5f33b81eae2eaedb64af386: {
      id: 'ecc17f3aec5f33b81eae2eaedb64af386',
      sortOrder: 10,
      component: { default: ecc17f3aec5f33b81eae2eaedb64af386 }
    },
    ef180e66627c6e915e1ffee344905acd5: {
      id: 'ef180e66627c6e915e1ffee344905acd5',
      sortOrder: 10,
      component: { default: ef180e66627c6e915e1ffee344905acd5 }
    },
    ea40796766400a2015ab3d4b636606b5c: {
      id: 'ea40796766400a2015ab3d4b636606b5c',
      sortOrder: 10,
      component: { default: ea40796766400a2015ab3d4b636606b5c }
    },
    e4645bed90f0d61034e3da741c91c8927: {
      id: 'e4645bed90f0d61034e3da741c91c8927',
      sortOrder: 10,
      component: { default: e4645bed90f0d61034e3da741c91c8927 }
    }
  },
  leftSide: {
    ed909821e6ae7efa397435442d154a420: {
      id: 'ed909821e6ae7efa397435442d154a420',
      sortOrder: 30,
      component: { default: ed909821e6ae7efa397435442d154a420 }
    },
    e14ad8cdde34a18f45309ca388df557ff: {
      id: 'e14ad8cdde34a18f45309ca388df557ff',
      sortOrder: 10,
      component: { default: e14ad8cdde34a18f45309ca388df557ff }
    },
    e8a7c9bb86edb4a8a6723662d33da770f: {
      id: 'e8a7c9bb86edb4a8a6723662d33da770f',
      sortOrder: 20,
      component: { default: e8a7c9bb86edb4a8a6723662d33da770f }
    }
  },
  order_actions: {
    e3d5a763a9b69e0d6041d31686322da26: {
      id: 'e3d5a763a9b69e0d6041d31686322da26',
      sortOrder: 5,
      component: { default: e3d5a763a9b69e0d6041d31686322da26 }
    },
    ee398f4f5851f1cc7bd542fb022cc19c7: {
      id: 'ee398f4f5851f1cc7bd542fb022cc19c7',
      sortOrder: 10,
      component: { default: ee398f4f5851f1cc7bd542fb022cc19c7 }
    },
    e50a7a732b3cab25df83873721c1bdd67: {
      id: 'e50a7a732b3cab25df83873721c1bdd67',
      sortOrder: 10,
      component: { default: e50a7a732b3cab25df83873721c1bdd67 }
    },
    e7ad9999380aecdb83da82ccee32ef877: {
      id: 'e7ad9999380aecdb83da82ccee32ef877',
      sortOrder: 15,
      component: { default: e7ad9999380aecdb83da82ccee32ef877 }
    }
  },
  pageHeadingRight: {
    e000a3ab5457c9483891184496ad2925e: {
      id: 'e000a3ab5457c9483891184496ad2925e',
      sortOrder: 35,
      component: { default: e000a3ab5457c9483891184496ad2925e }
    }
  },
  rightSide: {
    ea419bff7b7d7b23c097c59fd004377fe: {
      id: 'ea419bff7b7d7b23c097c59fd004377fe',
      sortOrder: 15,
      component: { default: ea419bff7b7d7b23c097c59fd004377fe }
    },
    edd2de14b9135dfc80b9eece3cd22e7dd: {
      id: 'edd2de14b9135dfc80b9eece3cd22e7dd',
      sortOrder: 10,
      component: { default: edd2de14b9135dfc80b9eece3cd22e7dd }
    }
  },
  content: {
    eb72492dee371b48339e9ea1ebdf99c16: {
      id: 'eb72492dee371b48339e9ea1ebdf99c16',
      sortOrder: 10,
      component: { default: eb72492dee371b48339e9ea1ebdf99c16 }
    },
    e6a525ab0959357a76640f58c6831b6da: {
      id: 'e6a525ab0959357a76640f58c6831b6da',
      sortOrder: 5,
      component: { default: e6a525ab0959357a76640f58c6831b6da }
    },
    e7be0a6db2ed5cc83cac02d74a437dce8: {
      id: 'e7be0a6db2ed5cc83cac02d74a437dce8',
      sortOrder: 0,
      component: { default: e7be0a6db2ed5cc83cac02d74a437dce8 }
    }
  },
  pageHeadingLeft: {
    e245db624f29616877c3df9defd68ae21: {
      id: 'e245db624f29616877c3df9defd68ae21',
      sortOrder: 200,
      component: { default: e245db624f29616877c3df9defd68ae21 }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    }
  }
} 
ReactDOM.hydrate(
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );