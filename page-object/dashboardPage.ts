import { FrameLocator, Locator, Page, expect } from "@playwright/test";

export class DemoStoreDashboardPage{

    private readonly page: Page
    private readonly demoShopDashboardIframe : FrameLocator
    private readonly desktopMenu : Locator
    private readonly listOfProductsInCategoryPage: Locator
    private readonly listOfAvailableSizesForSelectedProduct: Locator
    private readonly addToCartButtonForSelectedProduct: Locator
    private readonly productAddedToCartSuccessMessage: Locator
    private readonly continueShoppingButtonOnProductAddedToCartModal: Locator
    private readonly proceedToCheckoutButtonOnProductAddedToCartModal: Locator
    public readonly productNameOnProductAddedToCartModal: Locator
    private readonly shoppingCartTitle: Locator
    public readonly cartItemsList: Locator
    private readonly cartItemsImages: Locator
    public readonly cartProductsSummaryLabel: Locator
    private readonly allProductLinkOnMobile: Locator
    private readonly productCategoryMenuOnMobile: Locator
    private readonly breadcrumbHomeButton: Locator
    private readonly checkoutButtonInCart: Locator
    private readonly personalInformationSectionInCheckout: Locator
    private readonly firstNameFieldInPersonalInformationSectionInCheckout: Locator
    private readonly lastNameFieldInPersonalInformationSectionInCheckout: Locator
    private readonly emailFieldInPersonalInformationSectionInCheckout: Locator
    private readonly agreeToTermsAndConditionsCheckboxInPersonalInformationSectionInCheckout: Locator
    private readonly customerDataPrivacyCheckboxInPersonalInformationSectionInCheckout: Locator
    private readonly continueButtonInPersonalInformationSectionInCheckout: Locator
    private readonly addressesSectionInCheckout: Locator
    private readonly addressFieldInAddressesSectionInCheckout: Locator
    private readonly cityFieldInAddressesSectionInCheckout: Locator
    private readonly countryDropDownListInAddressesSectionInCheckout: Locator
    private readonly postalCodeFieldInAddressesSectionInCheckout: Locator
    private readonly continueButtonInAddressesSectionInCheckout: Locator
    private readonly shippingMethodSectionInCheckout: Locator
    private readonly continueButtonInShippingMethodSectionInCheckout: Locator
    private readonly paymentSectionInCheckout: Locator
    private readonly agreeToTermsAndConditionsCheckboxInPaymentSectionInCheckout: Locator
    private readonly placeOrderButtonInPaymentSectionInCheckout: Locator


 

