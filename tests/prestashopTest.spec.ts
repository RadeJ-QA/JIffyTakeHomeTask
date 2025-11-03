import { test, expect } from '@playwright/test';
import { DemoStoreDashboardPage } from '../page-object/dashboardPage'
import {faker} from '@faker-js/faker/locale/en_US'


test.beforeEach ( async({page})=>{

    await page.goto('/')
})

test ('add more than one product to the cart', async ({page})=>{
    const navigateTo = new DemoStoreDashboardPage(page)
    let productsCategoryFirst = "Clothes"
    let productsCategorySecond = "Art"

    let addProductToCartCallCount = 0

    // Create a wrapper function to count how many products is added to cart
    const addProductToCart = async (category: string) => {
        addProductToCartCallCount++;
        await navigateTo.addRandomProductFromCategoryToCartbyCategoryName(category);
    };


    await addProductToCart(productsCategoryFirst)
    const nameOfFirstAddedProduct = await navigateTo.productNameOnProductAddedToCartModal.innerText()
    // console.log(`First product added to Cart is: ${nameOfFirstAddedProduct}`)
    navigateTo.continueShopping()
    await addProductToCart(productsCategorySecond)
    const nameOfSecondAddedProduct = await navigateTo.productNameOnProductAddedToCartModal.innerText()
    // console.log(`Second product added to Cart is: ${nameOfSecondAddedProduct}`)

    await navigateTo.proceedToCart()


    await navigateTo.namesOfAllAddedProductsInCart()

    await navigateTo.cartItemImagesLoadedToCart()

    //taking screenshot of the cart with selected products
    await page.screenshot({path: 'screenshots/cartWithSelectedProducts.png' })


    //assert that right number of items was added to cart
    expect (await navigateTo.numberOfItemsAddedToCart()).toEqual(addProductToCartCallCount)
    //asserting by name that selected items were added to cart
    expect (await navigateTo.namesOfAllAddedProductsInCart()).toContain(nameOfFirstAddedProduct)
    expect (await navigateTo.namesOfAllAddedProductsInCart()).toContain(nameOfSecondAddedProduct)

    
})

test('place an order from the cart', async ({page})=>{
    const navigateTo = new DemoStoreDashboardPage(page)
    let productCategory = "Art"
    const randomFirstName = faker.person.firstName()
    const randomLastName = faker.person.lastName()
    const randomEmail = `${randomFirstName}.${randomLastName}${faker.number.int(100)}@test.com`
    const randomStreetAddress = faker.location.streetAddress()
    const randomCity = faker.location.city()
    const randomState = faker.location.state()
    const randomZipCode = String(faker.number.int(100000))


    await navigateTo.addRandomProductFromCategoryToCartbyCategoryName(productCategory)
    await navigateTo.proceedToCart()
    await navigateTo.proccedToCheckout()
    await navigateTo.submitPersonalInformationInCheckoutWithFullNameEmailAndMandatoryCheckboxes(randomFirstName, randomLastName, randomEmail)
    await navigateTo.submitAddressInformationsInCheckoutWithStreetAddressCityZipAndCountry(randomStreetAddress, randomCity, randomState, randomZipCode)
    await navigateTo.submitShippingMethod()

    //await page.screenshot({path: 'screenshots/checkoutscreenshot.png' })

    await navigateTo.confirmTermsAndSubmitPayment()


})