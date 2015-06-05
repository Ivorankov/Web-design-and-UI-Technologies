/*Problem 1. Planar coordinates

 Write functions for working with shapes in standard Planar coordinate system.
 Points are represented by coordinates P(X, Y)
 Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
 Calculate the distance between two points.
 Check if three segment lines can form a triangle.*/
function test() {
    var point1 = generatePoint(-2, 1),
        point2 = generatePoint(1, 5),
        point3 = generatePoint(5, 5),
        point4 = generatePoint(1, 1),
        point5 = generatePoint(-5, 3),
        point6 = generatePoint(0, 1),
        line1 = generateLine(point1, point2),
        line2 = generateLine(point3, point4),
        line3 = generateLine(point5, point6);
    alert('First line length: ' + line1.length);
    alert('Second line length: ' + line2.length);
    alert('Third line length: ' + line3.length);
    alert('Can they form a triangle? - ' + checkTriangle(line1,line2,line3));
}
function generatePoint(x, y) {
    return {x: x, y: y};
}
function generateLine(point1, point2) {
    return {point1: point1, point2: point2, length: calcLength(point1, point2)};
}
function calcLength(point1, point2) {
    var result = Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    return Math.round(result * 100) / 100;
}
function checkTriangle(line1, line2, line3) {
    if ((line1.length + line2.length > line3.length) &&
        (line1.length + line3.length > line2.length) &&
        (line2.length + line3.length > line1.length)) {
        return 'Yes, they can';
    } else {
        return 'No, they cant';
    }
}
