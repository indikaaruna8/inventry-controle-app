export class RightSidebar {
    private mainContent: HTMLElement | null;
    private rightSidebar: HTMLElement | null;
    private isOpen: boolean = false;

    constructor() {
        this.mainContent = document.getElementById("main-content");
        this.rightSidebar = document.getElementById("right-sidebar");
        this.init();
    }

    private init(): void {
        if (this.mainContent && this.rightSidebar) {
            this.setupEventListeners();
        } else {
            console.error("Right sidebar elements not found");
        }
    }

    private setupEventListeners(): void {
        if (!this.mainContent) {
            return;
        }
        this.mainContent.addEventListener("mouseenter", () => {
            this.openSidebar();
        });

        this.mainContent.addEventListener("mouseleave", () => {
            this.closeSidebar();
        });
    }

    public openSidebar(): void {
        this.rightSidebar?.classList.add("open");
        this.isOpen = true;
    }

    public closeSidebar(): void {
        this.rightSidebar?.classList.remove("open");
        this.isOpen = false;
    }

    public toggleSidebar(): void {
        this.rightSidebar?.classList.toggle("open");
        this.isOpen = this.rightSidebar?.classList.contains("open") || false;
    }

    public getSidebarState(): boolean {
        return this.isOpen;
    }
}
