sequenceDiagram
    participant User
    participant SPA
    participant Server

    rect rgb(200, 200, 255)
        User->>SPA: Start creation of new note
        SPA->>SPA: Sample note creation interface
    end

    User->>SPA: Enter data for the new note
    SPA->>SPA: Validate and prepare data to send

    rect rgb(200, 255, 200)
        SPA->>Servidor: POST request to create note
    end

    Server->>Server: Process the request
    Server->>SPA: Customer response  (status 200)

    SPA->>SPA: Update interface with new note created

    SPA->>User: Updated interface with new note