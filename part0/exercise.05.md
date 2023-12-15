sequenceDiagram
    participant Browser
    participant SPA
    participant Server

    rect rgb(200, 200, 255)
        Browser->>SPA: Initiates creation of a new note
        SPA->>SPA: Displays note creation interface
    end

    Browser->>SPA: Enters data for the new note
    SPA->>SPA: Validates and prepares data for submission

    rect rgb(200, 255, 200)
        SPA->>Server: Sends POST request to create a note
    end

    Server->>Server: Processes the request
    Server->>SPA: Responds to the client (e.g., status 200 OK)

    SPA->>SPA: Updates interface with the newly created note

    SPA->>Browser: Interface updated with the new note
