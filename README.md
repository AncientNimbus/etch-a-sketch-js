# Etch-a-Sketch

My JavaScript refresher project. More info can be found [here](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)

<img src="https://private-user-images.githubusercontent.com/99920424/440179260-291d82b4-4b09-4d26-b1a9-61b8e031d890.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDYzNTcwOTksIm5iZiI6MTc0NjM1Njc5OSwicGF0aCI6Ii85OTkyMDQyNC80NDAxNzkyNjAtMjkxZDgyYjQtNGIwOS00ZDI2LWIxYTktNjFiOGUwMzFkODkwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTA0VDExMDYzOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZjMDY1ODhiZjJlMjVlZWU0MTcyOTgyNTA5MmU0OTMyZmY4YWUwYzY3MDFjYWJkZDY4NGY3YzU5ZjMzZTk3ZDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.yPb1DVsDIZAsY1v_9iEZwDbAxC1_So3V0wplEvQ2Irw" alt="Cover " style="zoom:50%;" />

## Feature

- Automatically paint a tile when a mouse is hovering on top
- 10-Steps gradient - Each interaction will increase the tile colour richness by 10%
- Two paint modes
  - Monochrome - From light grey to black
  - Multicolour - Randomised colour 
- Canvas size control 
  - Select the Upwards Arrow to increase the grid size
  - Select the Downwards Arrow to decrease the grid size
- Current version is a fixed size desktop only experience

## UX Consideration

- A toy-like user interface to mimic the original Etch-a-Sketch design
- Shadow around the canvas to add depth to the interface
- Control buttons are placed within the two dials to maintain aesthetics
- User feedback: Buttons change colour based on interaction types 
- User feedback: Disable grid control when grid size limit is reached