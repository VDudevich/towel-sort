
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0) {
        return [];
    }
    return matrix.flatMap((elem, index) => {
        return index % 2 === 0 ? elem : elem.reverse();
    });
}
