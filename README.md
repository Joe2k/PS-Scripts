# PS Data

## Scripts

-   **appendLocation.js** - For Responses Page | Appedning the city name to PS Site name for easy display in cg cutoff page

-   **cleanChronicles.js** - For Chronicles Page | Trim whitespaces in name and id
-   **combineChronicles.js** - For Chronicles Page | Combine all years chronicles of a particular sem by merging along the PS Site name
-   **fuzzy.js** - For Chronicles Page | Uses fuzzy logic to find similar PS Site names over a threshold and displays them to merge to one station
-   **objectToArrayForChronicles.js** - For Chronicles Page | To change objects to array to use mongo import to db
-   **scrape.js** - For Chronicles Page | To scrape all the chronicles from the official pdf file. Need to add last names of students at each sector in the script. Look at the example given in script and the corresponding pdf to understand.

## Important Commands

To Login to container

```
ssh -i psitseasy.key root@152.70.64.229 -p 3000
```

To import chronicles/responses directly to mongo from json file

```
mongoimport --host cluster0-shard-00-01.d4jpb.mongodb.net:27017 --db pref --type json --file ./PS2_2022_sem1_StationDetails.json --jsonArray --authenticationDatabase admin --ssl --username psitseasy_admin --password brodysmith --drop
```
