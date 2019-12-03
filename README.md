## Quick Description

"Bargain basement" is a modern frontend web application for an ecommerce web app where users can browser and purchase packages. Project development started on November 28, 2019, and ends on December 5, 2019. This project also relates to https://github.com/AndrewRedican/bargain-basement-service.

### Requirements

- [x] User should be able to clearly see package names and prices
- [x] User should be able to access a detailed page for each package that shows more detail about said package
- [x] All pages should include some form styling to make the shop look inviting
- [x] User should be able to access my basket at anytime // Pending to finish view
- [x] User should be able to add packages to my basket/cart whilst either being on the front page or a package detail page
- [x] User should always see the current value of my basket and any discounts applied across the shop
      -> Only implemented this on the checkout view.
- [x] User should receive a 10% discount on my basket for purchasing multiple packages
- [x] User should be able to sort and search packages on the front page to easily packages

### Getting Started

#### Running project locally:

1. NodeJS must be installed https://nodejs.org/en/.
2. Git must be install https://git-scm.com/downloads.
3. Clone or download repository. In prompt/terminal run `git clone https://github.com/AndrewRedican/bargain-basement.git`
4. Install project dependencies from the project's root directory. Run `npm i` in prompt/terminal.
5. Run node script to start dev server and serve the web app. Run `npm start` Run `npm i` in prompt/terminal.
6. Finally open localhost:8080 in browser.

### Deploying to Production:

1. Run `npm run build`
2. Run `firebase deploy`

### Technical Decisions

1. Created repository from scratch. I opted to use some a UI kit. Initally evergreen-ui, but quickly discovered it was not suit for puropse (very opinionated, barely customizable), opted for shards-react instead which I found very please to work with. Please note I had not worked with either package before, so I may not be fully aware of best practices.

2. It is assumed that Real-Time updates are not required as we are using RESTful API to comunicate with backend, therefore, implemented firebase without real-time updates.

3. Images used for this project are hosted in Firebase storage, and not merely on the assets directory. Becuase of this the url to download an image needs to be queried. The app queries for the actual image url to download once, it will keep data on Redux store for later access on any of the components of the application.

4. I have intentionally used multiple React paradigms for demonstration purposes. Class vs Functional components. Passing props through parent or directly connecting to redux.

5. Database is NOSQL decided to go with this approach as it is my stronger suit. By doing so, I take advantage of dot notation to the fullest extent. This removes the need to iterate over lists and performing a comparison. However, a few trade-offs where I used Object.values() to convert into list.

6. Intentionally decided to use webpack / webpack-server instead of going for larger react frameworks such as create-react-app or react-boilerplate which wraps some complexity. It serves to demonstrate my ability to work with webpack. Most importantly, considered that for the size of project is not necessary to add a full framework. In real scenarios, depending on whether we would expect to maintain this

7. Could not finish properly setting up eslint / jest / enzyme / Travis CLI.

8. Used 'selectors' to access store, a common approach used, in libraries such as redux saga to decouple asyncronous functions from the redux store.

9. Intentionally used the approach where all reducers, actions, types, for redux stores in single directories. For larger projects, you can keep the reducer, actions, types, and tests even on a directory per component.

### Project Standards

Loosely implemented certain project standards:

1. To mention a few, no console logs, excepts for errors.
2. Use of const where possible.
3. Use of arrow functions everywhere (personal choice, useful on class components)
4. Use of classes as opossed to inline styles. (personal choice, there are trade-off on either approach).
5. If I don't use it, we remove it.

### UI Assets

https://www.toptal.com/designers/subtlepatterns

https://www.transparenttextures.com/

https://www.freepik.com/free-photo/wall-wallpaper-concrete-colored-painted-textured-concept_3001819.htm#page=1&query=texture%20background&position=1

https://www.flaticon.com/
