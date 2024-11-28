import { Head, Link } from '@inertiajs/react';
import Chatbot from '../components/Chatbot';
import LandingPage from "../components/LandingPage";
import NavBar from "../components/NavBar";
import NotfcationBaar from '../components/NotificationBar.jsx';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
           
    <div className="bg-gray-50 text-black/50 dark:bg-gray-900 dark:text-white/50">
             <Head title="Welcome" />
             <header className="fixed t-0" >
             <NotfcationBaar  />      
                 
             </header>
             <NavBar  />
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src=""
                />
           <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                     
         
                    </div>
                    <main className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                     
                      
                    <LandingPage/>
                    </main>

                

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                            <Chatbot className=""/>
                        </footer>
             </div>
     </div>
        </>
    );
}
