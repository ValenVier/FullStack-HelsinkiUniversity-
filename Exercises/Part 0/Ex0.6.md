
user->>browser: Manipulate the form, write a note and click ‘Save’.
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Returns response with message: {"message":"note created"} and Payload: {content: "note", date: "2025-02-09T19:47:39.577Z"}
    deactivate server
    
    Note right of browser: The browser manipulates the Payload obtained from the server to display the note without calling the server.
