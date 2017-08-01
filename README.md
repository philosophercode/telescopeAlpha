# **Telescope α**

It's the web organized in boxes.

![screenshot](https://git.generalassemb.ly/philosophercode/telescope/blob/master/public/TelescopeAlpha_ScreenShot.png?raw=true)

#### Table of Contents

- [Technologies](#technologies)
- [Approach](#approach)
- [Install](#install)
- [Wireframes](#wireframes)
- [Unsolved Problems and Hurdles](#unsolved-problems-and-hurdles)




## Technologies
- Explanations of the **technologies** used
    
    - React (front end)

        - [react-bootstrap](https://react-bootstrap.github.io/)

    
    - Express.js (back-end)

        - [chrome-remote-interface](https://github.com/cyrus-and/chrome-remote-interface)
        - [chrome-launcher](https://github.com/GoogleChrome/lighthouse/tree/master/chrome-launcher)
        - [cloudinary](http://cloudinary.com/documentation/node_image_upload)
        - [word-freq](https://github.com/timdream/wordfreq)
    
    - PostgresSQL (database)

    - Node.js (runs server-side JavaScript)


## Approach
- A couple of paragraphs about the **general approach you took**

I wanted a way to visualize and categorize my most visited and bookmarked URLs. I used expressjs to handle screenshotting and datamining of the URL into the pSQL db. The font-end was managed by react, where I wanted it to have simplicity in the form of two main components, a dropdown where you can add a URL and a category or navigate to a category and the views of animated website screenshots.



## Install
- **Installation instructions** for any dependencies

Navigate to **telescopeAlpha** Folder in the terminal. Then run the install to setup the express server.

```
npm --save install

```

To setup the database navigate to the sub-subfolder, **db/seeds**. Then add the database to pSQL.

```
psql -f seed.sql
npm start {starts express server on 4000}
```

Then, return to the **telescopeAlpha** Folder and navigate to the subfolder, **client** Folder in the terminal. Then run the install to setup the react server.

```
npm --save install

npm start {starts server on 3000}
```




## Wireframes
- Link to your **wireframes** – sketches of  views and interfaces in your application

![Wireframes](https://git.generalassemb.ly/philosophercode/telescope/blob/master/public/Wireframe.jpg?raw=true)

![App Model](https://git.generalassemb.ly/philosophercode/telescope/blob/master/public/App%20Abstraction%20Model.jpg?raw=true)


## Unsolved Problems and Hurdles
- Descriptions of any **unsolved problems** or **hurdles** your team had to overcome

    Th react front-end is still missing C_UD functionality (the express app does have CRUD). The service worker isn't receiving/send req and res and it is both storing screenshots in the cloud and on the local folder.

    I was happy to have made an app that has functionality and I was able to implement some of my ideas into code, which is awesome. Thanks for a great course, I'm looking forward to using the many skills I've learned!
# telescopeAlpha
