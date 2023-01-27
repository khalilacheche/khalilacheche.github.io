# NMIoT

NMIoT is a device that:
* tells you the date and time
* tells you weather forecast for the week
* tells you the metro (m1 in Lausanne) departure times
* supports iOS devices screen cast via Airplay
![alt text](https://github.com/khalilacheche/NMIoT/blob/master/outside.png?raw=true)



The app is written in Python3 and consists of five threads, one for the main app, and four each responsible for the functionnalities mentionned above.


## Technical Aspect:

### Metro Departure Times:
As I started the project, I used webscraping to get the departure times for the metro times, since TL (main operator of public transporttations in Lausanne) doesn't provide a public API with documentation.
Later on, I discovered using the browser dev tools the official REST API they were using for their mobile and web app. 
With a bit of tinkering, I managed to learn what requests should be made to get the info I was looking for.


### Airplay
I used [RPiPlay](https://github.com/FD-/RPiPlay) for casting. This is an open-source implementation of an AirPlay mirroring server for the Raspberry Pi.


### Hardware:

For the main components, I used a Raspberry Pi Zero W to run the App, a recycled laptop monitor and an LCD driver board(to connect the HDMI out of the RPi to the laptop screen).
I used a 220V AC -> 12V DC (36W) adapter to power up the driver board and screen, a car adapter (12V DC -> 5V DC) to power up the RPi. I also had to use some heatsinks for the driver board, as it was quickly heating up at "dangerous" temperature
I cut out a box made of plywood to fit all the components.
Here's a look on the inside of the device:
![alt text](https://github.com/khalilacheche/NMIoT/blob/master/inside.png?raw=true)


This is a project I initially started in 2019 and was sitting around for quite a while (almost 2 years) due to a lack of tools and hardware. I intend to add some more features in the future.