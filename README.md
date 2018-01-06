This is a sample project using [Create React Native App](https://github.com/react-community/create-react-native-app).

## Table of Contents

* [What's Mobile Flashcards App?](#app-intro)
* [Get Starter](#get-started)
  * [npm install](#npm-install)
  * [yarn start](#yarn-start)
  * [Using Expo](#using-expo)
  * [Run on iOS or Android Phone](#using-ios-or-android-device)
  * [Run on iOS or Genymotion emulator](#using-emulator)
* [How to use this App?](#how-to-use-this-app)
  * [Homepage](#homepage)
  * [Add a Deck](#add-deck)
  * [Add Questions and Answers](#add-questions-and-answers)
  * [Take a Quiz](#take-quiz)
  * [Daily Reminder Notifcation](#daily-reminder)
* [MIT License](#mit-license)


## App Intro

Mobiel Flashcards is a mobile app that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## Getting Started

### `npm install`

After downloading this GitHub repo, run `npm install` on your terminal to install dependencies.

### `yarn start`

Run the program by typing `yarn start` on your terminal.

### Using Expo

This app is built on [Expo](https://expo.io)

### Run on iOS or Android Phone

1. Install Expo app from Google Play or Apple Store
2. Use QR code to run this program on your device

### Run on iOS or Android Emulator

Click `a` in your terminal to run Android emulator, or `i` to run iOS simulator

## How To Use This App?

### Homepage

1. When you open this app, you'll a homepage with 2 tabs, ie. Show All Decks and Add a Deck tabs
2. We've provided 2 default Decks with existing Q&A to get started

### Add A Deck

1. To add a deck, click + sign or go to `Add a Deck` tab
2. Enter the name for the new deck
3. Click `Save` button 
4. Next, you'll be able to add Q&A or take Quiz

### Add Questions and Answers

1. To add a Q-and-A, click `Add QA Cards` button from individual deck
2. Enter a Question and the answer
3. Click `Save` button 
4. Next, you'll routed back to individual deck

### Take a Quiz

1. To start a quiz, click `Start Quiz` button from individual deck
2. The app will show a question
3. If you answer correctly, click `correct` button and you'll get +1 score
4. If you answer incorrectly, click `incorrect` button and you'll get +1 score
5. If you need help, click `Show Answer` button to see the answer
6. At the end of the quiz, you can `Restart Quiz` or `Go Back to Deck`

### Daily Reminder Notification

This app will send you a local notification everyday at 8pm, unless if you take a quiz.

## MIT License

The MIT License (MIT)

Copyright (c) 2018 - Present

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.