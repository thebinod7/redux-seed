import {lazy } from "react"
const Login = lazy(() => (import("../views/authentication/Login")));
var AuthRoutes = [
    { path: '/authentication/Login', name: 'Login', icon: 'mdi mdi-account-key', component: Login }
];
export default AuthRoutes; 