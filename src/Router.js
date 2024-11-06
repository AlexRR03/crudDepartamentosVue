import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from './components/DepartamentosComponent'
import CreateDepartamento from './components/CreateDepartamento'
import DetailsDepartamento from './components/DetailsDepartamento'
import UpdateDepartamento from './components/UpdateDepartamento'
import DeleteDepartamento from './components/DeleteDepartamento'
const myRoutes = [
    {
        path:"/",
        component:DepartamentosComponent
    },
    {
        path:"/create",
        component:CreateDepartamento
    },
    {
        path:"/details/:id/:nombre/:localidad",
        component: DetailsDepartamento
    },
    {
        path:"/update/:id",
        component:UpdateDepartamento
    },
    {
        path:"/delete/:id",
        component:DeleteDepartamento
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})

export default router