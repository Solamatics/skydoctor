import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";


import Drawer from "@mui/material/Drawer";
import {Icon, List, ListItem, ListItemIcon, useMediaQuery, useTheme} from "@mui/material";
// import {routes} from "./routes";
import ListItemButton from "@mui/material/ListItemButton";
import {Link} from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import {useCallback, useEffect, useRef, useState} from "react";


export default function Sidebar({window, mobileNav, toggleNav, location, path}) {
    const drawerWidth = 280;

    const productRef = useRef(null)
    const purchaseRef = useRef(null)
    const supplierRef = useRef(null)
    const reportRef = useRef(null)
    const theme = useTheme()

    const pathChecker = (url) => {
        return path === `/merchant${url}` ? 'active' : ''
    }


    const drawer = (
        <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
                <ul>
                    <li className="menu-title"><span>Main</span></li>
                    <li className={pathChecker('/dashboard')}>
                        <Link
                            to="/merchant/dashboard"><i className="feather-home"></i> <span>Dashboard</span></Link>
                    </li>
                    <li className="submenu">
                        <Link to="#"
                              onClick={() => productRef.current.classList.toggle('d-block')}><i
                            className="feather-shopping-cart"></i> <span> Products</span> <span
                            className="menu-arrow"></span></Link>
                        <ul className={''} ref={productRef}>
                            <li className={pathChecker('/products')}>
                                <Link
                                    to={"/merchant/products"}>Products</Link>
                            </li>
                            <li className={pathChecker('/add-product')}>
                                <Link
                                    to={"/merchant/add-product"}>Add Product</Link></li>
                            <li className={pathChecker('/outstock')}><Link
                                to={"/merchant/outstock"}>Out Stock</Link></li>
                            <li className={pathChecker('/expired')}><Link
                                to={"/merchant/expired"}>Expired</Link></li>
                        </ul>
                    </li>
                    <li >
                        <Link to="categories"><i
                            className="feather-layout"></i> <span>Categories</span></Link>
                    </li>
                    <li className="submenu">
                        <Link to="#"
                              onClick={() => purchaseRef.current.classList.toggle('d-block')}><i
                            className="feather-star"></i> <span> Purchase</span> <span
                            className="menu-arrow"></span></Link>
                        <ul ref={purchaseRef}>
                            <li className={pathChecker('/purchase')}><Link
                                to={"/merchant/purchase"}>Purchase</Link></li>
                            <li className={pathChecker('/add-purchase')}><Link
                                to={"/merchant/add-purchase"}>Add Purchase</Link></li>
                            <li className={pathChecker('/orders')}><Link
                                to={"/merchant/orders"}>Orders</Link></li>
                        </ul>
                    </li>
                    <li className={pathChecker('/sales')}>
                        <Link to="sales"><i
                            className="feather-activity"></i> <span>Sales</span></Link>
                    </li>
                    <li className="submenu">
                        <Link to="#"
                              onClick={() => supplierRef.current.classList.toggle('d-block')}><i
                            className="feather-user"></i> <span> Supplier</span> <span
                            className="menu-arrow"></span></Link>
                        <ul ref={supplierRef}>
                            <li className={pathChecker('/supplier')}><Link
                                to={"/merchant/supplier"}>Supplier</Link></li>
                            <li className={pathChecker('/add-supplier')}><Link
                                to={"/merchant/add-supplier"}>Add Supplier</Link></li>
                        </ul>
                    </li>
                    <li className={pathChecker('/transaction-list')}>
                        <Link
                            to="transactions-list"><i className="feather-credit-card"></i>
                            <span> Transaction</span></Link>
                    </li>
                    <li className="submenu">
                        <Link onClick={() => {
                            reportRef.current.classList.toggle('d-block')
                        }} to="#"><i
                            className="feather-file-text"></i> <span> Reports</span> <span
                            className="menu-arrow"></span></Link>
                        <ul ref={reportRef}>
                            <li className={pathChecker('/invoice')}><Link
                                to={"/merchant/invoice"}>Invoice</Link></li>
                            <li className={pathChecker('/invoice-report')}><Link
                                to={"/merchant/invoice-report"}>Invoice Reports</Link></li>
                        </ul>
                    </li>
                    <li className="menu-title">
                        <span>Pages</span>
                    </li>
                    <li className={pathChecker('/profile')}>
                        <Link to="profile"><i
                            className="feather-user"></i> <span>Profile</span></Link>
                    </li>
                    <li className={pathChecker('/settings')}>
                        <Link to="settings"><i
                            className="feather-sliders"></i> <span>Settings</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <Box component="nav">
            <Drawer
                sx={{
                    width: drawerWidth,
                    padding: 5,
                    backgroundColor: "white",
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant={useMediaQuery(theme.breakpoints.up('lg')) ? "permanent" : 'temporary'}
                anchor="left"
                open={mobileNav}
                ModalProps={{
                    keepMounted: true,
                }}
                onClose={() => toggleNav(false)}
            >
                {drawer}
            </Drawer>
        </Box>
    )
}