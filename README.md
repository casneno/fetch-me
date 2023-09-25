# Fetch-Me

## Shopping as a colaborative experience!
Online shopping for groceries often feels like a lonely experience even if you are shopping for a family or a group: be it because only you have access to that cart and therefore need to decide what goes into the cart, what goes out, decide whether to buy this or that, or even risking getting the wrong item because it was something that someone else asked you to buy, etc... But what if there was an actual app out there that merged the online shopping experience with the colaborative synergy and agility you get when shopping with friends or family? Here comes in Fetch-Me...

## Description & Motivation
This Fetch-Me app is the last of four projects in the General Assembly SEI Course.  The purpose of this project was for us to apply our knowledge of the full MERN stack. This app was a solo development over the course of one week.  The app was developed using the following technologies:  

![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)


### Try it out!
Since this is a free Web-based app, anyone can use it without any requirements. Just click this [link](https://fetch-me-bcf56e1c2a03.herokuapp.com/) to try it out!  

## How to Navigate
The app is currently running only it's mobile version, so in order to better visualize it, it is recommended for the user to run it on a viewport of 428x926 or smaller.

![Landing Page](https://github.com/casneno/fetch-me/blob/main/src/images/screenshots/screenshot_landing_page.png)

![Shopping Page](https://github.com/casneno/fetch-me/blob/main/src/images/screenshots/Screenshot_shopping.png)

Once signed-up and logged in, the user is able to navigate the diferent pages by means of the navbar at the bottom of the screen.  The user can then add/remove other users from their friend list, favorite them or engage straight away in shopping by creating a new order and inviting others to colaborate.  When shopping, items that are added to the cart can be seen by toggling between screens and then their quantities can be adjusted. To remove an item, you just need to reduce its quantity to zero.  When you are ready, proceed to your order review end, finally, to checkout. (currently the payment feature has not yet been implemented)

## Brief

The SEI Project 4 Include the following Technical requirements:

☐ A working full-stack, single-page application hosted on Heroku.
☐ Incorporate the technologies of the MERN-stack:
MongoDB/Mongoose
Express
React
Node
☐ Have a well-styled interactive front-end.
☐ Communicates with the Express backend via AJAX.
☐ Implement token-based authentication. Including the ability of a user to sign-up, log in & log out.
☐ Implement authorization by restricting CUD data functionality to authenticated users. Also, navigation should respond to the login status of the user.
☐ Have a well-scoped feature-set. Full-CRUD data operations are not required if one or more other features are included, for example:
- Consume data from a third-party API.
- Implement additional functionality if the user is an admin.
- Implementation of a highly dynamic UI or data visualization.
- Other, instructor approved, complexity/features.

### Planning

The app was first conceived within the Wireframe displayed below and it's display and functionalities were gradually improved as the development progressed.  The steps were organized acording to a Pseudocode (see below) and the development stages were checked and added/removed using Trello.


![Wireframe](https://github.com/casneno/fetch-me/blob/main/src/images/screenshots/Screenshot_Wireframe.png)


The Trello Board served as a tool for the scrum framework, where MVP and Icebox features were presented and worked on as the project progressed.  It served as a starting point for all of the work that was done here.  Below, images of the Trello Board and the ERD.


### Pseudocode

Below is the initial Pseudocode from the project planning:

* Login/Signup screen with toggle button
* Lannding page with about content
* Add other user as favourites
* User creates a new order and invites colaborators to join him
* Users proceed to add items to the cart by filtering categories in item database
* Quantities are managed inside the cart
* Order Review panel
* Payment with Stripes or similar

| ERD | ![ERD](https://github.com/casneno/fetch-me/blob/main/src/images/screenshots/Project%204%20-%20ERD.jpeg)


### Building the Code

I wanted to design an app that was scalable in functionality and that provided the user with a easy-to-use mobile interface, and intuitive navigation, since the main purpose of this app is to be used on-the-go.

The first step in building the code was to setup my react file with react-create.  Then I proceeded to installing dependencies and setting up my backend. For styling I decided to go with Chakra UI due to its fast learning curve, built-in components and responsiveness. 
  For backend, the project required using no-SQL MongoDB.  I used a Mongoose to model my data.  After having setup and checking the working backend-frontend interface i then proceeded to define my models, starting with my User model.  For my Items model, since I needed two slightly diferent models, I opted to reuse my schema.

My approach was to make a 'skeleton' of mthe entire app's Pages and Components, making note of which component belonged to which page and which components were reusable.  ONce I was happy with the skeleton, coding started...

The first element to be coded was the sign-up and authentication process.  After creating the authentication page and the sign-up and login forms, I created a send-request.js file where my default 'fetch' functionton from CRUD operations was coded: this helped keep my code DRY.  This request was responsible for making API calls and dealing with payload and token authorizations.  The sign-up process consisted of creating a user object from the form inputs, 

*useEffect, Filters and Dependencies used to control data in the Orders Page*
```sh
  const [switchView, setSwitchView] = useState(true);
  const [order, setOrder] = useState([])
  const [users, setUsers] = useState([])
  const [friends, setFriends] = useState([])
  const [otherUsers, setOtherUsers] = useState([])
  const [colabs, setColabs] = useState([])
  const orderId = useParams().id

  useEffect(() => {
    async function getOrder(orderId) {
        try {
            const fetchedOrder = await ordersAPI.getOrder(orderId)
            setOrder(fetchedOrder)
            setColabs(fetchedOrder.colaborators)
        } catch (err) {
            console.error(err)
        }
    }

    getOrder(orderId)

}, [orderId]);

useEffect(() => {
  async function setAllUserStates() {
      try {
          const allUsers = await usersAPI.getAllUsers();
          const populatedUser = await usersAPI.getUser(user._id)
          const friendIds = populatedUser.friends.map(friend => friend._id);
          const filteredUsers = allUsers.filter(
              obj => obj._id !== user._id && !friendIds.includes(obj._id)
          );
          setUsers(allUsers)
          setFriends(populatedUser.friends)
          setOtherUsers(filteredUsers)
      } catch (err) {
          console.error(err)
      }
  }

  setAllUserStates()

}, [user._id]);
```

Once I had a working authentication and login, I proceeded to working on the navigation.  By looking into the Chakra UI community, i was able to find a third party Chakra-UI Bottom Navbar with good documentation to support it that worked perfectly after a few adjustments. After teh NAavbar was working, I proceeded to the other pages.  The order didn't really matter, since one page didn't rely on the other.  I chose to start with the friend's page in order to experiment with Chakra UI elements, since it was my first time using it.  Also, I enjoyed leveraging the power of React's state manipulation to create the search feature.  Once I was happy with the first layout and functionality results and went on to code the main functionalities...

*Search Filter adn Friends Display*
```sh
const searchFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  let friendsList = <strong>Sorry, but you have no friends at the moment</strong>

  if (searchFriends.length > 0) {
    friendsList = searchFriends.map(friend => (
      <Box key={friend._id}>
        <ColaboratorCard person={friend} isFriend={true} handleRemove={handleRemove} />
      </Box>
    ));
  }

  const searchStrangers = strangers.filter(stranger =>
    stranger.name.toLowerCase().includes(search.toLowerCase())
  );

  let strangersList = <strong >Sorry, but there are no users at the moment</strong>

  if (searchStrangers.length > 0) {
    strangersList = searchStrangers.map(stranger => (
      <Box key={stranger._id}>
        <ColaboratorCard person={stranger} isFriend={false} handleAdd={handleAdd} />
      </Box>
    ));
  }
```

The Order Menu consisted of allowing the user to pick between his own orders or that in which he was a colaborator, which was easily done by having an order model with owner and colaborator fields.  Once an order was picked, the new page would dispaly several components, some of which remained on screen and some others that eould toggle depending on state variables, such as Shopping and Cart views.

*Nav Bar*
```sh
<BottomNavigation onChange={handleChange} as='footer' position='fixed' bottom={0} left={0} right={0} w='100vw' height="70px" bg="primary.100" shadow="md" color="primary.900" zIndex={10}>
      <Flex justifyContent="space-between" w="100%" alignItems="center">
      <Link to="/" style={{ flexGrow: 1, margin: 0, padding: 0 }}>
        <BottomNavigationItem _hover={{ bgColor: "primary.200" }} p={2} m={0}w='100%'>
          <BottomNavigationIcon boxSize={6} as={FaHome} m={0}/>
          <BottomNavigationLabel fontSize="sm" mt={0}>Home</BottomNavigationLabel>
        </BottomNavigationItem>
      </Link>
      ...
      </Flex>
    </BottomNavigation>
  )
```
Coding the add/remove colaborator fucntionality, one of the diferentials in the app, was very simialr to coding the add/remove  friends, except for the added logic of having a third state involved ('colab').  Toggling between pages was as simple as querying a true/false 'switch' state and most of the Item Display card was reused in the Order Item card (once it is in the cart).

Finally, the logic to perform adding and subtracting quantities in the cart was done through the use of methods defined in the order model.  This allowed for more DRY code. 

### Challenges

Working on a project for the first time with React meant having to rewire my brain to work with states adn components.  Leveraging the power of states opened up to new possibilities and results in page display.  If I were to do this project again I would certainly leverage it even more.
One of the biggest challenges I had was with CSS and page responsiveness, since I was trying to make a mobile app in React, without Native. and was using Chakra UI for the first time.  The scroll bar was particularly cahlleging, because I wanted certain features to have it, while others needed to remain static on the page.

### Key Learnings

 * Deployment of a full MERN aplication
 * Use Chakra UI
 * Managing and leveraging state and effect 

### Bugs & Known Issues

* The MVP version work only in screen sizes below 428xp, since it was developed for mobile.
* Avatar is not displaying some images. Known community issue.

### Future Improvements

Here is a list of future improvements:
 * Allow for users to agree with a cart before payment
 * Implement Stripes payment
 * Implement a Food API to increase my database
 * Finish developing the desktop view
