// 4. Type Alias
type Point = {
    x: number;
    y: number;
};
function calculateDistance(point1: Point, point2: Point) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}