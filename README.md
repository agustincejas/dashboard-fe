# dashboard-fe

## Setup

`nvm use`

`npm i`

`npm run start`

Application runs on port http://localhost:3000/ this is important because of cors allowed origins, when changing port, new port must be added to cors config in server

### Design decisions

- React-query to handle state related to backend calls

- useState to handle local component state
- Chartjs for charts
- Styled components for styling
- Folder structure as flat as possible to facilitate search
- Axios to handle network requests
- App has two routes: one to post metrics and see the list of existing ones, and one to see the chart of a metric

Things that were left out for time

- Styling
- Form validation
- Loading states
- Empty states
- Chart improvements: labels, date formatting
