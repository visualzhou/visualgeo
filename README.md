 Visualize MongoDB geo query explain() result. Just copy and paste .explain() result of geo query. There is no hosted service for this, but if you clone the repository then:

 1. Set up a virtual environment for python
 2. Install flask
```sh
python3 -m pip install flask
```
 3. launch the server:
 ```sh
python3 server.py 
```
4. Connect to localhost:5000

You can use the tool.

![Example Annulus Visualization, step 1](/static/example_screenshot_1.png "Example Visualization, Step 1")

![Example Annulus Visualization, step 2](/static/example_screenshot_2.png "Example Visualization, Step 2")

S2 geospatial library is compiled to asm.js by [mongo-s2](https://github.com/visualzhou/mongo-s2) and used to translate geo hash.
