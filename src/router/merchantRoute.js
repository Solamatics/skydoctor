import Index from "../views/merchant";
import Dashboard from "../views/merchant/dashboard/dashboard";
import Products from "../views/merchant/products/products";
import EditProduct from "../views/merchant/products/editProduct";
import AddProduct from "../views/merchant/products/addProduct";
import OutStock from "../views/merchant/products/outStock";
import Expired from "../views/merchant/products/expired";
import Category from "../views/merchant/categories/category";
import Purchase from "../views/merchant/purchase/purchase";
import EditPurchase from "../views/merchant/purchase/editPurchase";
import AddPurchase from "../views/merchant/purchase/addPurchase";
import Orders from "../views/merchant/purchase/orders";
import Sales from "../views/merchant/sales/sales";
import Invoice from "../views/merchant/sales/invoice";
import Supplier from "../views/merchant/supplier/supplier";
import EditSupplier from "../views/merchant/supplier/editSupplier";
import AddSupplier from "../views/merchant/supplier/addSupplier";
import Transaction from "../views/merchant/transactions/transaction";
import InvoiceReport from "../views/merchant/reports/invoiceReport";
import Profile from "../views/merchant/profile/profile";
import Settings from "../views/merchant/settings/settings";

export const MerchantRoute = [
    {
        path:'/merchant/',
        element:<Index/>,
        children:[
            {
                path:'dashboard',
                element:<Dashboard/>
            },
            {
                path:'products',
                element:<Products/>
            },
            {
                path:'edit-product',
                element:<EditProduct/>
            },
            {
                path:'add-product',
                element:<AddProduct/>
            },
            {
                path:'outstock',
                element:<OutStock/>
            },
            {
                path:'expired',
                element:<Expired/>
            },
            {
                path:'categories',
                element:<Category/>
            },
            {
                path:'purchase',
                element:<Purchase/>
            },
            {
                path:'edit-purchase',
                element:<EditPurchase/>
            },
            {
                path:'add-purchase',
                element:<AddPurchase/>
            },
            {
                path:'orders',
                element:<Orders/>
            },
            {
                path:'sales',
                element:<Sales/>
            },
            {
                path:'invoice',
                element:<Invoice/>
            },
            {
                path:'supplier',
                element:<Supplier/>
            },
            {
                path:'edit-supplier',
                element:<EditSupplier/>
            },
            {
                path:'add-supplier',
                element:<AddSupplier/>
            },
            {
                path:'transactions-list',
                element:<Transaction/>
            },
            {
                path:'invoice-report',
                element:<InvoiceReport/>
            },
            {
                path:'profile',
                element:<Profile/>
            },
            {
                path:'settings',
                element:<Settings/>
            },
        ]
    }
]