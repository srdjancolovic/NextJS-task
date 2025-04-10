'use client';

import { useAppContext } from '@/app-context/app-context';

const MobileHeader = () => {
    const { isSidebarOpen, toggleSidebar } = useAppContext();

    return <div>Mobile Header</div>;
};

export default MobileHeader;
