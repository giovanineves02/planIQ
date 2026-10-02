import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Landing.vue'
import Login from '../views/Login.vue'
import Upload from '../views/Upload.vue'
import Dashboard from '../views/DashboardView.vue'
import Relatorios from '../views/RelatoriosView.vue'
const routes = [
 {
   path: '/',
   name: 'Home',
  component: Home
 },
 {
   path: '/login',
   name: 'Login',
   component: Login
 },
 {
   path: '/dashboard',
   name: 'Dashboard',
   component: Dashboard
 },
 {
   path: '/upload',
   name: 'Upload',
   component: Upload
 },
 {
   path: '/relatorios',
   name: 'Relatorios',
   component: Relatorios
 }
]
const router = createRouter({
 history: createWebHistory(),
 routes
})
export default router