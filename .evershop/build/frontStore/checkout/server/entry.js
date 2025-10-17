import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Area } from '@evershop/evershop/components/common';
import { renderHtml } from '@evershop/evershop/components/common';
import e1ba76f1f7bf47c7d8870a666a87709ad from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import eeb6bbcc09861df774a7ba7f87fda651a from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCart.js';
import e6c41f2bf2665b254cd1580a84024cc20 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/Checkout.js';
import eab50d97ac0a8c54e10d9b37e21eb0bf9 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/PaymentStep.js';
import ef387cb548f2f06fe3479f2815b110355 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/ShipmentStep.js';
import e3b6545ecc24b5b03854990a7c202ed14 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/ShippingMethods.js';
import e15f35c341f488ffe94119483afd086e3 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/ShippingNote.js';
import e94b908877112d8d17878f850950a5a4f from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/Summary.js';
import e0f7442048617ae89010945e7181f0263 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/SummaryMobile.js';
import e82164e0f695e1137c63e8b870f35c832 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Breadcrumb.js';
import e8e2a8118ce6b55b9d6fc78c1a86339fa from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Footer.js';
import eb1b358dca904ba46c13034db4358b3cc from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/HeadTags.js';
import e7235149ebdd24a96188ab6dce06d7c08 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Layout.js';
import e4b68569eced0f3f89cb478080e90d74e from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Logo.js';
import e8291be196288649c279f27da0bb155b6 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Notification.js';
import e0b1071cbba6c1184c32f655752720a16 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/cod/pages/frontStore/checkout/CashOnDelivery.js';
import e173de16cb7991dc0c5b7c9ec5aa75457 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/UserIcon.js';
import e7b540b6243399bba067d4d2493550cb1 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/checkout/CustomerInfoStep.js';
import ebec963fffb84df84f58d20433f51e49c from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/paypal/pages/frontStore/checkout/Paypal.js';
import e47471c3dfa766ce66ac04e91cfb99c2c from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/modules/stripe/pages/frontStore/checkout/Stripe.js';
import e0f6777a18b35c38e36b1d6d6ca2a92f8 from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/extensions/sample/dist/pages/frontStore/all/FreeShippingMessage.js';
import collection_products from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/components/frontStore/widgets/CollectionProducts.js';
import text_block from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/components/frontStore/widgets/TextBlock.js';
import basic_menu from 'file:///C:/Users/Ezequiel/Desktop/Utilidades/Trabajo/app/Proyectos/arex/node_modules/@evershop/evershop/dist/components/frontStore/widgets/BasicMenu.js';
export default renderHtml;
Area.defaultProps.components = {
  'icon-wrapper': {
    e1ba76f1f7bf47c7d8870a666a87709ad: {
      id: 'e1ba76f1f7bf47c7d8870a666a87709ad',
      sortOrder: 5,
      component: { default: e1ba76f1f7bf47c7d8870a666a87709ad }
    },
    eeb6bbcc09861df774a7ba7f87fda651a: {
      id: 'eeb6bbcc09861df774a7ba7f87fda651a',
      sortOrder: 10,
      component: { default: eeb6bbcc09861df774a7ba7f87fda651a }
    },
    e173de16cb7991dc0c5b7c9ec5aa75457: {
      id: 'e173de16cb7991dc0c5b7c9ec5aa75457',
      sortOrder: 30,
      component: { default: e173de16cb7991dc0c5b7c9ec5aa75457 }
    }
  },
  content: {
    e6c41f2bf2665b254cd1580a84024cc20: {
      id: 'e6c41f2bf2665b254cd1580a84024cc20',
      sortOrder: 10,
      component: { default: e6c41f2bf2665b254cd1580a84024cc20 }
    },
    e82164e0f695e1137c63e8b870f35c832: {
      id: 'e82164e0f695e1137c63e8b870f35c832',
      sortOrder: 0,
      component: { default: e82164e0f695e1137c63e8b870f35c832 }
    }
  },
  checkoutSteps: {
    eab50d97ac0a8c54e10d9b37e21eb0bf9: {
      id: 'eab50d97ac0a8c54e10d9b37e21eb0bf9',
      sortOrder: 20,
      component: { default: eab50d97ac0a8c54e10d9b37e21eb0bf9 }
    },
    ef387cb548f2f06fe3479f2815b110355: {
      id: 'ef387cb548f2f06fe3479f2815b110355',
      sortOrder: 15,
      component: { default: ef387cb548f2f06fe3479f2815b110355 }
    },
    e7b540b6243399bba067d4d2493550cb1: {
      id: 'e7b540b6243399bba067d4d2493550cb1',
      sortOrder: 10,
      component: { default: e7b540b6243399bba067d4d2493550cb1 }
    }
  },
  checkoutShippingAddressForm: {
    e3b6545ecc24b5b03854990a7c202ed14: {
      id: 'e3b6545ecc24b5b03854990a7c202ed14',
      sortOrder: 60,
      component: { default: e3b6545ecc24b5b03854990a7c202ed14 }
    }
  },
  checkoutSummary: {
    e15f35c341f488ffe94119483afd086e3: {
      id: 'e15f35c341f488ffe94119483afd086e3',
      sortOrder: 50,
      component: { default: e15f35c341f488ffe94119483afd086e3 }
    }
  },
  checkoutPageRight: {
    e94b908877112d8d17878f850950a5a4f: {
      id: 'e94b908877112d8d17878f850950a5a4f',
      sortOrder: 10,
      component: { default: e94b908877112d8d17878f850950a5a4f }
    }
  },
  beforePlaceOrderButton: {
    e0f7442048617ae89010945e7181f0263: {
      id: 'e0f7442048617ae89010945e7181f0263',
      sortOrder: 10,
      component: { default: e0f7442048617ae89010945e7181f0263 }
    }
  },
  footer: {
    e8e2a8118ce6b55b9d6fc78c1a86339fa: {
      id: 'e8e2a8118ce6b55b9d6fc78c1a86339fa',
      sortOrder: 10,
      component: { default: e8e2a8118ce6b55b9d6fc78c1a86339fa }
    }
  },
  head: {
    eb1b358dca904ba46c13034db4358b3cc: {
      id: 'eb1b358dca904ba46c13034db4358b3cc',
      sortOrder: 5,
      component: { default: eb1b358dca904ba46c13034db4358b3cc }
    }
  },
  body: {
    e7235149ebdd24a96188ab6dce06d7c08: {
      id: 'e7235149ebdd24a96188ab6dce06d7c08',
      sortOrder: 1,
      component: { default: e7235149ebdd24a96188ab6dce06d7c08 }
    },
    e8291be196288649c279f27da0bb155b6: {
      id: 'e8291be196288649c279f27da0bb155b6',
      sortOrder: 10,
      component: { default: e8291be196288649c279f27da0bb155b6 }
    },
    e0f6777a18b35c38e36b1d6d6ca2a92f8: {
      id: 'e0f6777a18b35c38e36b1d6d6ca2a92f8',
      sortOrder: 0,
      component: { default: e0f6777a18b35c38e36b1d6d6ca2a92f8 }
    }
  },
  header: {
    e4b68569eced0f3f89cb478080e90d74e: {
      id: 'e4b68569eced0f3f89cb478080e90d74e',
      sortOrder: 10,
      component: { default: e4b68569eced0f3f89cb478080e90d74e }
    }
  },
  checkoutPaymentMethodcod: {
    e0b1071cbba6c1184c32f655752720a16: {
      id: 'e0b1071cbba6c1184c32f655752720a16',
      sortOrder: 10,
      component: { default: e0b1071cbba6c1184c32f655752720a16 }
    }
  },
  checkoutPaymentMethodpaypal: {
    ebec963fffb84df84f58d20433f51e49c: {
      id: 'ebec963fffb84df84f58d20433f51e49c',
      sortOrder: 10,
      component: { default: ebec963fffb84df84f58d20433f51e49c }
    }
  },
  checkoutPaymentMethodstripe: {
    e47471c3dfa766ce66ac04e91cfb99c2c: {
      id: 'e47471c3dfa766ce66ac04e91cfb99c2c',
      sortOrder: 10,
      component: { default: e47471c3dfa766ce66ac04e91cfb99c2c }
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