sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: POST https://fullstack-exampleapp.herokuapp.com/new_note
    
    Server->>Browser: (status 302) Redirect to https://es.wikipedia.org/wiki/Redirecci%C3%B3n

    (The server asks the browser to perform a GET to the new location)

    Browser->>Server: GET https://es.wikipedia.org/wiki/Redirecci%C3%B3n
    (The browser reloads the notes page, triggering three additional HTTP requests)
    Browser->>Server: GET .css
    Browser->>Server: GET .js 
    Browser->>Server: GET .json 
    Server->>Browser: Status 200 (OK)
    (A new element has been added to the list)
