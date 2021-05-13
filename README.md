# OPIM 668 Web App Project - Breakfast Dani!

## Basics

Four our project, we built a website for Dani's breakfast-themed instagram account, Breakfast Dani.

## Setup

First, fork [the repository from our organization](https://github.com/OPIM-668-GDJJ/web_app_project), then clone it down into whatever directory you would like it to live in. Then, cd down into the project's main directory

```` sh
cd /web_app_project
````

If you'd like, you can add the organization's repository as an upstream remote:

````sh
git remote add upstream https://github.com/OPIM-668-GDJJ/web_app_project
````

> Note: the step above helps us with version control. If you are not contributing to our repo, this is not strictly necessary.

Make sure that you have Nodemon installed:

```` sh
npm install nodemon -g
````

Now, run `npm install` to download required packages which are listed in the `package.json` file.

## Credentials
To run the site, you will need a Google Maps API key. Please see [these instructions](https://developers.google.com/maps/gmp-get-started) on how to set up a Google developer account and get API keys.

Contact form is setup using Formspree (https://formspree.io/). You need to create an account on Formspree and update the form tag with your link to receive contact form data.

You will also need an API key and app ID from Edamam, an online recipe database. Please see (https://developer.edamam.com/) for how to set this up.

You will need to set up a `.env` file to run the app correctly. The contents of the file should be as follows, filled in with your credentials:
````
MAPS_API_KEY="YOUR GOOGLE MAPS API KEY HERE"
EDAMAM_APP_ID="YOUR EDAMAM APP ID HERE"
EDAMAM_API_KEY="YOUR EDAMAM API KEY HERE"
````

Finally, to run the app, run:
````
npm start
````

The application should now be running at `localhost:3000`
