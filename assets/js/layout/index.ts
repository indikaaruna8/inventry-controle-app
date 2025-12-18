import { MobileMenu } from './mobileMenu';
import { Notifications } from './notifications';
import { RightSidebar } from './rightSidebar';
import { Submenu } from './submenu';

export interface LayoutManager {
    mobileMenu: MobileMenu;
    notifications: Notifications;
    rightSidebar: RightSidebar;
    submenu: Submenu;
}

export class LayoutManagerImpl implements LayoutManager {
    public mobileMenu: MobileMenu;
    public notifications: Notifications;
    public rightSidebar: RightSidebar;
    public submenu: Submenu;

    constructor() {
        this.mobileMenu = new MobileMenu();
        this.notifications = new Notifications();
        this.rightSidebar = new RightSidebar();
        this.submenu = new Submenu();
    }

    public init(): void {
        console.log("Layout manager initialized");
    }
}

// Export individual components for selective imports
export { MobileMenu, Notifications, RightSidebar, Submenu };

// Default export for easy import
export default LayoutManagerImpl;