# youtube-subscription-manager
A YT subscription interface that helps you get organized with the channels you like

## Requirements

- Log in with a specific user profile
    - use Google authentication
- Read all channels a user profile subscribes to.
    - User profile was selected during authentication
- Allows users to
    - Export all channels to a text file (as a restore/backup)
    - Unsubscribe to any channel
    - Unsubscribe to ALL channels

## How to

### React UI

- Login component
    - Logged out state
    - Logged in state
- Channels list
    - Show button to export all
    - Show button to delete all
- Channel card
    - Delete

### AWS Lambda or AstraDB

- (future) export all data to a database
    - data should be organized by profile
    - a channel you subscribed to is *never* lost. One of the columns would say subscribed_date and unsubscribed_date