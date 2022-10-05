# LAB - Class 11, 12

## Project: CAPS

### Author: KC Hofstetter

### Problem Domain

- CAPS Phase 1: Begin the build of an application for a product called CAPS - The Code Academy Parcel Service. In this sprint, we’ll build out a system that emulates a real world supply chain. CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, each vendor will be notified that their customers received what they purchased.

- This will be an event driven application that “distributes” the responsibility for logging to separate modules, using only events to trigger logging based on activity.

- In Phase 2, we’ll be changing the underlying networking implementation of our CAPS system from using node events to using a library called Socket.io so that clients can communicate over a network. Socket.io manages the connection pool for us, making broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

- The core functionality we’ve already built remains the same. The difference in this phase is that we’ll be creating a networking layer. As such, the user stories that speak to application functionality remain unchanged, but our developer story changes to reflect the work needed for refactoring.

### Links and Resources

- [ci/cd](https://github.com/khofstetter94/caps/pull/1) (GitHub Actions)

### Setup

#### How to initialize/run your application (where applicable)

- node index.js

#### Features / Routes

- As a vendor, I want to alert the system when I have a package to be picked up.
- As a driver, I want to be notified when there is a package to be delivered.
- As a driver, I want to alert the system when I have picked up a package and it is in transit.
- As a driver, I want to alert the system when a package has been delivered.
- As a vendor, I want to be notified when my package has been delivered.

#### UML

![Lab 11 UML](./img/lab11.png)
![Lab 12 UML](./img/lab12UML.png)