    constructor(page:Page){

        this.page = page
        this.demoShopDashboardIframe = page.frameLocator('.desktop iframe')
        this.desktopMenu = this.demoShopDashboardIframe.locator('#top-menu')
        this.listOfProductsInCategoryPage = this.demoShopDashboardIframe.locator('#js-product-list')
        this.listOfAvailableSizesForSelectedProduct = this.demoShopDashboardIframe.locator('')
        this.addToCartButtonForSelectedProduct = this.demoShopDashboardIframe.getByRole('button', { name: /add to cart/i }) // Use a case-insensitive regex for the button name to avoid exact-space mismatches
        this.productAddedToCartSuccessMessage = this.demoShopDashboardIframe.getByText('Product successfully added to your shopping cart')
        this.continueShoppingButtonOnProductAddedToCartModal = this.demoShopDashboardIframe.getByRole('button', { name: 'Continue shopping' })
        this.proceedToCheckoutButtonOnProductAddedToCartModal = this.demoShopDashboardIframe.getByRole('link', { name: 'Proceed to checkout' })
        this.productNameOnProductAddedToCartModal = this.demoShopDashboardIframe.locator('.product-name')
        this.shoppingCartTitle = this.demoShopDashboardIframe.locator('.cart-container').getByText('Shopping Cart')
        this.cartItemsList = this.demoShopDashboardIframe.locator('ul.cart-items')
        this.cartItemsImages= this.cartItemsList.locator('img')
        this.cartProductsSummaryLabel = this.demoShopDashboardIframe.locator('.cart-summary-line').locator(':text("item")')
        this.allProductLinkOnMobile = this.demoShopDashboardIframe.getByText('   All products')
        this.productCategoryMenuOnMobile = this.demoShopDashboardIframe.locator('.category-top-menu .category-sub-menu')
        this.breadcrumbHomeButton = this.demoShopDashboardIframe.locator('.breadcrumb').getByText('Home').first()
        this.checkoutButtonInCart = this.demoShopDashboardIframe.locator('.cart-summary').getByRole('link')
        this.personalInformationSectionInCheckout = this.demoShopDashboardIframe.locator('section#checkout-personal-information-step')
        this.firstNameFieldInPersonalInformationSectionInCheckout = this.personalInformationSectionInCheckout.locator('input[name="firstname"]')
        this.lastNameFieldInPersonalInformationSectionInCheckout = this.personalInformationSectionInCheckout.locator('input[name="lastname"]')
        this.emailFieldInPersonalInformationSectionInCheckout = this.personalInformationSectionInCheckout.getByRole('textbox', { name: 'Email Email' })
        this.agreeToTermsAndConditionsCheckboxInPersonalInformationSectionInCheckout = this.personalInformationSectionInCheckout.getByRole ('checkbox', {name: /i agree to the terms and conditions/i })
        this.customerDataPrivacyCheckboxInPersonalInformationSectionInCheckout = this.personalInformationSectionInCheckout.getByRole ('checkbox', {name: /customer data privacy/i })
        this.continueButtonInPersonalInformationSectionInCheckout = this.personalInformationSectionInCheckout.getByRole('button', {name: /continue/i})
        this.addressesSectionInCheckout = this.demoShopDashboardIframe.locator('section#checkout-addresses-step')
        this.addressFieldInAddressesSectionInCheckout = this.addressesSectionInCheckout.locator('input[name="address1"]')
        this.cityFieldInAddressesSectionInCheckout = this.addressesSectionInCheckout.locator('input[name="city"]')
        this.countryDropDownListInAddressesSectionInCheckout = this.addressesSectionInCheckout.locator('select[name="id_state"]')
        this.postalCodeFieldInAddressesSectionInCheckout = this.addressesSectionInCheckout.locator('input[name="postcode"]')
        this.continueButtonInAddressesSectionInCheckout = this.addressesSectionInCheckout.getByRole('button', {name: /continue/i})
        this.shippingMethodSectionInCheckout = this.demoShopDashboardIframe.locator('section#checkout-delivery-step')
        this.continueButtonInShippingMethodSectionInCheckout = this.shippingMethodSectionInCheckout.getByRole('button', {name: /continue/i})
        this.paymentSectionInCheckout = this.demoShopDashboardIframe.locator('section#checkout-payment-step')
        this.agreeToTermsAndConditionsCheckboxInPaymentSectionInCheckout = this.paymentSectionInCheckout.getByRole('checkbox', {name: /terms|conditions|i agree|approve/i})
        this.placeOrderButtonInPaymentSectionInCheckout = this.paymentSectionInCheckout.getByRole('button', {name: /place order/i})



    }


    async productsPageByCategoryName(productCategoryName: string){

        const productCategoryButton  = this.desktopMenu.locator('li', {hasText: productCategoryName}).first()
        await productCategoryButton.click()

    }

    async productsPageByCategoryNameOnMobile(productCategoryName: string){

        
        const productCategoryButton  = this.productCategoryMenuOnMobile.locator('li', {hasText: productCategoryName}).first()
        await this.allProductLinkOnMobile.click()
        await productCategoryButton.click()

    }

    async returnNumberOfProductsInCategoryPage(CategoryName: string){
        
        const numberOfProductsInfoElement = this.demoShopDashboardIframe.locator('.total-products').locator('p')
        await this.productsPageByCategoryName(CategoryName)
        return (await numberOfProductsInfoElement.textContent())?.replace(/[^0-9]/g, '')

    }

    async addRandomProductFromCategoryToCartbyCategoryName (pCategoryName: string){

        // Navigate to the requested category first
        await this.productsPageByCategoryName(pCategoryName)

        // Ensure the product list is visible inside the iframe
        await this.listOfProductsInCategoryPage.waitFor({ state: 'visible' })

        // Grab all product articles and click a random one
        const articles = this.listOfProductsInCategoryPage.getByRole('article')
        const count = await articles.count()
        if (count === 0) throw new Error(`No products found in category: ${pCategoryName}`)
        const index = Math.floor(Math.random() * count)
        await articles.nth(index).click()

        // Find and click on ADD TO CART button for selected product.
        // Wait for the button to appear in the product context (product page/modal)
        await this.addToCartButtonForSelectedProduct.waitFor({ state: 'visible', timeout: 5000 })
        await this.addToCartButtonForSelectedProduct.click()

        // Ensure the 'product Added to Cart' dialog modal is visible inside the iframe
        await this.productAddedToCartSuccessMessage.isVisible()

        

    }

