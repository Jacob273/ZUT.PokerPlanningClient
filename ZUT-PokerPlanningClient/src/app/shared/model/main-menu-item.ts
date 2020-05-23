import { SubMenuItem } from './sub-menu-item';
import { Badge } from './badge';

export class MainMenuItem {

    title: string;
    icon: string;
    active: boolean;
    type: string;
    badge: Badge;
    submenus: SubMenuItem[];

    constructor(title: string, type: string, icon: string, active: boolean, badge: Badge, submenus: SubMenuItem[]) {
        this.title = title;
        this.type = type;
        this.icon = icon;
        this.active = active;
        this.badge = badge;
        this.submenus = submenus;
    }
}
