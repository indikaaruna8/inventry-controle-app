export class Notifications {
    private notificationIcon: HTMLElement | null;
    private notificationPanel: HTMLElement | null;
    private isOpen: boolean = false;

    constructor() {
        this.notificationIcon = document.getElementById("notification-icon");
        this.notificationPanel = document.getElementById("notification-panel");
        this.init();
    }

    private init(): void {
        if (this.notificationIcon && this.notificationPanel) {
            this.setupEventListeners();
        } else {
            console.error("Notification elements not found");
        }
    }

    private setupEventListeners(): void {
        // Toggle panel when clicking the notification icon
        if (this.notificationIcon) {
            this.notificationIcon.addEventListener("click", (e) => {
                e.stopPropagation();
                this.togglePanel();
            });
        }

        // Close panel when clicking outside
        document.addEventListener("click", (event) => {
            if (
                this.isOpen &&
                !this.notificationPanel?.contains(event.target as Node) &&
                !this.notificationIcon?.contains(event.target as Node)
            ) {
                this.closePanel();
            }
        });

        // Keep panel open when clicking inside
        this.notificationPanel?.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }

    public togglePanel(): void {
        this.notificationPanel?.classList.toggle("show");
        this.isOpen =
            this.notificationPanel?.classList.contains("show") || false;
    }

    public openPanel(): void {
        this.notificationPanel?.classList.add("show");
        this.isOpen = true;
    }

    public closePanel(): void {
        this.notificationPanel?.classList.remove("show");
        this.isOpen = false;
    }

    public getPanelState(): boolean {
        return this.isOpen;
    }
}
