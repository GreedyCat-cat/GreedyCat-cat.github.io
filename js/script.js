window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});

class FreshApp {
    constructor() {}
    
    login() {
        const auth = document.getElementById('auth-screen');
        const main = document.getElementById('main-app');
        auth.style.transform = 'translateY(-100%)';
        setTimeout(() => { auth.style.display = 'none'; main.classList.remove('hidden'); }, 600);
    }

    logout() {
         if(confirm('重置演示状态？')) {
            location.reload();
         }
    }

    switchTab(tabName, element) {
        document.querySelectorAll('.app-tab-item').forEach(item => item.classList.remove('active'));
        element.classList.add('active');
        
        const tabs = ['home', 'diet', 'shopping', 'inventory', 'recipe', 'community'];
        tabs.forEach(t => {
            const el = document.getElementById(`tab-${t}`);
            if (!el) return;
            el.classList.add('hidden');
            if (t === tabName) {
                el.classList.remove('hidden');
                void el.offsetWidth;
            }
        });
    }

    filter(element) {
        document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        element.classList.add('active');
    }
}

const app = new FreshApp();
