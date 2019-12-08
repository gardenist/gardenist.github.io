// point 객체는 x,y 좌표의 값을 갖고 있습니다.
// point = { x: 1.5, y: 24.3 }
export function getLength(point1, point2) {
    return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
}

export default {
    getLength
};