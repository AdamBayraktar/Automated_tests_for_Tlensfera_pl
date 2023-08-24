import { expect, Page, Locator } from '@playwright/test'

export class HomePage{
    readonly page: Page;
    readonly meetUsCloserButton: Locator;
    readonly checkOurOfferButton: Locator;
    readonly metaDescription: Locator;
    readonly url = 'https://www.tlensfera.pl/'

    constructor(page: Page){
        this.page = page;
        this.meetUsCloserButton = page.getByRole('link', {name: 'Poznaj nas bliżej'});
        this.checkOurOfferButton = page.getByRole('link', {name: 'Zobacz naszą ofertę'});
        this.metaDescription = page.locator['meta[property="og:description"]'];
    }

    async visit(){
        await this.page.goto(this.url)
    }

    async checkPageTitle(){
        await expect(this.page).toHaveTitle('Strona główna - Tlen Sfera - Komora hiperbaryczna w Gnieźnie')
    }

    async checkPageDescription(){
        await expect(this.metaDescription).toHaveProperty('content', /terapie tlenowe w łagodnych komorach hiperbarycznych/)
    }

}