# Company Profile Coding Challenge

**_This is still a work in progress!_**

## Getting Started

To install the app locally, clone the repo and then:

```bash
yarn install
```

To start the dev server:

```bash
yarn start
```

To run the tests:

```bash
yarn test
```

## Project Requirements

The at-home coding exercise is simply this: read data from a publicly available REST api, and display the results on a web page.

You can use any javascript framework you feel comfortable with.

The Rest API I picked is documented here (this is just one I found online):

[https://financialmodelingprep.com/developer/docs/companies-key-stats-free-api](https://financialmodelingprep.com/developer/docs/companies-key-stats-free-api)

The particular endpoint will be the “Company Profile” one.

The requirements are pretty generic on purpose, to give you some room to work within (Do not feel limited by them)..

1. As a user, I want to be able to provide the stock symbol of any company, so that I can retrieve and view all of that company’s profile information

- Given that the company data for “changes” or “changesPercentage” are positive, when displayed the field should be green
- Given that the company data for “changes” or “changesPercentage” are negative, when displayed the field should be red
- Given that the price field has data, it should be displayed with the $ sign
- Given that the “website” field has a link, when I click on it, it should take me to the website

## My Goals

With this coding challenge I want to demonstrate my ability to write clean, semantic, well-tested, maintainable, extensible code.

## My Solution

### Challenges and Anomalies

#### Differences in JSON data between browsers and Node.js

I'm getting the data from the API using the built in `fetch()` API. The problem is that the browsers seem to do this differently than Node. Whereas the `response.json()` method returns an array in the browser, it returns an object in Node. Thus, when my tests were working (since they're running in the console with Jest, i.e. Node) my app was breaking and vice-versa. I had to add logic to the `getCompanyProfile()` method to account for both possibilities, namely that the json object was just an object, or that it was at index 0 of an array.

#### Mocking modules with Jest

Until now, I've never really delved into mocking modules with Jest. While the Jest documentation is good, it is almost too simple and therefore difficult to extrapolate the examples to a real-world use case. In my case, some googling uncovered a couple blog posts with an alternative strategy not mentioned in the Jest docs explicitly that allowed me to mock a function being imported by another function and then manipulate its behavior.

### What I would do differently

I have focused most of my time trying to write clean, readable, well-tested code that could theoretically be extended upon easily. I did not focus so much on the bells and whistles of the UI, although I find that an attractive and intuitive UI is _almost_ as important to the quality of the App as the quality of the code. As it is, I was able to implement a dark/light theme switcher, but if I had more time, I would certainly have focused more on the visuals and made the app look sharp.

I would love to add an explanation for what the different items in the Company Profile mean. I think the best way would be to add the info as tooltips that would appear when the user hovers over a piece of information for a moment. Because of the way my data is structured, I could add a `tooltip` key alongside the `label` and `value` keys in each of the data point objects in the `CompanyProfileObject` class. This would make coordinating the tooltips simply a matter of adding a few lines of JSX in the `MainInfo` and `DataDisplay` components. This would make the app more informative and more useful for people.

## My Workflow

### Git

I've tried to make meaningful git commit messages along the way, but of course in a production environment, there would be feature branches, rebases, squashing commits, etc. I haven't done any of that, simply because I'll never actually need to collaborate with anyone on this repo.

### My Time

I tracked my time working on this challenge in the following table:

1 Pomodoro = 25 min

| Pomodoro(s) | Work Accomplished                                              |
| ----------: | -------------------------------------------------------------- |
|           1 | Initialize, start Readme, start brainstorming                  |
|           2 | App.js, App.test.js, Header.js, Header.test.js                 |
|           3 | initialize css and basic layout                                |
|         4,5 | StockSymbolInput and tests                                     |
|         6,9 | getCompanyProfile and tests                                    |
|           7 | Figuring out what does all this stuff mean (see brainstorm.md) |
|           8 | Making CompanyProfileData class                                |
|    10,11,12 | callFmpApi and test (mocking fetch in Jest ...:shrug:)         |
|      13, 14 | MainInfo and tests                                             |
|          15 | DataDisplay and tests                                          |
|          16 | Basic css                                                      |
|         ... | ...still working                                               |
