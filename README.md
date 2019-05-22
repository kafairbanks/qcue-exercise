# Qcue Take Home Exercise

1) This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.
2) The application allows the user to create graph nodes by providing their names.
The node name can be any alphanumeric string without spaces in it (e.g. ‘A’, ‘A1’, ‘A1B’).
If the node name is not valid, an error will be shown. 
Nodes are displayed using randomly generated X and Y coordinates.
3) The application does not allow the user to create a node with name that is already
used by another node of the graph. If the user tries to do so, an error will be shown.
4) The application allows the user to create graph undirected edges that connect a pair of
nodes. These nodes must already previously exist in the graph; otherwise, an error will be shown.
5) The application does not allow the user to connect the same pair of nodes more than
once. If the user tries to do so, an error will be shown.
6) The application presents the graph in a visual form using a third-party library called
 ngx-echarts. The visual representation of the graph dynamically updates as the user adds nodes or edges.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
