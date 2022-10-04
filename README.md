# LAB - Class 11

## Project: CAPS

### Author: KC Hofstetter

### Problem Domain

CAPS Phase 1: Begin the build of an application for a product called CAPS - The Code Academy Parcel Service. In this sprint, we’ll build out a system that emulates a real world supply chain. CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, each vendor will be notified that their customers received what they purchased.

This will be an event driven application that “distributes” the responsibility for logging to separate modules, using only events to trigger logging based on activity.

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
