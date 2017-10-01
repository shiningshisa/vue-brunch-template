import Home from "../components/pages/home.vue";
import pageNotFound from "../components/pages/404.vue";

const routes = [
	{
		path: "/",
		name:'root',
		redirect:'/home',
		renderName: 'Home',
		meta: {
			render: false,
			scrollToTop: false
		}
	},
	{
		path: "/home",
		name:'home',
		renderName: 'Home',
		component: Home,
		meta: {
			render: true,
			scrollToTop: true
		}
    },
	{
		path: "/page-not-found",
		name: 'pageNotFound',
		renderName: '404!',
		component: pageNotFound,
		meta: {
			render: false,
			scrollToTop: true
		}
	},
	{
		path: "*",
		name: 'anythingElse',
		renderName: 'redirect',
		redirect: { name : 'pageNotFound' },
		meta: {
			render: false
		}
	}    
]


export default routes