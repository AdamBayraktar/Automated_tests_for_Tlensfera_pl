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
    
    async assertHomePageUrl(){
        await expect(this.page).toHaveURL('https://www.tlensfera.pl/')
    }

    async assertAboutUsPageUrl(){
        await expect(this.page).toHaveURL('https://www.tlensfera.pl/o-nas/')
    }

    async assertServicesPageUrl(){
        await expect(this.page).toHaveURL('https://www.tlensfera.pl/uslugi/')
    }

    async assertPricingPageUrl(){
        await expect(this.page).toHaveURL('https://www.tlensfera.pl/cennik/')
    }

    async assertContactPageUrl(){
        await expect(this.page).toHaveURL('https://www.tlensfera.pl/kontakt/')
    }

    async assertFacebookLink(){
        await this.facebookLink.click()
        await expect(this.page).toHaveURL('https://www.facebook.com/TlenSferaGniezno')
    }

    async assertInstagramLink(){
        await this.instagramLink.click()
        await expect(this.page).toHaveURL('https://www.instagram.com/tlensferagniezno/')
    }
    
}