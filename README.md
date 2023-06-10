# ReactionApp (MongoDb - Express)

## Description

Using MongoDB to build a social network web application. Using Express.js for routing, MongoDB database, and the Mongoose ODM.


## Table of Contents

- [License](#License)
- [Future](#Future)
- [Credits](#Credits)
- [Contact](#Contact)

## License

License: MIT License

## Credits

Jose Escoto, Full Stack Development Student, University of Berkeley. 

## Contact

For more questions please contact below:
Email: j.escoto@gmail.com
GitHub: [escotoj](https://github.com/escotoj)


### TODO 
- CHECK - timestamps in the models, and update route in the controller Reactiongid. 
- TEST ROUTES
- USER AND THOUGHT PUT ROUTES NEED WORK

- REACTION NEEDS WORK
- FRIENDS NEEDS WORK
- userroutes.js friend route


### DONE
- FINISH ADDING ALL ROUTES
- ADDED (User Controllers code)
- Completed the Thought controller
- FIXed Reactions.js and merge it to Thought.js
(This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.)
- ADD full REAME
- get mongoDB connected `+`
- API routes for user and thought 

## CODE NEEDED FOR SERVER 

- brew services restart mongodb-community 
- brew services stop mongodb-community@6.0

brew services start mongodb-community@6.0 (gives error regarding bootstrap)

sudo brew services start mongodb-community@6.0 - server running with no auth


