var jsgraphs = require('js-graph-algorithms');

const g = new JsGraphs.WeightedGraph(24);

//add edges of graph
//for First/Ground floor

g.addEdge(new jsgraphs.Edge(1, 14, 0.08057));
g.addEdge(new jsgraphs.Edge(14, 3, 0.08956));
g.addEdge(new jsgraphs.Edge(14, 15, 0.05127));
g.addEdge(new jsgraphs.Edge(15, 2, 0.10755));
g.addEdge(new jsgraphs.Edge(15, 16, 0.12295));
g.addEdge(new jsgraphs.Edge(16, 4, 0.09189));
g.addEdge(new jsgraphs.Edge(16, 17, 0.07996));
g.addEdge(new jsgraphs.Edge(17, 5, 0.11354));
g.addEdge(new jsgraphs.Edge(17, 18, 0.07996));
g.addEdge(new jsgraphs.Edge(18, 6, 0.09014));
g.addEdge(new jsgraphs.Edge(18, 19, 0.09105));
g.addEdge(new jsgraphs.Edge(19, 7, 0.11101));
g.addEdge(new jsgraphs.Edge(19, 20, 0.11339));
g.addEdge(new jsgraphs.Edge(20, 8, 0.26266));
g.addEdge(new jsgraphs.Edge(20, 21, 0.09764));
g.addEdge(new jsgraphs.Edge(21, 9, 0.10024));
g.addEdge(new jsgraphs.Edge(21, 22, 0.08972));
g.addEdge(new jsgraphs.Edge(22, 11, 0.10001));
g.addEdge(new jsgraphs.Edge(22, 23, 0.11339));
g.addEdge(new jsgraphs.Edge(23, 10, 0.10930));
g.addEdge(new jsgraphs.Edge(23, 24, 0.26266));
g.addEdge(new jsgraphs.Edge(24, 13, 0.09513));
g.addEdge(new jsgraphs.Edge(24, 12, 0.10179));

g.node(1).label='14.5803123060488, 120.984854362326, 1';
g.node(2).label='14.5803133092096, 120.984812342054, 1';
g.node(3).label='14.5802896895844, 120.984843891322, 1';
g.node(4).label='14.580267877380, 120.984803655906, 1';
g.node(5).label='14.5802899209263, 120.984766220847, 1';
g.node(6).label='14.5802495650393, 120.98476670262, 1';
g.node(7).label='14.5802354511223, 120.984748555815, 1';
g.node(8).label='14.5802263319282, 120.984719994746, 1';
g.node(9).label='14.5802432589195, 120.984676671735, 1';
g.node(10).label='14.5801877289438, 120.984646301099, 1';
g.node(11).label='14.5802326474332, 120.984656227899, 1';
g.node(12).label='14.5801573589126, 120.984586121687, 1';
g.node(13).label='14.5801873256036, 120.984568641321, 1';
g.node(14).label='14.5803031084489, 120.984834117166, 1';
g.node(15).label='14.58029694681, 120.984822040143, 1';
g.node(16).label='14.5802817355168, 120.984794337753, 1';
g.node(17).label='14.5802727188028, 120.984777084507, 1';
g.node(18).label='14.5802632109427, 120.984757972975, 1';
g.node(19).label='14.5802521905122, 120.984737269083, 1';
g.node(20).label='14.5802391663681, 120.984711734280, 1';
g.node(21).label='14.5802281459364, 120.984686889607, 1';
g.node(22).label='14.5802174594589, 120.984665495583, 1';
g.node(23).label='14.5802044353101, 120.984637200262, 1';
g.node(24).label='14.5801727098212, 120.984575778711, 1';

//export latitude, longitude, floor number
export {g};



