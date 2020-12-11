# Company Profile Coding Challenge

## Requirements

The at-home coding exercise is simply this: read data from a publicly available REST api, and display thec results on a web page.

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

## My Workflow

I tracked my time working on this challenge in the following table:

1 Pomodoro = 25 min

| Pomodoro(s) | Work Accomplished                                              |
| ----------- | -------------------------------------------------------------- |
| 1           | Initialize, start Readme, start brainstorming                  |
| 2           | App.js, App.test.js, Header.js, Header.test.js                 |
| 3           | initialize css and basic layout                                |
| 4,5         | StockSymbolInput and tests                                     |
| 6,9         | getCompanyProfile and tests                                    |
| 7           | Figuring out what does all this stuff mean (see brainstorm.md) |
| 8           | Making CompanyProfileData class                                |
| 10,11,12    | callFmpApi and test (mocking fetch in Jest ...:shrug:)         |

| 13, 14 | MainInfo and tests |
| 15 | DataDisplay and tests |
