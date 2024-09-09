# Take Home Coding Challenge

For this, the goal is less of a standard graded assignment, and more to give us some insight into how you approach projects. We’ve actually taken a page that we built out for our product pilot for this, so it’s exceptionally relevant to what you’d be doing on our team. We’d expect you to spend an hour or two putting a front-end mockup together for this, email us a copy of your results the night before your interview, and then basically demo it to us and walk us through the assumptions, design choices, limitations, etc you ran into while building it out. Here’s the challenge details:

You have been asked to build a Survey List Page proof-of-concept. This is a single page in a larger Survey Management tool that logged-in users will use to see a list/index of all surveys available in the system, and allow them to create, edit, distribute, delete, and fully manage a survey lifecycle.

Assuming a logged in user, this page should list out all of the active surveys in a tabular format, displaying Survey Status, Survey Title, Date Created, and Survey Hyperlink. Clicking on a specific row in the table should redirect the user to that specific survey details where they can further edit the survey. (assume this page is being built out by a different team)

You have been provided with a page mock up from UX, some design assets, and information regarding the API calls and returns. Since the other teams have not finished building out the APIs or site framework (nav bars, etc), your task is to build an initially stand-alone page (not connected to APIs, DBs, etc) that can be later wired up to the APIs and site framework.

Example API request/response:

URL Endpoint: https://{domain}/api/instances/

HTTP Method: GET

cookie: {'classranked_username': 'XXXXXX', 'auth_token': 'YYYYYYY'}

Failure: 405 (HTTP Method is not GET)

{"error": "Incorrect http request"}

Failure: 403 (Cookie missing in request or set to null)

{"error": "No auth token found"}

Failure: 404

{"error": "Resource not found"}

Failure: 500 (Issue from Database Query)

{"error": "Internal Server Error"}

Success: 200

[

{

      "survey_id":"262c7ecb-982d-11ed-bba1-022b4079eda1",

      "survey_instance_id":"30985c7f-98ed-11ed-bba1-022b4079eda1",

      "survey_revision":1,

      "title":"Data Systems 101",

      "description":"Spring 2023",

      "start_timestamp":"2023-04-01 00:00:00",

      "end_timestamp":"2023-05-01 00:00:00",

      "survey_url":https://foo.net

},

{

      "survey_id":"262dece9-982d-11ed-bba1-022b4079eda1",

      "survey_instance_id":"566cde6b-98ed-11ed-bba1-022b4079eda1",

      "survey_revision":1,

      "title":"Data Systems 102",

      "description":"Spring 2023",

      "start_timestamp":"2023-04-01 00:00:00",

      "end_timestamp":"2023-05-01 00:00:00",

      "survey_url":https://bar.net

}

]
