## VS Code Editor Setup

- Open Vs Code and download extension **Prettier - Code formatter** ( So we can keep same style for all contributers )
- Open Vs Code settings change following things:
  1. Set **Editor: Tab Size** to 2
  2. Set **Prettier: Tab Width** to 2
  3. Set **Prettier: Jsx Single Quote** to true ( marked )
  4. Set **Prettier: Single Quote** to true ( marked )
- Open Vs settings.json file add following code ( Optional ):

```
"emmet.includeLanguages": {
  "javascript": "javascriptreact"
},
```

## How to make pull request

Don't know how to make pull request look at this https://www.youtube.com/watch?v=rgbCcBNZcdQ

1. Fork repo from github
2. Clone that repo on your local machine

```
git clone https://github.com/< Your User Name >/JobSeekerApplication.git
```

3. create new branch

```
git checkout -b new-branch-name
```

4. Make change, add, commit with proper message
5. Push the change on origin branch

```
git push origin new-branch-name
```

6. Open github click **Compare & pull request**
7. Add proper comment and **Create pull request**
8. Done! We will review your pull request after that.
