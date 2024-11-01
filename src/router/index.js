// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importamos los componentes
import IndexComponent from '../components/index/IndexComponent.vue';
import AyudaComponent from '../components/ayuda/AyudaComponent.vue';
import OperadorComponent from '@/components/operador/IncidentForm.vue';
import AdminDataComponent from '@/components/admindata/AdminDataComponent.vue';
import Layout from '../components/layout/LayoutComponent.vue';
import Login from '../components/login/UserLogin.vue';
import DashboardComponent from '@/components/dashboard/DashboardComponent.vue';
import SupportComponent from '@/components/online/SupportComponent.vue';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: IndexComponent,
    },
    {
        path: '/login',
    name: 'Login',
    component: Login,
    },
    {
        path: '/ayuda',
        name: 'Ayuda',
        component: AyudaComponent,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: '/Layout',
        name: 'Layout',
        component: Layout,
    },
    {
        path: '/operador',
        name: 'Operador',
        component: OperadorComponent,
    },
    {
        path: '/admindata',
        name: 'AdminData',
        component: AdminDataComponent,
    },
    {
        path: '/online',
        name: 'online',
        component: SupportComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