    async addRandomProductFromCategoryToCartbyCategoryNameonMobile (pCategoryName: string){

        // Navigate to the requested category first
        await this.productsPageByCategoryNameOnMobile(pCategoryName)

        // Ensure the product list is visible inside the iframe
        await this.listOfProductsInCategoryPage.waitFor({ state: 'visible' })

        // Grab all product articles and click a random one
        const articles = this.listOfProductsInCategoryPage.getByRole('article')
        const count = await articles.count()
        if (count === 0) throw new Error(`No products found in category: ${pCategoryName}`)
        const index = Math.floor(Math.random() * count)
        await articles.nth(index).click()

        // Find and click on ADD TO CART button for selected product (mobile).
        // Wait for the button to become visible in this product context.
        await this.addToCartButtonForSelectedProduct.waitFor({ state: 'visible', timeout: 7000 })
        // Optionally, scroll into view
        await this.addToCartButtonForSelectedProduct.scrollIntoViewIfNeeded();
        await this.addToCartButtonForSelectedProduct.click()

        // Ensure the 'product Added to Cart' dialog modal is visible inside the iframe
        await this.productAddedToCartSuccessMessage.isVisible()

        

    }

    async continueShopping(){

        await this.continueShoppingButtonOnProductAddedToCartModal.click()


    }

    async proceedToCart(){

        await this.proceedToCheckoutButtonOnProductAddedToCartModal.click()

        // Ensure the SHOPPING CART is opened inside the iframe
        await this.shoppingCartTitle.isVisible()


    }

    async namesOfAllAddedProductsInCart():Promise<string[]>{

        await this.cartItemsList.waitFor({ state: 'visible', timeout: 3000 })

        return await this.cartItemsList.locator('a.label').allTextContents()
        
    }


    async numberOfItemsAddedToCart(): Promise<number> {

        const text = await this.cartProductsSummaryLabel.innerText();
        const digits = (text ?? '').replace(/[^0-9]/g, '');
        return digits ? Number(digits) : 0;
    
    }

    async cartItemImagesLoadedToCart(){


        const allImages = await this.cartItemsImages.all()

        for (const img of allImages) {

            await expect(img).toBeVisible()
            // Assert that the image has completed loading
            await expect(img).toHaveJSProperty('complete', true);
            // Assert that the image has a naturalWidth greater than 0 (meaning it loaded successfully, not broken)
            await expect(img).not.toHaveJSProperty('naturalWidth', 0);
        
        }

        await this.page.waitForTimeout(250); // Ensure images are painted / in-viewport  (100–500ms)


    }

    async clickBreadcrumbHomeButton(){

        await this.breadcrumbHomeButton.click()

    }

    async proccedToCheckout(){

        await this.checkoutButtonInCart.click()

    }

    async submitPersonalInformationInCheckoutWithFullNameEmailAndMandatoryCheckboxes(firstName: string, lastName: string, email: string){

        await this.personalInformationSectionInCheckout.waitFor({ state: 'visible', timeout: 5000 })
        await this.firstNameFieldInPersonalInformationSectionInCheckout.fill(firstName)
        await this.lastNameFieldInPersonalInformationSectionInCheckout.fill(lastName)
        await this.emailFieldInPersonalInformationSectionInCheckout.fill(email)
        await this.agreeToTermsAndConditionsCheckboxInPersonalInformationSectionInCheckout.check({force: true})
        await this.customerDataPrivacyCheckboxInPersonalInformationSectionInCheckout.check({force: true})
        await this.continueButtonInPersonalInformationSectionInCheckout.click()

    }

    async submitAddressInformationsInCheckoutWithStreetAddressCityZipAndCountry(streetAddress: string, city: string, state: string, zipcode: string){

        await this.addressesSectionInCheckout.waitFor({ state: 'visible', timeout: 5000 })
        await this.addressFieldInAddressesSectionInCheckout.fill(streetAddress)
        await this.cityFieldInAddressesSectionInCheckout.fill(city)
        await this.countryDropDownListInAddressesSectionInCheckout.selectOption({ label: state})
        await this.postalCodeFieldInAddressesSectionInCheckout.fill(zipcode)
        await this.continueButtonInAddressesSectionInCheckout.click()


    }

    async submitShippingMethod(){

        await this.shippingMethodSectionInCheckout.waitFor({ state: 'visible', timeout: 5000 })
        await this.continueButtonInShippingMethodSectionInCheckout.click()

    }



    async confirmTermsAndSubmitPayment(){

        await this.paymentSectionInCheckout.waitFor({ state: 'visible', timeout: 5000 })
        await this.agreeToTermsAndConditionsCheckboxInPaymentSectionInCheckout.check({force: true})
        await this.placeOrderButtonInPaymentSectionInCheckout.click()
    }

    


        
}