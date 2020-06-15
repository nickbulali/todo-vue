import App from './App'
import Home from './components/marketing/Home'
import About from './components/marketing/About'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
import TestTodosVariable from './components/marketing/TestTodosVariable'



const routes = [
	{ 
		path : '/',
		name: 'home',
		component: Home
	},
	{ 
		path : '/todo', 
		name: 'todo',
		component: App,
		meta: {
			requiresAuth: true,
		}
	},
	{ 
		path : '/about', 
		name: 'about',		
		component: About
	},
	{ 
		path : '/login', 
		name: 'login',
		component: Login,
		meta: {
			requiresVisitor: true,
		}
	},
	{ 
		path : '/register', 
		name: 'register',
		component: Register,
		meta: {
			requiresVisitor: true,
		}
	},
	{ 
		path : '/logout', 
		name: 'logout',
		component: Logout
	},
	{ 
		path : '/todos/:id', 
		name: 'todos',
		component: TestTodosVariable
	},

]
 export default routes