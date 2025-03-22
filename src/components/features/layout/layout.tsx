import { ReactNode } from 'react';
import Header from './header';
import { useMainStore } from '@/store/zustand/dashboard';
import Sidebar from './sidebar';


interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { openMenu } = useMainStore()
    return (
        <div className="page-container">
            <div className="page-contents">
                <Header />
                <main className="page-contents pt-12">
                    {children}
                </main>
            </div>

            <div className={`sidebar max-lg:hidden ${openMenu ? '!block' : 'lg:!block'}`}>
                <Sidebar />
            </div>
        </div>
    );
};

export default Layout;
