# Sprint Timer

![Sprint Timer Example](https://raw.githubusercontent.com/bryanberger/sprint-timer/master/demo.png)

A digital countdown clock used to timebox your team discussions. Built out of the need to stay on task with remote employees, where a physical timer does not translate well.

## Live
https://bryanberger.github.io/sprint-timer

## Install / Develop
-   `npm install`
-   `gulp serve`
-   `bower install`

## Deploy
-   `gulp build`
-   `gulp deploy`
-   `(deprecated) git subtree push --prefix dist heroku master`

_This deploys `/dist` to a gh-pages branch. You may optional setup server.js to be pushed to heroku._

## Usage

-   Click `0` to start a `60m` timer.
-   Click any other number to start counting down from there.
-   Click the icons to stop, mute, and unmute.

---

_**note**: The timer plays a sound for `~4 seconds` when the time runs out, unless muted._

## Credits
- Timer CSS forked and modified from this [Codepen](https://codepen.io/ky0suke/pen/MyNXWX) by Kyosuke.
- Inspired by the [Time Timer MOD® Sprint Edition](https://www.timetimer.com/products/time-timer-mod-sprint-edition).
