---
title: Productive ways to speed up your coding
category: "productivity"
cover: carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg
author: Grace Zarczynska
---

It has been a while since I started writing code. Unfortunately, it has been not that long actually since I realised how slow and unproductive I can be in comparison to my colleagues. I'm not saying that I am bad at code or the fact that I am just generally slow (This is imposter syndrome territory, I hope). All I am saying that some of the tasks that I was doing took way too much time. When a manual task of disabling the `.env` file, running the tests and enabling the file was way too cumbersome for my liking, it was time to say stop.

These are few tips, that I have found from my colleagues at work, online and tutorials that I followed along the way, to make myself a slightly faster. The things below did not help me solve the issues I have encountered, but just merely dealt with the simple and annoying tasks of every day. 


## Alias everything :fire: ##

The issue I mentioned above was one of the most annoying things I did for about half a year. As the environment variables had an impact on the results of tests, they had to be disabled (I used just to rename the file), then the tests had to be run and afterwards renaming the .env file back to normal. When I finally created an alias for the above in my `~/.bash_profile` I have finally understood the power of aliases. No longer did I have to worry about losing the .env file, running the failing test suite and just having to do any of the manual tasks. To do the same as I did, just follow the recipe below:

```terminal
nano ~/.bash_profile

alias test="mv .env .nenv; yarn test; mv .nenv .env;"
```
&nbsp;

### Create alerts for long tasks ###

Well. If you have a long task like the one above, that will run a gigantic suite of tests that can take up to 10 minutes (yes ten minutes), staring in a terminal is probably not the best use of your time. However, when I get distracted by doing another piece of work or just catching up on admin, I sometimes forget about the tests altogether :sweat_smile:

This is where alerts come in useful. 

```terminal
nano ~/.bash_profile

alias test="mv .env .nenv; yarn test; mv .nenv .env; alert"
alias alert="osascript -e 'display notification \"Task Finished\" with title \"CMD\"'; afplay /System/Library/Sounds/Glass.aiff"
```

&nbsp;
## Automate Everything ##

If you ever have experienced a repetitive task, there are great ways of minimising of the time consumptions of tasks like that. If you have to for example compare data sets manually or generate data on a reoccurring basis, create scripts that will allow you to minimise the amount of time spent on faffy tasks. Maybe even write your CLI!

&nbsp;
## Write recipes for your IDE ##

How many times do you have to create a React (Vue, Angular etc) component, how many times did you have to copy paste a test suite and delete all of the irrelevant parts. I used to do that constantly and this has added a few unnecessary steps. To be fair, copy-paste is most likely better than trying to write it out from memory, but there is an easier way to do this. 

Sublime, VSCode and Atom can create 'snippets'. The snippets are just like recipes that you bring up with a quick command. In VSCode, all you need to do is press `Command+Shift+P` and choose `Configure user snippets`. If you want to create your snippet, there is a useful site [here](https://snippet-generator.app/)

An example of my commonly used snippet: 

```json
"testing": {
  "prefix": "test",
  "body": [
    "describe('Test Suite', () => {",
    "  test('Test', () => {",
    "    expect(arg).toEqual();",
    "  });",
    "});"
  ],
  "description": ""
}
```

&nbsp;
## Prettier :nail_care:

Keeping your code tidy is another task that can be avoided. How much time do you need to spend to rearrange the code to look the way you want it to? Or sometimes the code itself will become very messy and not very consistent. Prettier is here to help, you can download a plug-in quickly and set it to global or folder based config. All you need to do to keep it tidy is to save your file!

&nbsp;
## Bookmark your goto documentation ##

I wouldn't be able to tell you the number of times I spent looking for the right information, the right documentation and the exact commands that I forgot or lost. You have so many tools at your disposal: stars in Slack or GitHub and bookmarks in browsers for example. Not mentioning most of the websites have their way of bookmarking cool information. Keep them tidy and have the stuff that you use the handiest!

&nbsp;
## Clean up your workspaces ##

Last but not least, keeping your desktop tidy is a valuable habit. Being able to get to your directories quickly, know exactly what lives where is a great time saver. I tend to have one dev folder in which I keep all of my projects. You will never have to look for your index.htmls or gigantic libraries. It seems like the easiest and most obvious step of them all, but it is one of the hardest one to upkeep.

&nbsp;
If you follow the steps above, I bet that you will be a prop time-saver. Not only your job will thank you, but all of your side projects will blossom. If I missed any of the great productivity hacks, please let me know! 