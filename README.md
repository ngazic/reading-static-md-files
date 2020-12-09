# reading-static-md-files

Simple app for reading static .md (markdown) pages and rendering them in component as raw HTML. 

### API endpoints
the git API endpoint for this repo
```
https://api.github.com/repos/ngazic/reading-static-md-files/contents/[$PATH TO FILE] 
```
API endopoint for showing README.md file:
```
https://raw.githubusercontent.com/ngazic/reading-static-md-files/master/README.md
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### Dependencies
 
#### [raw-loader](https://www.npmjs.com/package/raw-loader)

Configuration of Webpack to use this loader is required (see vue.config.js and shims-vue.d.ts)

#### [remarkable](https://www.npmjs.com/package/remarkable)
