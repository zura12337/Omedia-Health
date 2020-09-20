
Registration (Separate Page)

Fields: name, email, password, desired weight, desired meal calories per day, desired activity calories per day
Profile (Separate Page)
Fields: name, email, password, desired weight, desired meal calories per day, desired activity calories per day
Weight (Separate Page)
Fields: date, weight (ex: date: 2020-01, weight: 75 kg)
User can enter his/her physical weight (in kg)
User can edit entry once created
User can list all weights as a table 
Weight goes green if less than or equal to desired weight, otherwise goes red
Meal (Separate Page)
Fields: date, name, calories  (ex: date: 2020-01, name: khinkali, calories: 185)
User can enter his/her meal (in calories) 
User can edit meal once created
User can list all meals as a table (group them by date)
Meals for the whole day go green if total calories are less than or equal to desired meal calories per day, otherwise they all go red
Activity (Separate Page)
Fields: date, activity type, distance ex: (date: 2020-01, type: hiking, distance: 10km)
User can enter his/her  activity
Hiking (1km => 40 calories)
Running (1km => 140 calories)
Swimming (1km => 300 calories)
Calculate burned calories based on activity type and distance
User can edit activity once created
User can list all activities as a table (group them by date) (show calculated calories)
User can filter activities by activity type
Activities for the whole day go green if total activities are more than or equal to desired activity calories per day, otherwise they all go red
Dashboard (Separate Page)
User can see all his/her meals, weights, activities in one place
Create a table that is grouped by a date
If data is missing for a given day (weight is missing, meal calories, are missing, activity calories are missing) cell should be empty
Example:
desired weight => 90.0kg
desired meal calories per day => 1600 calories
desired activity calories per day => 750 calories
Date
Weight
Meals
Activities
2020-01-01
90.1kg
1600 calories
800 calories
2020-01-02
89.9kg
1800 calories
750 calories
2020-01-03
90.2kg
1700 calories
675 calories

Technical Details
Use React
Do login/registration locally
Save data locally (local storage) and don’t use any backend or API
