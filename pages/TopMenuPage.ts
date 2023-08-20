import { expect, Locator, Page } from '@playwright/test'

export class TopMenuPage{

    readonly page: Page;
    readonly logo: Locator;
    readonly homePageLink: Locator;
    readonly aboutUsLink: Locator;
    readonly servicesLink: Locator;
    readonly pricingLink: Locator;
    readonly contactLink: Locator;
    readonly phoneLink: Locator;
    readonly facebookLink: Locator;
    readonly instagramLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.logo = page.locator('#header').getByRole('img', {name:'Tlen Sfera – Komora hiperbaryczna w Gnieźnie', exact: true });
        this.homePageLink = page.getByRole('link', {name: 'STRONA GŁÓWNA', exact: true});
        this.aboutUsLink = page.getByRole('link', {name: 'O NAS', exact: true});
        this.servicesLink = page.getByRole('link', {name: 'USŁUGI', exact: true}); 
        this.pricingLink = page.getByRole('link', {name: 'CENNIK', exact: true});
        this.contactLink = page.getByRole('link', {name: 'KONTAKT', exact: true});
        this.facebookLink = page.locator('#header').getByLabel('Facebook')
        this.instagramLink = page.locator('#header').getByLabel('Instagram')
    }

    async assertPageMenuItemHighlights(){
        // assert if the menu item has active color
    }

}